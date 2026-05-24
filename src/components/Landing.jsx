import React, { useEffect } from "react";
import "../App.css";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function Landing() {
  useEffect(() => {
    document.title = "Dhruti Kantharia | Graphic Designer & Web Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Portfolio of Dhruti Kantharia, Graphic Designer & Web Developer. Pursuing B.Tech IT at Gandhinagar University, specializing in creative UI/UX, Figma to Webflow prototyping, and MERN stack applications.",
      );
    }
  }, []);

  return (
    <>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
