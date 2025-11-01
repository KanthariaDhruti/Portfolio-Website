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

  const Skills = [
    {
      icon: "fa-solid fa-globe",
      head: "Web Development",
      desc: "Singing, Dancing, Arts and Sports",
      skillSpan: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "Angular",
        "TypeScript",
        "Express",
      ],
    },
    {
      icon: "fa-solid fa-palette",
      head: "UI/UX Design",
      desc: "Singing, Dancing, Arts and Sports",
      skillSpan: ["Figma", "Responsive Design", "Webflow", "Prototyping"],
    },
    {
      icon: "fa-solid fa-code",
      head: "Other Languages",
      desc: "Singing, Dancing, Arts and Sports",
      skillSpan: ["Python", "Java"],
    },
    {
      icon: "fa-solid fa-database",
      head: "Databases",
      desc: "Singing, Dancing, Arts and Sports",
      skillSpan: ["SQL", "MongoDB"],
    },
  ];

  useGSAP(
    () => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      // Skill cards animation with stagger
      const cards = cardsRef.current?.querySelectorAll(".skill-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
          },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.9,
            ease: "power2.in",
          }
        );

        // Animate skill tags inside each card
        cards.forEach((card, cardIndex) => {
          const tags = card.querySelectorAll(".skill-tag");
          if (tags && tags.length > 0) {
            gsap.fromTo(
              tags,
              {
                opacity: 0,
                scale: 0,
              },
              {
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  toggleActions: "play none none reverse",
                },
                opacity: 1,
                scale: 1,
                stagger: 0.08,
                duration: 0.5,
                delay: 0.3 + cardIndex * 0.15,
                ease: "back.out(1.7)",
              }
            );
          }
        });
      }

      // Achievement section animation
      gsap.fromTo(
        achievementRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          scrollTrigger: {
            trigger: achievementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    },
    { scope: skillsRef }
  );

  return (
    <div
      ref={skillsRef}
      id="skills"
      className="skills bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-16 lg:px-32 text-center overflow-hidden"
    >
      {/* Section Header */}
      <h1
        ref={headingRef}
        className="text-4xl font-extrabold text-gray-900 mb-4"
      >
        Skills & Expertise
      </h1>
      <p
        ref={subtitleRef}
        className="text-gray-600 max-w-2xl mx-auto text-lg mb-12"
      >
        A comprehensive overview of my technical skills and areas of expertise
      </p>

      {/* Skill Cards */}
      <div
        ref={cardsRef}
        className="skill-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {Skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer"
          >
            <i className={`${skill.icon} text-4xl text-blue-600 mb-4`}></i>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">
              {skill.head}
            </h5>
            <div className="skill-wrap flex flex-wrap justify-center gap-2">
              {skill.skillSpan.map((item, i) => (
                <span
                  key={i}
                  className="skill-tag bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Achievement */}
      <div
        ref={achievementRef}
        className="recent bg-blue-100 py-8 px-6 rounded-2xl max-w-6xl mx-auto shadow-md"
      >
        <h3 className="text-2xl font-bold text-blue-800 mb-3">
          Recently Completed
        </h3>
        <p className="text-gray-700 mb-2">
          UI/UX Design Course — Enhancing my design skills and user experience
          understanding
        </p>
        <span className="inline-block mt-2 text-blue-600 font-semibold text-sm bg-white border border-blue-300 rounded-full px-4 py-1 shadow-sm">
          Certificate Earned
        </span>
      </div>
    </div>
  );
}

export default Skills;