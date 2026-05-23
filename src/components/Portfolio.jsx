import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const rowsRef = useRef([]);

  const projects = [
    {
      img: "/busi-card.png",
      head: "Business Card Generator",
      desc: "React mini project where users can fill in their details and instantly generate and download a professional business card in real-time.",
      techSpan: ["React", "JavaScript", "HTML/CSS"],
      link: "https://github.com/KanthariaDhruti/Business-card-generator",
      urlDesc: "See the code here",
    },
    {
      img: "/to-do-list.png",
      head: "To Do List",
      desc: "A minimal and responsive to-do list built with React and JavaScript for daily task management.",
      techSpan: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/KanthariaDhruti/To-do-List",
      urlDesc: "See the code here",
    },
    {
      img: "/notes.png",
      head: "Write Notes",
      desc: "A MERN stack mini project for creating, saving, and managing notes in a clean interface.",
      techSpan: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/KanthariaDhruti/Write-notes",
      urlDesc: "See the code here",
    },
    {
      img: "/chat.png",
      head: "ChatBot UI/UX Landing",
      desc: "A UI/UX based chatbot landing page designed in Figma and built in Webflow to showcase features and convert leads.",
      techSpan: ["Figma", "Webflow", "UI Design"],
      link: "https://chatbot-bc1e03.webflow.io/",
      urlDesc: "Visit the site here",
    },
    {
      img: "/team.png",
      head: "Team App Workspace",
      desc: "A collaborative team platform concept with responsive UI crafted in Figma and built in Webflow.",
      techSpan: ["Figma", "Webflow", "Product Design"],
      link: "https://dhrutis-team-app.webflow.io/",
      urlDesc: "Visit the site here",
    },
    {
      img: "/fintech.png",
      head: "Fintech Appointment Flow",
      desc: "A sleek and responsive appointment booking flow designed to simplify user interaction with financial experts.",
      techSpan: ["Figma", "UI/UX", "Prototyping"],
      link: "https://www.figma.com/proto/GVIcgnWj17n4IayKNM01Pw/Untitled?page-id=0%3A1&node-id=50-2435&viewport=2182%2C-707%2C0.39&t=Bf9v609J5InSDtL4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40%3A2906",
      urlDesc: "See the complete prototype",
    },
    {
      img: "/Wanderlust.png",
      head: "Wanderlust – Explore Stays",
      desc: "A travel accommodation web app with dynamic listings and a modern booking experience.",
      techSpan: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      link: "https://github.com/KanthariaDhruti/WanderLust",
      urlDesc: "See the code here",
    },
    {
      img: "/magazine.png",
      head: "Fashion Magazine Layout",
      desc: "A future-forward fashion editorial magazine concept blending bold layouts, trends, and storytelling layout structures.",
      techSpan: ["Adobe InDesign", "Graphic Design"],
      link: "#",
      urlDesc: "Creative editorial project",
    },
  ];

  useGSAP(
    () => {
      // HERO ANIMATION
      const heroEls = heroRef.current.querySelectorAll(".hero-animate");
      gsap.fromTo(
        heroEls,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // ROW ANIMATIONS
      rowsRef.current.forEach((row) => {
        if (!row) return;

        const image = row.querySelector(".row-image-container");
        const content = row.querySelector(".row-content-container");
        const isReverse = row.classList.contains("row-reverse-trigger");

        gsap.fromTo(
          image,
          { opacity: 0, x: isReverse ? 50 : -50, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          content,
          { opacity: 0, x: isReverse ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-navy-950 text-white overflow-hidden pt-24 font-sans mt-10 relative">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-300 no-underline"
        >
          <i className="fa-solid fa-arrow-left text-xs"></i>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header ref={heroRef} className="px-6 pb-20 md:px-12 md:pb-2 max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="hero-animate text-4xl font-extrabold leading-tight text-white md:text-7xl tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Creative Gallery
            </span>
          </h1>
          <div className="w-16 h-1 bg-cyan-500 mt-4 rounded-full hero-animate"></div>
          <p className="hero-animate mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            A comprehensive list of my graphic layouts, visual mockups, UI wireframes, and full-stack development implementations.
          </p>
        </div>
      </header>

      {/* Project Showcase Section */}
      <section className="w-full relative z-10">
        {projects.map((project, index) => {
          const isDark = index % 2 === 0;
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              ref={(el) => (rowsRef.current[index] = el)}
              className={`w-full py-20 md:py-32 px-6 md:px-12 lg:px-24 flex items-center border-b border-white/5 relative overflow-hidden ${isReverse ? "row-reverse-trigger" : ""
                } ${isDark
                  ? "bg-navy-950 text-white"
                  : "bg-[#f5f8fd] text-navy-950"
                }`}
            >
              {/* Row Grid Pattern */}
              <div className={`absolute inset-0 pointer-events-none opacity-30 z-0 ${
                isDark ? "bg-grid-dark bg-dots-dark" : "bg-grid-light bg-dots-light"
              }`}></div>
              <div className={`max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 ${isReverse ? "lg:flex-row-reverse" : ""
                }`}>

                {/* Row Image Container */}
                <div className="row-image-container w-full lg:w-1/2 flex justify-center z-10">
                  <div className={`w-full max-w-[550px] aspect-[4/3] rounded-3xl p-4 flex items-center justify-center relative overflow-hidden group shadow-lg ${isDark
                      ? "bg-navy-900 border border-white/10 hover:border-cyan-400/40"
                      : "bg-white border border-navy-200 hover:border-blue-500/30"
                    }`}>
                    {/* Real project screenshot */}
                    <img
                      src={project.img}
                      alt={project.head}
                      className="w-full h-full object-contain p-2 rounded-2xl group-hover:scale-103 transition-transform duration-700 ease-out z-10"
                    />
                  </div>
                </div>

                {/* Row Content Container */}
                <div className="row-content-container w-full lg:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6">

                  <span className={`text-[10px] font-extrabold uppercase tracking-[0.25em] ${isDark ? "text-cyan-400" : "text-blue-600"
                    }`}>
                    Project {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                    {project.head}
                  </h2>

                  <p className={`text-sm md:text-base leading-relaxed text-justify ${isDark ? "text-slate-300" : "text-navy-750"
                    }`}>
                    {project.desc}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techSpan.map((item, i) => (
                      <span
                        key={i}
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${isDark
                            ? "bg-navy-950/60 border-white/10 text-slate-300"
                            : "bg-white border-navy-200 text-navy-800"
                          }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-4">
                    {project.link && project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2.5 font-bold px-7 py-3.5 rounded-full text-xs transition-all duration-300 shadow-md no-underline hover:scale-[1.02] cursor-pointer ${isDark
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white"
                            : "bg-navy-950 text-white hover:bg-cyan-500"
                          }`}
                      >
                        <span>{project.urlDesc}</span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-slate-500 italic">
                        Internal Design Portfolio
                      </span>
                    )}
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Global Bottom CTA Panel */}
      <section className="w-full py-20 px-6 bg-navy-950 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Want to see more of my work?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Explore experimental files, code sandboxes, mock designs, and graphic folders on my GitHub.
          </p>
          <a
            href="https://github.com/KanthariaDhruti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02] cursor-pointer no-underline text-sm"
          >
            <i className="fa-brands fa-github text-lg"></i>
            <span>View More on GitHub</span>
          </a>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;