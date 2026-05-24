import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);
  const achievementRef = useRef(null);

  const skillsData = [
    {
      icon: "fa-solid fa-globe",
      head: "Web Development",
      skillSpan: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "SQL",
        "MongoDB",
      ],
    },
    {
      icon: "fa-regular fa-object-group",
      head: "UI/UX Design",
      skillSpan: ["Figma", "Responsive Design", "Webflow", "Prototyping"],
    },
    {
      icon: "fa-solid fa-code",
      head: "Other Languages",
      skillSpan: ["Python", "Java"],
    },
    {
      icon: "fa-solid fa-compass-drafting",
      head: "Graphic Design",
      skillSpan: ["Adobe Illustrator", "Adobe InDesign", "Figma"],
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        [headingRef.current, subtitleRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      );

      const cards = cardsRef.current?.querySelectorAll(".skill-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
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

        // Sub-elements tags animation inside cards
        cards.forEach((card, index) => {
          const tags = card.querySelectorAll(".skill-tag");
          if (tags && tags.length > 0) {
            gsap.fromTo(
              tags,
              { opacity: 0, scale: 0.8 },
              {
                scrollTrigger: {
                  trigger: card,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
                opacity: 1,
                scale: 1,
                stagger: 0.04,
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: "back.out(1.5)",
              },
            );
          }
        });
      }

      gsap.fromTo(
        achievementRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          scrollTrigger: {
            trigger: achievementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
      );
    },
    { scope: skillsRef },
  );

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="relative bg-gradient-to-b from-white via-blue-400 to-navy-950 py-24 px-6 md:px-16 lg:px-32 text-center overflow-hidden border-b border-white/5"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-indigo/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight"
          >
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p
            ref={subtitleRef}
            className="text-navy-800 max-w-2xl mx-auto text-base md:text-lg mt-4 leading-relaxed font-normal"
          >
            My current technical skills, software expertise, and engineering
            disciplines
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-navy-900 border border-navy-800 rounded-2xl p-6.5 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 text-cyan-400 text-2xl flex items-center justify-center mb-5 border border-cyan-500/10 group-hover:scale-110 transition-transform duration-300">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {skill.head}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {skill.skillSpan.map((item, i) => (
                  <span
                    key={i}
                    className="skill-tag bg-navy-950/50 text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div
          ref={achievementRef}
          className="recent text-left bg-navy-950/95 border border-navy-800/80 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto shadow-2xl relative overflow-hidden backdrop-blur-md"
        >
          {/* Subtle overlay glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none rounded-full"></div>

          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
            <i className="fa-solid fa-graduation-cap text-cyan-400"></i>
            <span>Certifications</span>
          </h3>

          <ol className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-8 ml-2 relative z-10">
            <li className="relative group">
              <span className="absolute -left-[30px] sm:-left-[39px] top-1.5 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] group-hover:scale-125 transition-transform duration-300"></span>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">
                  Complete Web Design: Figma to Webflow
                </p>
                <p className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                  January 2025
                </p>
                <p className="text-slate-400 text-sm max-w-2xl leading-relaxed mt-1">
                  Earned competency in end-to-end user experience design,
                  building interface structures, and setting up high-performance
                  layouts on Webflow.
                </p>
              </div>
            </li>

            <li className="relative group">
              <span className="absolute -left-[30px] sm:-left-[39px] top-1.5 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] group-hover:scale-125 transition-transform duration-300"></span>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">
                  Full Stack Development (MERN Stack)
                </p>
                <p className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                  November 2025
                </p>
                <p className="text-slate-400 text-sm max-w-2xl leading-relaxed mt-1">
                  Completed advanced training at Apna College, covering MongoDB
                  databases, Express frameworks, React interfaces, and Node.js
                  server architectures.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Skills;
