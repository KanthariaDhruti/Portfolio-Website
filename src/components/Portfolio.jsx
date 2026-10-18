import React, { useRef, useState } from "react";
import SmartImage from "./SmartImage";
import { Link } from "react-router-dom";
import { projectsData, testimonialsData } from "../data/projectsData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SEO from "./SEO";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const pageRef = useRef(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      nextTestimonial();
    } else if (diff < -50) {
      prevTestimonial();
    }
    setTouchStartX(null);
  };

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
      className="min-h-screen bg-almond select-none text-ocean studio-noise-bg font-outfit relative overflow-x-hidden pt-12"
    >
      <SEO
        title="Visual Design & UI Portfolio"
        description="Step into the creative studio of Dhruti Kantharia. Explore interactive editorial brochure spreads, graphic design LinkedIn carousels, and responsive UI/UX webpages."
        url="/portfolio"
      />
      {/* Studio Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-6 border-b border-ocean/10 relative z-20">
        <Link to="/">
          <img
            src="/logos/dhruti/logo-color.webp"
            alt="Dhruti Kantharia Studio Logo"
            height="40"
            decoding="async"
            className="h-10"
          />
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
              <div className="w-full aspect-[16/10] overflow-hidden rounded-3l bg-pearl shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <img
                  src={project.thumbnail}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt={project.title}
                  width="600"
                  height="375"
                  loading="lazy"
                  decoding="async"
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
      {/* Client Testimonials Section */}
      <div
        className="w-full bg-ocean text-pearl py-10 mt-20 relative overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mx-5 flex flex-col items-center justify-center text-center relative z-10">
          {/* Heart Speech Bubble Icon */}
          <i className="fa-solid fa-quote-left text-6xl mb-5 text-white/80"></i>

          {/* Testimonial Slider Content */}
          <div className="w-full flex items-center justify-between">
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              className="p-2 sm:p-3 text-pearl/80 hover:scale-110 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <i className="fa-solid fa-arrow-left-long text-2xl"></i>
            </button>

            {/* Testimonial Quote & Author */}
            <div className="flex-1 max-w-4xl min-h-[140px] sm:min-h-[120px] flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
              <p className="text-sm sm:text-base md:text-lg font-outfit text-pearl leading-relaxed tracking-wide font-normal">
                {testimonialsData[currentTestimonialIndex].quote}
              </p>
              <span className="text-xs sm:text-sm text-white/80 font-playwrite mt-6 block">
                {testimonialsData[currentTestimonialIndex].author}
              </span>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              className="p-2 sm:p-3 text-pearl hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <i className="fa-solid fa-arrow-right-long text-2xl"></i>
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonialIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentTestimonialIndex === idx
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Logofolio Section (Image 1 layout) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-ocean/10 anim-section">
        {/* Logos Flex Container on Left */}
        <div className="lg:col-span-6 bg-pearl shadow-sm rounded-2xl flex flex-wrap items-center justify-between gap-8 sm:gap-12 p-8 sm:p-12">
          {[
            "/logos/dhruti/icon-frame.webp",
            "/logos/granny/Group.webp",
            "/logos/dhruti/logo-color1.webp",
            "/logos/granny/Group-1.webp",
            "logos/dhruti/Vector.webp",
            "logos/granny/Vector.webp",
            "logos/cove/i.webp",
            "logos/cove/mono.webp",
            "logos/cove/prime.webp",
            "logos/cove/word.webp",
          ].map((icon, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center transition-colors duration-300"
            >
              <img
                src={icon}
                alt="Brand logo icon mark"
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
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
            to="/portfolio/logofolio"
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
    </div>
  );
}

export default Portfolio;
