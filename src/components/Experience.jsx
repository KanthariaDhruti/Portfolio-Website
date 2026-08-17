import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const timelineItemsRef = useRef([]);
  const blobRef = useRef(null);

  const experienceData = [
    {
      year: "Jan 2026 - June 2026",
      role: "Graphic Design Intern",
      company: "Adrta Technologies",
      desc: [
        "Developing corporate branding guidelines, vector assets, and digital marketing materials.",
        "Collaborating with frontend development teams to align visual layouts with UI code implementation.",
        "Creating social media creatives, layout grids, and interactive vector designs using Illustrator and Figma.",
      ],
    },
    {
      year: "June 2026 - Present",
      role: "Freelance Graphic Designer ",
      desc: [
        "Developing corporate branding guidelines, vector assets, and digital marketing materials.",
        "Ready to collaborate with brands to align visual layouts with relatable and clean designs.",
        "Creating social media creatives, layout grids, and interactive vector designs using Illustrator and Figma.",
      ],
    },
  ];

  useGSAP(
    () => {
      // Header Animation
      gsap.fromTo(
        [headingRef.current, subtitleRef.current],
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      // Line Drawing Animation on Scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );

      // Individual Timeline Items Sequential Animations
      timelineItemsRef.current.forEach((item, index) => {
        if (!item) return;

        const node = item.querySelector(".timeline-node");
        const content = item.querySelector(".timeline-content");
        const year = item.querySelector(".timeline-year");

        // Animate timeline node dot
        gsap.fromTo(
          node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Animate year text (always on left, animate from left)
        gsap.fromTo(
          year,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Animate main content block (always on right, animate from right)
        gsap.fromTo(
          content,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Drifting floating blob animation
      if (blobRef.current) {
        gsap.to(blobRef.current, {
          x: "random(-80, 80)",
          y: "random(-80, 80)",
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          repeatRefresh: true,
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-pearl py-24 px-6 md:px-16 lg:px-32 overflow-hidden border-b border-navy-200"
    >
      {/* Decorative Grid Patterns & Canvas indicators */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-dots-dark pointer-events-none opacity-20 z-0"></div>
      <div className="absolute top-24 left-10 text-[10px] font-mono text-ocean/50 select-none hidden lg:block uppercase tracking-wider">
        [Section: 03 / Experience]
      </div>

      {/* Moving Abstract background shape (submerged/subtle) */}
      <div
        ref={blobRef}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brown/10 blur-[110px] rounded-full pointer-events-none z-0 select-none"
      ></div>

      {/* Background glow flares */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brown/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-brown/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-extrabold"
          >
            My Experience
          </h2>
          <p
            ref={subtitleRef}
            className=" max-w-2xl mx-auto md:text-xl mt-10 font-normal font-[Ibm-plex-serif]"
          >
            My educational traineeships, graphic internships, and freelance
            development timeline
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative min-h-[500px]">
          {/* Vertical central path line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean to-navy-300 origin-top z-0"
          ></div>

          {/* Timeline Items list */}
          <div className="space-y-16 md:space-y-24">
            {experienceData.map((item, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (timelineItemsRef.current[index] = el)}
                  className="flex flex-col md:flex-row items-start relative z-10"
                >
                  {/* Left content container (Year) */}
                  <div className="w-full md:w-1/2 pl-12 pr-4 md:pr-12 md:pl-12 flex justify-start md:justify-end text-left md:text-right">
                    <span className="timeline-year font-extrabold text-xl py-1 block">
                      {item.year}
                    </span>
                  </div>

                  {/* Node Connector Dot */}
                  <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="timeline-node w-5 h-5 rounded-full bg-brown border-4 border-white shadow-[0_0_10px_rgba(93,118,139,0.3)]"></div>
                  </div>

                  {/* Main text description container */}
                  <div className="timeline-content w-full md:w-1/2 pl-12 pr-4 md:pl-12 md:pr-12 text-left pt-1">
                    <h3 className="text-xl font-bold text-navy-900 mb-1">
                      {item.role}
                    </h3>
                    <h4 className=" font-[Ibm-plex-serif] font-semibold text-navy-500 mb-4">
                      {item.company}
                    </h4>
                    <ul className="space-y-2 text-navy-800 font-[Ibm-plex-serif] ">
                      {item.desc.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-650 mt-2 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
