import React, { useRef, useState, useEffect } from "react";
import SmartImage from "./SmartImage";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { testimonialsData } from "../data/projectsData";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
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

  useEffect(() => {
    if (activeCardIndex === null) return;
    const handleOutsideClick = () => {
      setActiveCardIndex(null);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activeCardIndex]);

  const handleCardClick = (e, index) => {
    e.stopPropagation();
    setActiveCardIndex((prev) => (prev === index ? null : index));
  };

  const projectsData = [
    {
      img: "/dhruti-b/dhruti-branding.webp",
      head: "Personal Brand Identity",
      desc: "A distinctive personal brand identity designed to create a professional and cohesive visual presence across digital and print.",
      techSpan: ["Figma", "Illustrator", "InDesign"],
      // link: "https:// dhrutis-team-app.webflow.io/",
      // urlDesc: "Live Site",
      type: "branding",
    },
    {
      img: "/granny-b/5.webp",
      head: "The Granny's Hobby",
      desc: "The Granny's Hobby is a handmade crochet brand inspired by the warmth, creativity, and charm of handcrafted pieces. The identity brings together a playful visual language with a cozy and approachable feel.",
      techSpan: ["Figma", "Illustrator", "InDesign"],
      // link: "https:// dhrutis-team-app.webflow.io/",
      // urlDesc: "Live Site",
      type: "branding",
    },
    {
      img: "/carousel-projects.webp",
      head: "Social Media Carousel Design",
      desc: "A visually engaging carousel designed to communicate ideas clearly through thoughtful layouts, typography, and creative visual storytelling.",
      techSpan: ["Figma"],
      type: "Social Media Carousel",
    },
    // {
    //   img: "/Wanderlust.png",
    //   head: "Wanderlust – Explore Stays",
    //   desc: "A travel platform prototype offering responsive listings and a sleek user interface for discoverability and hotel bookings.",
    //   techSpan: ["MERN Stack", "Tailwind CSS", "Express"],
    //   link: "https://github.com/KanthariaDhruti/WanderLust",
    //   urlDesc: "View Code",
    // },
    {
      img: "/fashion-m/1.webp",
      head: "Fashion Editorial Concept",
      desc: "A creative editorial layout designed for digital and print magazine pages, focusing on modern trends and bold storytelling layouts.",
      techSpan: ["Adobe InDesign"],
      type: "Magazine Design",
    },
  ];

  useGSAP(
    () => {
      const cards = cardsRef.current?.querySelectorAll(".project-card-anim");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
          },
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-almond text-ocean select-none font-outfit pt-24 text-center border-b border-navy-200"
    >
      {/* Decorative Grid Patterns & Canvas indicators */}
      <div className="absolute inset-0 bg-grid-light pointer-events-none opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-dots-light pointer-events-none opacity-20 z-0"></div>
      <div className="absolute top-24 left-10 text-[10px] font-mono text-ocean/50 select-none hidden lg:block uppercase tracking-wider">
        [Section: 05 / Projects]
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="relative inline-block border-2 border-ocean backdrop-blur-sm px-6 py-2.5 shadow-sm mb-4">
            {/* Figma resize handles/nodes */}
            <div className="absolute w-1.5 h-1.5 bg-white border-2 border-ocean -top-[4px] -left-[4px] z-30"></div>
            <div className="absolute w-1.5 h-1.5 bg-white border-2 border-ocean -top-[4px] -right-[4px] z-30"></div>
            <div className="absolute w-1.5 h-1.5 bg-white border-2 border-ocean -bottom-[4px] -left-[4px] z-30"></div>
            <div className="absolute w-1.5 h-1.5 bg-white border-2 border-ocean -bottom-[4px] -right-[4px] z-30"></div>

            <h2 className="text-4xl md:text-5xl font-playwrite font-extrabold">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-2xl mx-auto  md:text-xl mt-10">
            A handpicked selection of my design interfaces, graphics projects,
            and web development layouts
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-15 mx-10 mb-20 items-stretch"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              onClick={(e) => handleCardClick(e, index)}
              className={`project-card-anim group relative overflow-hidden rounded-3x bg-pearl bordr transition-all duration-500 flex flex-col h-auto cursor-pointer ${
                activeCardIndex === index
                  ? "shadow-2xl -translate-y-2 border-ocean/50"
                  : "border-ocean/20 shadowmd hover:shadow-lg hover:-translate-y-2"
              }`}
            >
              {/* Image Side */}
              <div className="relative w-full h-[220px] overflow-hidden bg-pearl flex items-center justify-center  border-b border-ocean/10">
                <SmartImage
                  src={project.img}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt={project.head}
                  width="400"
                  height="220"
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    activeCardIndex === index
                      ? "scale-104"
                      : "group-hover:scale-104"
                  }`}
                />
                <div className="absolute top-4 right-4 backdrop-blur-md border border-ocean/20 text-brown text-xs px-3 py-1 rounded-full font-bold">
                  Project {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Lower Info Area (Visible before hover) */}
              <div className="mt-3 flex flex-col justify-between flex-1 text-left">
                <div>
                  <h3 className="text-lg font-playwrite font-bold transition-colors line-clamp-1 mb-2">
                    {project.head}
                  </h3>
                  <p className="text-navy-700 line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.techSpan.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className=" text-brown text-xs px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay Curtain Slide (Reveals on Hover / Active touch) */}
              <div
                className={`absolute inset-0 bg-pearl flex flex-col justify-between p-8 transition-all duration-500 z-20 text-left ${
                  activeCardIndex === index
                    ? "translate-y-0"
                    : "translate-y-full group-hover:translate-y-0"
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-playwrite font-bold">
                    {project.head}
                  </h3>
                  <p className="text-navy-850 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techSpan.map((item, i) => (
                      <span
                        key={i}
                        className=" text-brown text-xs pr-2 py-1 rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 bg-cyan-650 border border-ocean/20 hover:bg-navy-750 font-bold py-2 px-6 rounded-full text-xs transition-all duration-300 shadow-md cursor-pointer text-center"
                    >
                      <span>{project.urlDesc}</span>
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-navy-750 block">
                      {project.type}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* And More Showcase Card */}
          {/* <div className="project-card-anim group flex flex-col items-center justify-center rounded-3xl bg-pearl border border-ocean/20 hover:border-ocean/40 shadow-lg transition-all duration-500 p-6 h-[400px] cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-ocean flex items-center justify-center mb-4 text-pearl group-hover:scale-110 group-hover:bg-pearl group-hover:text-ocean transition-all duration-300 border border-ocean/10">
              <i className="fa-solid fa-layer-group text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-navy-900 group-hover:text-cyan-650 mb-2 font-playwrite transition-colors">
              And more...
            </h3>
            <p className="text-navy-700  max-w-[200px] text-center leading-relaxed">
              Explore extra concepts, coding sandboxes, and graphics templates
            </p>
          </div> */}
        </div>

        {/* Buttons / Navigation Links */}
        <div className="flex flex-col font-playwrite sm:flex-row justify-center items-center gap-6 mt-8">
          <a
            href="https://github.com/KanthariaDhruti"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-pearl hover:bg-ocean hover:text-pearl hover:font-normal text-ocean font-semibold px-8 py-3.5 rounded-full shadow-[0_4px_12px_rgba(93,118,139,0.25)] hover:shadow-[0_6px_20px_rgba(93,118,139,0.45)] hover:scale-[1.03] transition-all duration-300 cursor-pointer text-sm border border-ocean/20"
          >
            <i className="fa-brands fa-github text-lg mr-2"></i>
            <span>View More on GitHub</span>
          </a>

          <Link
            to="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-navy-600 text-navy-600 hover:bg-navy-650   font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_6px_20px_rgba(93,118,139,0.45)] hover:scale-[1.03] cursor-pointer no-underline text-sm"
          >
            <i className="fa-regular fa-folder-open text-lg"></i>
            <span>View My Full Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div
        className="w-full bg-ocean text-pearl py-10 mt-20 relative overflow-hidden "
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
    </section>
  );
}

export default Projects;
