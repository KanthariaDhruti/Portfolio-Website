import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, EASE } from "../lib/motion";
import { useLenis } from "../lib/scroll";
import {
  GREETINGS,
  RISE,
  SWAP,
  SEQUENCE_END,
  EXIT,
  INTRO_DURATION,
  markIntroSeen,
} from "../lib/intro";

/**
 * The curtain. Greetings rise out of a single clipped line — the same masked
 * move the images use — then the paper itself lifts to hand over to the hero.
 * Nothing fades, nothing bounces, and the hairline is the only progress
 * indicator, because a percentage counter would be the site talking about
 * itself rather than saying hello.
 */
function Intro({ onComplete }) {
  const rootRef = useRef(null);
  const wordsRef = useRef([]);
  const lenis = useLenis();

  useGSAP(
    () => {
      const words = wordsRef.current.filter(Boolean);
      if (!words.length) return;

      /* Hold the page still underneath: no scrolling behind the curtain. */
      lenis?.stop();
      document.body.style.overflow = "hidden";

      /* The curtain is opaque and holds the scroll, so it must never be able
         to outlive its own timeline. GSAP runs on requestAnimationFrame, which
         a backgrounded tab throttles or stops outright; this wall clock ends
         the intro regardless of how many frames were actually served. */
      let failsafe;

      const finish = () => {
        clearTimeout(failsafe);
        document.body.style.overflow = "";
        lenis?.start();
        markIntroSeen();
        onComplete?.();
      };

      const timeline = gsap.timeline({ onComplete: finish });

      failsafe = setTimeout(
        () => {
          if (!timeline.isActive() && timeline.progress() === 1) return;
          timeline.progress(1); // fires onComplete
          finish();
        },
        (INTRO_DURATION + 2) * 1000,
      );

      /* Every word starts below its own clip line. Positions are absolute on
         the timeline — relative offsets would compound with each transition's
         own duration and quietly stretch the intro past its budget. */
      gsap.set(words, { yPercent: 100 });
      timeline.to(words[0], { yPercent: 0, duration: RISE, ease: EASE }, 0);

      words.slice(1).forEach((word, index) => {
        const at = RISE + index * SWAP;
        timeline
          .to(words[index], { yPercent: -100, duration: SWAP, ease: EASE }, at)
          .fromTo(
            word,
            { yPercent: 100 },
            { yPercent: 0, duration: SWAP, ease: EASE },
            at,
          );
      });

      /* The hairline measures the greetings, so it completes exactly as the
         last one settles. */
      timeline.fromTo(
        "[data-intro-rule]",
        { scaleX: 0 },
        { scaleX: 1, duration: SEQUENCE_END, ease: "none" },
        0,
      );

      timeline
        .to(
          words[words.length - 1],
          { yPercent: -100, duration: 0.45, ease: EASE },
          SEQUENCE_END,
        )
        .to(
          "[data-intro-rule]",
          { opacity: 0, duration: 0.4, ease: EASE },
          SEQUENCE_END,
        )
        .to(
          rootRef.current,
          { yPercent: -100, duration: EXIT, ease: EASE },
          SEQUENCE_END + 0.15,
        );

      return () => {
        clearTimeout(failsafe);
        document.body.style.overflow = "";
        lenis?.start();
      };
    },
    { scope: rootRef, dependencies: [lenis] },
  );

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
    >
      <div className="intro-line">
        {/* Each greeting sits in the same optical slot; the widest one holds
            the box open so the line never jumps as scripts change. */}
        <span className="intro-word invisible block" aria-hidden="true">
          안녕하세요
        </span>
        {GREETINGS.map((greeting, index) => (
          <span
            key={greeting.lang}
            ref={(node) => (wordsRef.current[index] = node)}
            lang={greeting.lang}
            dir={greeting.lang === "ar" ? "rtl" : undefined}
            className="intro-word absolute inset-0 flex items-center justify-center whitespace-nowrap"
          >
            {greeting.text}
          </span>
        ))}
      </div>

      <span
        data-intro-rule
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-line"
      />
    </div>
  );
}

export default Intro;
