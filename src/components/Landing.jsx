import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import SEO from "./SEO";
import { useScrollTo } from "../lib/scroll";

function Landing() {
  const { state } = useLocation();
  const scrollTo = useScrollTo();

  /* Arriving from another route with a section in mind (nav links off the
     portfolio pages) — jump once the sections have mounted. */
  useEffect(() => {
    if (!state?.section) return;
    const id = `#${state.section}`;
    const frame = requestAnimationFrame(() => scrollTo(id, { offset: -80 }));
    return () => cancelAnimationFrame(frame);
  }, [state, scrollTo]);

  return (
    <>
      <SEO
        title="Graphic Designer & Web Developer"
        description="Portfolio of Dhruti Kantharia, Graphic Designer & Web Developer. Brand identity, editorial layout and front-end development."
        url="/"
      />
      <Home />
      <Projects />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
