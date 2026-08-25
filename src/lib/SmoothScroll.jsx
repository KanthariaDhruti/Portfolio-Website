import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";
import { LenisContext, useScrollTo } from "./scroll";

/**
 * Lenis drives the scroll position and GSAP drives the clock, so ScrollTrigger
 * and the smoothing never disagree about where the page is. Readers who ask for
 * reduced motion get the browser's own scrolling, untouched.
 */
export function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const instance = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      smoothWheel: true,

    });

    instance.on("scroll", ScrollTrigger.update);

    const tick = (time) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

/**
 * Route changes land at the top instantly. Animating that transition would
 * scrub the whole previous page past the reader on every click.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();
  const scrollTo = useScrollTo();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname, scrollTo]);

  return null;
}
