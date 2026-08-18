import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const pageRef = useRef(null);

  useEffect(() => {
    document.title = "Visual Design & UI Portfolio | Dhruti Kantharia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Step into the creative studio of Dhruti Kantharia. Explore interactive editorial brochure spreads, graphic design LinkedIn carousels, and responsive UI/UX webpages.",
      );
    }
  }, []);

  useGSAP(
    () => {
      // Intro animations
      gsap.fromTo(
        ".portfolio-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
      );
      gsap.fromTo(
        ".portfolio-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power4.out" },
      );

      // Card reveal animations
      const cards = gsap.utils.toArray(".project-card");
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          once: true,
        },
      });

      // Section animations
      const sections = gsap.utils.toArray(".anim-section");
      sections.forEach((sec) => {
        gsap.from(sec, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-pearl text-ocean studio-noise-bg font-outfit relative overflow-x-hidden pt-12"
    >
      {/* Studio Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-6 border-b border-ocean/10 relative z-20">
        <Link to="/">
          <img src="/logo-color.png" className=" h-10" />
        </Link>
        <Link
          to="/"
          className="text-[10px] font-mono tracking-wider uppercase border border-ocean/25 px-4 py-2 rounded-full hover:bg-ocean hover:text-pearl hover:border-pearl transition-all duration-300 no-underline "
        >
          ← Back to Studio
        </Link>
      </header>

      {/* Main Title Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 text-center space-y-4">
        <span className="inline-block text-xs font-mono text-ocean/50 font-bold uppercase tracking-widest">
          PORTFOLIO
        </span>
        <h1 className="text-4xl md:text-6xl font-playwrite text-brown lg:text-7xl leading-tight max-w-4xl mx-auto">
          Some of the projects I've brought to life...
        </h1>
        <p className=" mt-10 max-w-3xl text-xl font-outfit mx-auto leading-relaxed">
          Every project in my portfolio is built to reflect the unique
          personality of the brand. Focus lies on visual narratives, editorial
          document hierarchies, and responsive layouts.
        </p>
      </section>

      {/* Combined Projects Grid (Image 1 layout) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="project-card group flex flex-col space-y-4 no-underline  block"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-3xl bg-pearl shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              {/* Meta Info */}
              <div className="px-2">
                <h3 className="font-syne font-bold text-lg md:text-xl uppercase tracking-tight flex items-center gap-1.5 group-hover:text-brown transition-colors">
                  <span>{project.title}</span>
                </h3>
                <p className="text-xs text-ocean/50 font-mono mt-1 font-medium">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonial Quote slider strip (Dark brown background banner in Image 1) */}

      {/* Logofolio Section (Image 1 layout) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-ocean/10 anim-section">
        {/* Logos Grid on Left */}
        <div className="lg:col-span-6 grid grid-cols-3 gap-6">
          {["/icon-frame.png", "/whisk-and-crumb-logo.png"].map((icon, idx) => (
            <div
              key={idx}
              className="aspect-square bg-white border border-ocean/5 rounded-2xl flex items-center justify-center text-2xl text-[#4a3b32] hover:text-[#5D768B] transition-colors duration-300 shadow-sm"
            >
              <img src={icon} alt="" className="h-30" />
            </div>
          ))}
        </div>
        {/* Info on Right */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className=" text-4xl md:text-5xl text-brown font-playwrite leading-tight">
            Logofolio.
          </h2>
          <p className="text-ocean/70 text-lg leading-relaxed text-justify">
            A curated portfolio of conceptual marks, visual patterns, and
            identity designs. Built for purpose-driven businesses looking to
            stand out in a busy, crowded market.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center border border-ocean text-ocean font-bold px-6 py-2.5 rounded-full hover:bg-ocean hover:text-white transition-all duration-300 no-underline text-xs uppercase font-"
          >
            Go to Logofolio
          </Link>
        </div>
      </section>

      {/* Ready to build your brand? Banner (Blue-grey banner in Image 1) */}
      <section className="w-full bg-[url(/background.png)] text-pearl py-20 px-6 text-center select-none anim-section">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-10 h-10 rounded-full border border-pearl flex items-center justify-center mx-auto text-sm">
            <i className="fa-solid fa-lightbulb"></i>
          </div>
          <h2 className=" text-3xl md:text-5xl font-playwrite font-black uppercase tracking-tight leading-none">
            Ready to collaborate?
          </h2>
          <p className="text-pearl/80 max-w-lg mx-auto leading-relaxed">
            Whether you need a full visual identity system or a high-converting
            web presence, let's create something premium together.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 border border-white bg-white text-ocean/80  font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-102 cursor-pointer no-underline text-sm"
          >
            LET'S WORK TOGETHER
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-brown text-pearl py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8">
          <Link
            to="/"
            className="font-syne font-extrabold tracking-tight text-white hover:text-[#e3c9a4] transition-all duration-300 no-underline text-lg md:text-xl flex items-center gap-1.5"
          >
            <img src="/icon-white.png" className=" h-15" />
          </Link>
          <div className="flex gap-6 text-xs text-white/60">
            <a
              href="https://github.com/KanthariaDhruti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="fa-brands fa-github text-base"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="fa-brands fa-linkedin text-base"></i>
            </a>
            <a
              href="mailto:dhruti@example.com"
              className="hover:text-white transition-colors"
            >
              <i className="fa-solid fa-envelope text-base"></i>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 gap-4">
          <span>
            &copy; {new Date().getFullYear()} DHRUTI KANTHARIA. ALL RIGHTS
            RESERVED.
          </span>
          <div className="flex gap-4">
            <Link
              to="/"
              className="hover:text-white transition-colors no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="hover:text-white transition-colors no-underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
