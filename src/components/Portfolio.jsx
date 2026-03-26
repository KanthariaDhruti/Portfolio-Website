import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  const projects = [
    {
      img: "/busi-card.png",
      head: "Business Card Generator and Downloader",
      desc: "React mini project where users can fill in their details and instantly generate and download a professional business card.",
      techSpan: ["React", "JavaScript"],
      link: "https://github.com/KanthariaDhruti/Business-card-generator",
      urlDesc: "See the code here",
    },
    {
      img: "/to-do-list.png",
      head: "To Do List",
      desc: "A minimal and responsive to-do list built with React and JavaScript for daily task management.",
      techSpan: ["React", "JavaScript"],
      link: "https://github.com/KanthariaDhruti/To-do-List",
      urlDesc: "See the code here",
    },
    {
      img: "/notes.png",
      head: "Write Notes",
      desc: "A MERN stack mini project for creating, saving, and managing notes in a clean interface.",
      techSpan: ["MongoDB", "Express", "React", "Node"],
      link: "https://github.com/KanthariaDhruti/Write-notes",
      urlDesc: "See the code here",
    },
    {
      img: "/chat.png",
      head: "ChatBot",
      desc: "A UI/UX based chatbot landing page designed in Figma and built in Webflow.",
      techSpan: ["Figma", "Webflow"],
      link: "https://chatbot-bc1e03.webflow.io/",
      urlDesc: "Visit the site here",
    },
    {
      img: "/team.png",
      head: "Team App",
      desc: "A collaborative team platform concept with responsive UI crafted in Figma and Webflow.",
      techSpan: ["Figma", "Webflow"],
      link: "https://dhrutis-team-app.webflow.io/",
      urlDesc: "Visit the site here",
    },
    {
      img: "/fintech.png",
      head: "Seamless Appointment Booking for a Fintech Platform",
      desc: "A sleek and responsive appointment booking flow designed to simplify user interaction with financial experts.",
      techSpan: ["Figma"],
      link: "https://www.figma.com/proto/GVIcgnWj17n4IayKNM01Pw/Untitled?page-id=0%3A1&node-id=50-2435&viewport=2182%2C-707%2C0.39&t=Bf9v609J5InSDtL4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40%3A2906",
      urlDesc: "See the complete prototype",
    },
    {
      img: "/Wanderlust.png",
      head: "Wanderlust – Explore Your Perfect Stay",
      desc: "A travel accommodation web app with dynamic listings and a modern booking experience.",
      techSpan: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      link: "https://github.com/KanthariaDhruti/WanderLust",
      urlDesc: "See the code here",
    },
    {
      img: "/magazine.png",
      head: "Fashion Magazine",
      desc: "A future-forward fashion editorial magazine concept blending bold layouts, trends, and storytelling.",
      techSpan: ["Adobe InDesign"],
      link: "#",
      urlDesc: "Creative editorial project",
    },
  ];

  useEffect(() => {
    // HERO ANIMATION
    const heroEls = heroRef.current.querySelectorAll(".hero-animate");
    gsap.fromTo(
      heroEls,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // PROJECT CARDS ANIMATION
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const image = card.querySelector(".project-image");
      const content = card.querySelector(".project-content");
      const contentItems = card.querySelectorAll(".content-stagger");

      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.95, x: -40 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        content,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        contentItems,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 78%",
          },
        }
      );
    });

    // CTA ANIMATION
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 60, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fbff] via-[#f5f8ff] to-[#eef4ff] text-slate-900">
      {/* Hero */}
      <section ref={heroRef} className="px-6 pt-20 pb-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="hero-animate max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <p className="hero-animate mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            A curated mix of web development, UI/UX design, Graphic design and creative projects
            built to be both functional and visually polished.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-10 px-4 pb-24 md:px-8 lg:px-12">
        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`mx-auto flex max-w-[1500px] flex-col overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm lg:min-h-[460px] lg:flex-row ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="project-image relative w-full lg:w-[52%]">
                <div className="relative h-[320px] w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 lg:h-full">
                  <img
                    src={project.img}
                    alt={project.head}
                    className="h-full max-h-140 w-full scale-[1.01] object-contain transition duration-700 hover:scale-[1.04]"
                  />

                  <div
                    className={`absolute inset-0 ${
                      isReverse
                        ? "bg-gradient-to-r from-white via-white/1 to-transparent"
                        : "bg-gradient-to-l from-white via-white/10 to-transparent"
                    }`}
                  ></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="project-content flex w-full items-center lg:w-[48%]">
                <div className="w-full px-6 py-10 md:px-10 lg:px-14">
                  <p className="content-stagger mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="content-stagger mb-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                    {project.head}
                  </h2>

                  <p className="content-stagger mb-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                    {project.desc}
                  </p>

                  <div className="content-stagger mb-7 flex flex-wrap gap-2">
                    {project.techSpan.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="content-stagger">
                    {project.link && project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
                      >
                        {project.urlDesc}
                        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-500">
                        {project.urlDesc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-16 lg:px-24">
        <div
          ref={ctaRef}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[32px] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_10px_35px_rgba(15,23,42,0.06)] md:flex-row md:text-left"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Want to explore more?
            </h2>
            <p className="mt-2 text-slate-600">
              Browse additional experiments, concepts, and code on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/KanthariaDhruti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
          >
            <i className="fa-brands fa-github text-xl"></i>
            <span>View More on GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;