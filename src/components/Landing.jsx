import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import SEO from "./SEO";

function Landing() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Graphic Designer & Web Developer"
        description="Portfolio of Dhruti Kantharia, Graphic Designer & Web Developer. Pursuing B.Tech IT at Gandhinagar University, specializing in creative UI/UX, Figma prototyping, and MERN stack applications."
        url="/"
      />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}

export default Landing;
