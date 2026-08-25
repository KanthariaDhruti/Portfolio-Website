import { createContext, useContext } from "react";

/**
 * Twelve greetings, opening and closing in the two languages closest to home:
 * English, then a tour, then Gujarati last before the page arrives.
 *
 * Instrument Serif covers none of the non-Latin scripts, so those lines fall
 * back to the system serif (Devanagari MT, Hiragino Mincho, Noto and friends).
 * That is deliberate — a webfont per script would cost more than the whole
 * page — and the `intro-word` stack in App.css names the fallbacks explicitly.
 */
export const GREETINGS = [
  { text: "Hello", lang: "en" },
  { text: "Ciao", lang: "it" },
  { text: "Bonjour", lang: "fr" },
  { text: "Hola", lang: "es" },
  { text: "Olá", lang: "pt" },
  { text: "Hallo", lang: "de" },
  { text: "Привет", lang: "ru" },
  { text: "مرحبا", lang: "ar" },
  { text: "こんにちは", lang: "ja" },
  { text: "안녕하세요", lang: "ko" },
  { text: "नमस्ते", lang: "hi" },
  { text: "નમસ્તે", lang: "gu" },
];

/*
 * Timing, in seconds. Every value is an absolute position on the timeline, so
 * the total is arithmetic rather than the sum of relative offsets:
 *
 *   sequence  0.60 + 0.30 x 11 + 0.25 hold = 4.15
 *   handover  + 0.15 + 0.90 curtain        = 5.20
 */
export const RISE = 0.6;   // first greeting arriving
export const SWAP = 0.3;   // one greeting handing over to the next
export const HOLD = 0.25;  // the last greeting sitting still
export const EXIT = 0.9;   // the paper lifting away

export const SEQUENCE_END = RISE + SWAP * (GREETINGS.length - 1) + HOLD;
export const INTRO_DURATION = SEQUENCE_END + 0.15 + EXIT;

/**
 * The hero starts just before the curtain finishes clearing, so the headline is
 * already in motion as the paper lifts rather than waiting behind it.
 */
export const HERO_DELAY = INTRO_DURATION - 0.55;

export const IntroContext = createContext({ active: false, heroDelay: 0 });

export const useIntro = () => useContext(IntroContext);

/** Shown once per session, and only on the landing route. */
export const INTRO_SEEN_KEY = "dk-intro-seen";

export function shouldPlayIntro(pathname) {
  if (pathname !== "/") return false;
  try {
    return !window.sessionStorage.getItem(INTRO_SEEN_KEY);
  } catch {
    return true; // private mode: play it rather than crash
  }
}

export function markIntroSeen() {
  try {
    window.sessionStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    /* nothing to do */
  }
}
