import { lazy, Suspense, useMemo, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SmoothScroll, ScrollToTop } from "./lib/SmoothScroll";
import { IntroContext, shouldPlayIntro } from "./lib/intro";
import { prefersReducedMotion } from "./lib/motion";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Landing = lazy(() => import("./components/Landing"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

/**
 * Deliberately quiet: a spinner on a fast connection is a flash of anxiety.
 * The paper ground holds still until the route resolves.
 */
const PageLoader = () => (
  <div className="min-h-screen bg-paper" aria-busy="true" aria-live="polite">
    <span className="sr-only">Loading</span>
  </div>
);

function App() {
  /* Decided once, before first paint: a state update here would let the hero
     mount without its delay and start animating behind the curtain. */
  const [introPlaying, setIntroPlaying] = useState(
    () =>
      typeof window !== "undefined" &&
      !prefersReducedMotion() &&
      shouldPlayIntro(window.location.pathname),
  );

  /* The hero derives its delay from when the curtain actually started, not
     from when it happened to mount — the landing chunk is lazy-loaded, and a
     slow chunk would otherwise leave the hero animating after the reveal. */
  const introStart = useRef(
    typeof performance !== "undefined" ? performance.now() : 0,
  ).current;

  const intro = useMemo(
    () => ({ active: introPlaying, introStart }),
    [introPlaying, introStart],
  );

  return (
    <Router>
      <SmoothScroll>
        <IntroContext.Provider value={intro}>
          {introPlaying && <Intro onComplete={() => setIntroPlaying(false)} />}
          <ScrollToTop />
          <Navbar />
          <main id="main">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<ProjectDetail />} />
              </Routes>
            </Suspense>
          </main>
        </IntroContext.Provider>
      </SmoothScroll>
    </Router>
  );
}

export default App;
