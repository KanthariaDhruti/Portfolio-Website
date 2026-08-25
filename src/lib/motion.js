import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

/**
 * One curve carries the whole site: a long decelerating settle that never
 * overshoots. Bounce and elastic easing are what make motion read as
 * decoration; this reads as weight.
 */
CustomEase.create("settle", "M0,0 C0.16,1 0.3,1 1,1");

export const EASE = "settle";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fonts must be resolved before SplitText measures line boxes. */
export const fontsReady = () =>
  typeof document !== "undefined" && document.fonts
    ? document.fonts.ready
    : Promise.resolve();

const resolveTrigger = (trigger, scope) =>
  typeof trigger === "string" ? gsap.utils.toArray(trigger, scope)[0] : trigger;

/**
 * The reveal used everywhere: opacity leads, movement is barely there (12px,
 * not 40), and it plays once. Replaying on scroll-up is the tell of a page
 * animating for its own sake.
 */
export function reveal(targets, options = {}) {
  const {
    y = 12,
    duration = 1.05,
    stagger = 0.07,
    delay = 0,
    start = "top 88%",
    trigger,
    scope,
  } = options;

  /* Selector strings resolve against `scope`, never the document: several
     sections share attribute names like [data-rule], and a document-wide
     lookup would let the first section on the page animate all of them. */
  const items = gsap.utils.toArray(targets, scope);
  if (!items.length) return;

  return gsap.fromTo(
    items,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: EASE,
      scrollTrigger: {
        trigger: resolveTrigger(trigger, scope) || items[0],
        start,
        once: true,
      },
    },
  );
}

/** Hairlines draw from the left as their section arrives. */
export function drawRule(targets, options = {}) {
  const { duration = 1.4, start = "top 92%", stagger = 0.08, scope } = options;
  const items = gsap.utils.toArray(targets, scope);
  if (!items.length) return;

  return gsap.fromTo(
    items,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration,
      stagger,
      ease: EASE,
      scrollTrigger: { trigger: items[0], start, once: true },
    },
  );
}

/**
 * Masked line reveal, reserved for one headline per page. Each line rises out
 * of its own clipping box, so the type appears to be set rather than assembled.
 * Returns a cleanup that reverts the split.
 */
export function revealLines(element, options = {}) {
  const { delay = 0, duration = 1.15, stagger = 0.09, scroll = false } = options;
  if (!element) return () => {};

  const split = new SplitText(element, {
    type: "lines",
    mask: "lines",
    linesClass: "split-line",
  });

  /* The element is held at opacity 0 by CSS until its lines exist, so the
     headline never paints unsplit while we wait on document.fonts.ready. */
  gsap.set(element, { opacity: 1 });

  gsap.fromTo(
    split.lines,
    { yPercent: 105 },
    {
      yPercent: 0,
      duration,
      delay,
      stagger,
      ease: EASE,
      ...(scroll
        ? { scrollTrigger: { trigger: element, start: "top 85%", once: true } }
        : {}),
    },
  );

  return () => split.revert();
}

/**
 * Scroll-linked drift: an element travels a few dozen pixels against the page
 * as it crosses the viewport, so columns separate slightly in depth instead of
 * moving as one flat sheet.
 *
 * Rules that keep it from reading as an effect:
 *  - The budget is small. Imagery gets ~60px, text 24-32px, and the two sides
 *    of a row move in opposite directions rather than everything sliding up.
 *  - It is applied to containers, never to the elements `reveal()` animates —
 *    both write transform y, and the last one to run would win.
 *  - Halved on tablets, dropped entirely below 768px and under reduced motion,
 *    where the travel is a larger share of the viewport and reads as jitter.
 */
export function drift(targets, options = {}) {
  const { distance = 40, trigger, scope, start = "top bottom", end = "bottom top" } = options;

  const items = gsap.utils.toArray(targets, scope);
  if (!items.length) return undefined;

  const media = gsap.matchMedia();

  media.add(
    {
      full: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      half: "(min-width: 768px) and (max-width: 1023.98px) and (prefers-reduced-motion: no-preference)",
    },
    (context) => {
      const amount = context.conditions.full ? distance : distance * 0.5;

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { y: amount / 2 },
          {
            y: -amount / 2,
            ease: "none",
            scrollTrigger: {
              trigger: trigger || item,
              start,
              end,
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    },
  );

  return media;
}

/**
 * Slow counter-movement on large imagery. Kept under 10% of the element's
 * height — enough to feel like depth, not enough to notice as an effect.
 */
export function parallax(element, options = {}) {
  const { amount = 8 } = options;
  if (!element) return;

  return gsap.fromTo(
    element,
    { yPercent: -amount / 2 },
    {
      yPercent: amount / 2,
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement || element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    },
  );
}

export { gsap, ScrollTrigger, SplitText };
