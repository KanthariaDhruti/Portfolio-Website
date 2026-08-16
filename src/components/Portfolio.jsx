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
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }
      );
      gsap.fromTo(
        ".portfolio-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power4.out" }
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
          toggleActions: "play none none reverse",
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
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: pageRef }
  );

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#FBF9F6] text-[#1c1c1c] studio-noise-bg font-sans relative overflow-x-hidden pt-12 pb-12 selection:bg-[#F2D9C7]/50 selection:text-[#1c1c1c]"
    >
      {/* Studio Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-6 border-b border-[#1c1c1c]/10 relative z-20">
        <Link
          to="/"
          className="font-syne font-extrabold tracking-tight text-[#1c1c1c] hover:text-[#5D768B] transition-all duration-300 no-underline text-lg md:text-xl flex items-center gap-1.5"
        >
          <span>DHRUTI K.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#5D768B]"></span>
        </Link>
        <Link
          to="/"
          className="text-[10px] font-mono tracking-wider uppercase border border-[#1c1c1c]/25 px-4 py-2 rounded-full hover:bg-[#5D768B] hover:text-white hover:border-[#5D768B] transition-all duration-300 no-underline text-[#1c1c1c]"
        >
          ← Back to Studio
        </Link>
      </header>

      {/* Main Title Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 text-center space-y-4">
        <span className="portfolio-header inline-block text-xs font-mono text-[#5D768B] font-bold uppercase tracking-widest">
          PORTFOLIO
        </span>
        <h1 className="portfolio-title font-serif-editorial italic text-4xl md:text-6xl lg:text-7xl text-[#c2593f] leading-tight max-w-4xl mx-auto">
          Some of the brands I've brought to life...
        </h1>
        <p className="text-[#1c1c1c]/65 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Every project in my portfolio is built to reflect the unique personality of the brand. Focus lies on visual narratives, editorial document hierarchies, and responsive layouts.
        </p>
      </section>

      {/* Combined Projects Grid (Image 1 layout) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="project-card group flex flex-col space-y-4 no-underline text-[#1c1c1c] block"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-3xl border border-[#1c1c1c]/10 bg-[#e8e4dc] shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              {/* Meta Info */}
              <div className="px-2">
                <h3 className="font-syne font-bold text-lg md:text-xl uppercase tracking-tight flex items-center gap-1.5 group-hover:text-[#5D768B] transition-colors">
                  <span>{project.title}</span>
                  <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">+</span>
                </h3>
                <p className="text-xs text-[#1c1c1c]/50 font-mono mt-1 font-medium">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonial Quote slider strip (Dark brown background banner in Image 1) */}
      <section className="w-full bg-[#4a3b32] text-white py-16 px-6 text-center select-none anim-section">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm text-[#e3c9a4]">
            <i className="fa-solid fa-heart"></i>
          </div>
          <p className="font-serif-editorial italic text-2xl md:text-3xl lg:text-4xl text-[#e3c9a4] max-w-2xl leading-snug">
            "Working with Dhruti was an absolute pleasure. She took our messy design brief and built a beautiful, high-fidelity brand guideline that we love."
          </p>
          <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase block">
            — Vista Clinical Labs
          </span>
        </div>
      </section>

      {/* Logofolio Section (Image 1 layout) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-[#1c1c1c]/10 anim-section">
        {/* Logos Grid on Left */}
        <div className="lg:col-span-6 grid grid-cols-3 gap-6">
          {[
            "fa-solid fa-cloud", "fa-solid fa-anchor", "fa-solid fa-eye",
            "fa-solid fa-snowflake", "fa-solid fa-sun", "fa-solid fa-moon",
            "fa-solid fa-shield", "fa-solid fa-leaf", "fa-solid fa-ring"
          ].map((icon, idx) => (
            <div
              key={idx}
              className="aspect-square bg-white border border-[#1c1c1c]/5 rounded-2xl flex items-center justify-center text-2xl text-[#4a3b32] hover:text-[#5D768B] transition-colors duration-300 shadow-sm"
            >
              <i className={icon}></i>
            </div>
          ))}
        </div>
        {/* Info on Right */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif-editorial italic text-4xl md:text-5xl text-[#4a3b32] leading-tight">
            Logofolio.
          </h2>
          <p className="text-[#1c1c1c]/70 text-xs md:text-sm leading-relaxed font-sans text-justify">
            A curated portfolio of conceptual marks, visual patterns, and identity designs. Built for purpose-driven businesses looking to stand out in a busy, crowded market.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center border border-[#1c1c1c] text-[#1c1c1c] font-bold px-6 py-2.5 rounded-full hover:bg-[#1c1c1c] hover:text-white transition-all duration-300 no-underline text-[10px] tracking-wider uppercase font-mono"
          >
            Go to Logofolio
          </Link>
        </div>
      </section>

      {/* Ready to build your brand? Banner (Blue-grey banner in Image 1) */}
      <section className="w-full bg-[#8B9BB4] text-white py-20 px-6 text-center select-none anim-section">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mx-auto text-sm">
            <i className="fa-solid fa-lightbulb"></i>
          </div>
          <h2 className="font-syne text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Ready to build your brand?
          </h2>
          <p className="text-white/80 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Whether you need a full visual identity system or a high-converting web presence, let's create something premium together.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 border border-white bg-white text-[#8B9BB4] font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-102 cursor-pointer no-underline text-xs"
          >
            LET'S WORK TOGETHER
          </Link>
        </div>
      </section>

      {/* The Brand Kit Collection Section (Image 1 layout) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-[#1c1c1c]/10 anim-section">
        {/* Info on Left */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif-editorial italic text-4xl md:text-5xl text-[#4a3b32] leading-tight">
            The brand kit collection.
          </h2>
          <p className="text-[#1c1c1c]/70 text-xs md:text-sm leading-relaxed font-sans text-justify">
            A comprehensive set of visual design guidelines, asset kits, and typography books. These packages provide all templates, logo assets, and color rules to help you scale your business branding in days.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center border border-[#1c1c1c] text-[#1c1c1c] font-bold px-6 py-2.5 rounded-full hover:bg-[#1c1c1c] hover:text-white transition-all duration-300 no-underline text-[10px] tracking-wider uppercase font-mono"
          >
            See Brand Kits
          </Link>
        </div>
        {/* Overlapping Mockup Cards on Right */}
        <div className="lg:col-span-6 flex justify-center items-center relative py-12">
          <div className="relative w-64 md:w-80 aspect-[4/3]">
            <div className="absolute inset-0 bg-[#e3c9a4] rounded-2xl shadow-md rotate-3 transform translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-white border border-[#1c1c1c]/10 rounded-2xl p-4 shadow-lg flex flex-col justify-between">
              <span className="font-mono text-[9px] text-[#5D768B] uppercase tracking-widest font-bold">BRAND BOOK // 2026</span>
              <div className="my-auto text-center font-serif-editorial text-3xl italic text-[#4a3b32]">Dhruti Kantharia</div>
              <span className="font-mono text-[8px] text-[#1c1c1c]/50 uppercase tracking-widest">VISUAL SYSTEM DEPT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#4a3b32] text-white py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8">
          <Link
            to="/"
            className="font-syne font-extrabold tracking-tight text-white hover:text-[#e3c9a4] transition-all duration-300 no-underline text-lg md:text-xl flex items-center gap-1.5"
          >
            <span>DHRUTI K.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e3c9a4]"></span>
          </Link>
          <div className="flex gap-6 text-xs text-white/60">
            <a href="https://github.com/KanthariaDhruti" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fa-brands fa-github text-base"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-base"></i></a>
            <a href="mailto:dhruti@example.com" className="hover:text-white transition-colors"><i className="fa-solid fa-envelope text-base"></i></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 gap-4">
          <span>&copy; {new Date().getFullYear()} DHRUTI KANTHARIA. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-white transition-colors no-underline">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors no-underline">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
