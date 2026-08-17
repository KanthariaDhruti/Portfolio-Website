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
      className="relative bg-[#fdfdfd] py-24 px-6 md:px-16 lg:px-32 text-center overflow-hidden border-b border-navy-200"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-ocean/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-ocean/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-extrabold">
            Skills & Expertise
          </h2>
          <p
            ref={subtitleRef}
            className="max-w-2xl mx-auto text-base md:text-xl mt-10  font-normal font-[Ibm-plex-serif]"
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
              className="skill-card bg-[#FDFDFD] border border-brown/20 rounded-2xl p-6.5 shadow-sm hover:shadow-md  transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-brown text-pearl text-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-lg font-bold  mb-4">{skill.head}</h3>
              <div className="flex flex-wrap justify-center font-[Ibm-plex-serif] gap-2 mt-auto">
                {skill.skillSpan.map((item, i) => (
                  <span
                    key={i}
                    className="skill-tag bg-brown/10 text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300"
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
          className="recent text-left bg-ocean/70 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto shadow-md text-pearl relative overflow-hidden backdrop-blur-md"
        >
          {/* Subtle overlay glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pearl/15 blur-[80px] pointer-events-none rounded-full"></div>

          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Certifications</span>
          </h3>

          <ol className="relative border-l border-pearl pl-6 sm:pl-8 space-y-8 ml-2 relative z-10">
            <li className="relative group">
              <span className="absolute -left-[30px] sm:-left-[39px] top-1.5 w-3 h-3 bg-pearl rounded-full shadow-[0_0_10px_rgba(93,118,139,0.3)] group-hover:scale-125 transition-transform duration-300"></span>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-lg transition-colors">
                  Complete Web Design: Figma to Webflow
                </p>
                <p className="text-xs font-medium uppercase tracking-wider">
                  January 2025
                </p>
                <p className="font-[Ibm-plex-serif] max-w-2xl leading-relaxed mt-1">
                  Earned competency in end-to-end user experience design,
                  building interface structures, and setting up high-performance
                  layouts on Webflow.
                </p>
              </div>
            </li>

            <li className="relative group">
              <span className="absolute -left-[30px] sm:-left-[39px] top-1.5 w-3 h-3 bg-pearl rounded-full shadow-[0_0_10px_rgba(93,118,139,0.3)] group-hover:scale-125 transition-transform duration-300"></span>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-lg transition-colors">
                  Full Stack Development (MERN Stack)
                </p>
                <p className="text-xs font-medium uppercase tracking-wider">
                  November 2025
                </p>
                <p className="font-[Ibm-plex-serif] max-w-2xl leading-relaxed mt-1">
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
