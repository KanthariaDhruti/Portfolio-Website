import { createContext, useContext } from "react";

/** Shared Lenis instance, provided by <SmoothScroll>. Null under reduced motion. */
export const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

/**
 * In-page navigation. Falls back to native scrolling whenever Lenis is absent
 * (reduced motion, or before the instance mounts).
 */
export function useScrollTo() {
  const lenis = useLenis();

  return (target, options = {}) => {
    const { offset = 0, immediate = false } = options;

    if (lenis) {
      lenis.scrollTo(target, {
        offset,
        immediate,
        duration: immediate ? 0 : 1.2,
      });
      return;
    }

    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: immediate ? "auto" : "smooth" });
      return;
    }

    const node =
      typeof target === "string" ? document.querySelector(target) : target;
    if (!node) return;

    const top = node.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
  };
}
