import React from "react";
import '../App.css'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'


function Landing() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
