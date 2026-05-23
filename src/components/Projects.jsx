import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  const projectsData = [
    {
      img: "/busi-card.png",
      head: "Business Card Generator",
      desc: "React application allowing users to input professional details and generate and download custom styled business cards in real-time.",
      techSpan: ["React", "JavaScript", "HTML/CSS"],
      link: "https://github.com/KanthariaDhruti/Business-card-generator",
      urlDesc: "View Code",
    },
    {
      img: "/team.png",
      head: "Team App UI/UX Layout",
      desc: "Collaborative and responsive workspace concept crafted to simplify project collaboration. Designed in Figma and built in Webflow.",
      techSpan: ["Figma", "Webflow", "UI Design"],
      link: "https://dhrutis-team-app.webflow.io/",
      urlDesc: "Live Site",
    },
    {
      img: "/Wanderlust.png",
      head: "Wanderlust – Explore Stays",
      desc: "A travel platform prototype offering responsive listings and a sleek user interface for discoverability and hotel bookings.",
      techSpan: ["MERN Stack", "Tailwind CSS", "Express"],
      link: "https://github.com/KanthariaDhruti/WanderLust",
      urlDesc: "View Code",
    },
    {
      img: "/magazine.png",
      head: "Fashion Editorial Concept",
      desc: "A creative editorial layout designed for digital and print magazine pages, focusing on modern trends and bold storytelling layouts.",
      techSpan: ["Adobe InDesign", "Graphic Design"],
      link: "#",
      urlDesc: "Design Project",
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
              toggleActions: "play none none reverse",
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
      className="relative bg-gradient-to-b from-[#e8eff9] via-[#f5f8fc] to-[#e8eff9] py-24 px-6 md:px-16 lg:px-32 text-center border-b border-navy-100"
    >
      {/* Decorative Grid Patterns & Canvas indicators */}
      <div className="absolute inset-0 bg-grid-light pointer-events-none opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-dots-light pointer-events-none opacity-20 z-0"></div>
      <div className="absolute top-24 left-10 text-[10px] font-mono text-navy-950/40 select-none hidden lg:block uppercase tracking-wider">
        [Section: 05 / Projects]
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="relative inline-block border-2 border-blue-500  backdrop-blur-sm px-6 py-2.5  shadow-sm mb-4">
            {/* Figma resize handles/nodes */}
            <div className="absolute w-1.5 h-1.5 bg-white border-2 border-blue-500 -top-[4px] -left-[4px] z-30"></div>
            <div className="absolute w-1.5 h-1.5 bg-white border-2 border-blue-500 -top-[4px] -right-[4px] z-30"></div>
            <div className="absolute w-1.5 h-1.5 bg-white border-2 border-blue-500 -bottom-[4px] -left-[4px] z-30"></div>
            <div className="absolute w-1.5 h-1.5 bg-white border-2 border-blue-500 -bottom-[4px] -right-[4px] z-30"></div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-navy-500 max-w-2xl mx-auto text-base md:text-lg mt-4 leading-relaxed font-normal">
            A handpicked selection of my design interfaces, graphics projects, and web development layouts
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card-anim group relative overflow-hidden rounded-3xl bg-navy-900 border border-navy-800 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-[400px] cursor-pointer"
            >
              {/* Image Side */}
              <div className="relative w-full h-[220px] overflow-hidden bg-blue-100 flex items-center justify-center p-4 border-b border-white/5">
                <img
                  src={project.img}
                  alt={project.head}
                  className="h-full max-h-48 object-contain transition-transform duration-700 group-hover:scale-104"
                />
                <div className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-md border border-white/10 text-slate-300 text-xs px-3 py-1 rounded-full font-bold">
                  Project {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Lower Info Area (Visible before hover) */}
              <div className="p-6 flex flex-col justify-between flex-1 text-left">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {project.head}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techSpan.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className="bg-cyan-950/40 border border-cyan-500/10 text-cyan-400 text-[10px] px-2.5 py-1 rounded-full font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay Curtain Slide (Reveals on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-300 flex flex-col justify-between p-8 transition-all duration-500 translate-y-full group-hover:translate-y-0 z-20 text-left">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-900">
                    Featured Project
                  </span>
                  <h3 className="text-xl font-bold text-navy-950">
                    {project.head}
                  </h3>
                  <p className="text-navy-400 text-md leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techSpan.map((item, i) => (
                      <span
                        key={i}
                        className="bg-navy-900 border border-white/10 text-slate-300 text-[10px] px-2.5 py-1 rounded-full font-medium"
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
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full text-xs transition-all duration-300 shadow-md cursor-pointer text-center"
                    >
                      <span>{project.urlDesc}</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-slate-500 italic block">
                      Internal Design Layout
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* And More Showcase Card */}
          <div className="project-card-anim group flex flex-col items-center justify-center rounded-3xl bg-navy-900 border border-navy-800 hover:border-cyan-400/40 shadow-lg transition-all duration-500 p-6 h-[400px] cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-navy-950/60 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-all duration-300 border border-white/5">
              <i className="fa-solid fa-layer-group text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 mb-2 transition-colors">
              And more...
            </h3>
            <p className="text-slate-400 text-xs max-w-[200px] text-center leading-relaxed">
              Explore extra concepts, coding sandboxes, and graphics templates
            </p>
          </div>
        </div>

        {/* Buttons / Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          <a
            href="https://github.com/KanthariaDhruti"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:scale-[1.02] cursor-pointer no-underline text-sm"
          >
            <i className="fa-brands fa-github text-lg"></i>
            <span>View More on GitHub</span>
          </a>

          <Link
            to="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer no-underline text-sm"
          >
            <i className="fa-regular fa-folder-open text-lg"></i>
            <span>View My Full Portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
