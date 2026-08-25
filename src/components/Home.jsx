import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import SmartImage from "./SmartImage";
import { ArrowDown } from "./Icon";
import {
  gsap,
  EASE,
  reveal,
  revealLines,
  drift,
  parallax,
  fontsReady,
  prefersReducedMotion,
} from "../lib/motion";
import { useScrollTo } from "../lib/scroll";
import { useIntro } from "../lib/intro";
import { HERO_DELAY } from "../lib/intro";

const disciplines = [
  "Brand Identity",
  "Editorial Layout",
  "UI / UX Design",
  "Front-end Development",
];

function Home() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const portraitRef = useRef(null);
  const scrollTo = useScrollTo();
  const { active: introActive, introStart } = useIntro();

  /* Captured once, at first render: how long the hero should wait for the
     curtain. Zero when there is no intro (repeat visit, reduced motion). */
  const [introOffset] = useState(() =>
    introActive
      ? Math.max(0, HERO_DELAY - (performance.now() - introStart) / 1000)
      : 0,
  );

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      /* Splitting before the serif loads measures the fallback's line boxes. */
      let revertLines = () => {};
      fontsReady().then(() => {
        revertLines = revealLines(headlineRef.current, { delay: introOffset + 0.15 });
      });

      /* Everything else follows the headline rather than competing with it. */
      gsap.fromTo(
        "[data-hero-meta]",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: EASE, delay: introOffset + 0.1 },
      );

      reveal("[data-hero-lead]", { delay: introOffset + 0.55, y: 14, trigger: sectionRef.current, scope: sectionRef.current });
      reveal("[data-hero-actions] > *", {
        delay: introOffset + 0.75,
        y: 10,
        stagger: 0.09,
        trigger: sectionRef.current, scope: sectionRef.current });

      /* The portrait uncovers itself: the mask lifts, the image settles back
         from a slight overscale. No fade, no bounce. */
      gsap.fromTo(
        "[data-mask]",
        { yPercent: 0 },
        { yPercent: -101, duration: 1.5, ease: EASE, delay: introOffset + 0.35 },
      );
      gsap.fromTo(
        portraitRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 1.8, ease: EASE, delay: introOffset + 0.35 },
      );

      gsap.fromTo(
        "[data-hero-rule]",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.6, ease: EASE, delay: introOffset + 0.9 },
      );
      reveal("[data-hero-disciplines] > *", {
        delay: introOffset + 1.1,
        y: 8,
        stagger: 0.06,
        trigger: sectionRef.current, scope: sectionRef.current });

      parallax(portraitRef.current, { amount: 6 });

      /* On the way out only: the copy is drawn upward slightly faster than the
         page while the hero leaves, which hands the eye to the work below. */
      drift("[data-hero-column]", {
        distance: 70,
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scope: sectionRef.current,
      });

      return () => revertLines();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen px-6 pt-32 pb-12 md:px-10 md:pt-40 lg:px-16"
    >
      <div className="mx-auto flex h-full max-w-[1400px] flex-col">
        {/* Meta row */}
        <div
          data-hero-meta
          className="eyebrow flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Gandhinagar, India</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-accent" />
            Available for freelance
          </span>
        </div>

        <div className="mt-16 grid flex-1 grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* Headline */}
          <div data-hero-column className="flex flex-col lg:col-span-7">
            <h1
              ref={headlineRef}
              data-split
              className="display text-[11.5vw] leading-[1] sm:text-[9vw] lg:text-[5.6vw]"
            >
              Graphic design,
              <br />
              identity systems
              <br />
              <span className="italic text-accent">&amp;</span> web development.
            </h1>

            <div className="mt-10 max-w-md lg:mt-14">
              <p
                data-hero-lead
                className="text-[1.0625rem] leading-[1.7] text-ink-soft"
              >
                I'm Dhruti Kantharia. I design brand identities and editorial
                layouts, then build the interfaces that carry them — so the
                thinking survives the handoff from artboard to browser.
              </p>

              <div data-hero-actions className="mt-8 flex items-center gap-8">
                <button
                  type="button"
                  onClick={() => scrollTo("#work", { offset: -60 })}
                  className="link-wipe link-retract cursor-pointer bg-transparent p-0 text-[0.9375rem] text-ink"
                >
                  Selected work
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("#contact", { offset: -60 })}
                  className="link-wipe cursor-pointer bg-transparent p-0 text-[0.9375rem] text-muted transition-colors duration-300 hover:text-ink"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              {/* Taller than its frame, so the parallax never exposes an edge. */}
              <div
                ref={portraitRef}
                className="absolute inset-x-0 top-[-6%] h-[112%]"
              >
                <SmartImage
                  src="/dhrutiImg1.jpg"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  alt="Dhruti Kantharia"
                  width="800"
                  height="1000"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
              </div>
              {/* The mask that lifts away on load. */}
              <span
                data-mask
                className="absolute inset-0 z-10 block bg-paper"
              />
            </div>
          </div>
        </div>

        {/* Disciplines */}
        <div className="mt-16 md:mt-20">
          <div data-hero-rule className="rule" />
          <div
            data-hero-disciplines
            className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 pt-5"
          >
            {disciplines.map((item) => (
              <span key={item} className="text-sm font-light text-muted">
                {item}
              </span>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("#work", { offset: -60 })}
              className="group flex cursor-pointer items-center gap-2 bg-transparent p-0 text-sm text-muted transition-colors duration-300 hover:text-ink"
              aria-label="Scroll to selected work"
            >
              Scroll
              <ArrowDown size={14} className="arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
