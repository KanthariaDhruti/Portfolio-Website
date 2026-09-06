import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const certsRef = useRef(null);

  const capabilities = [
    {
      category: "Graphic Design",
      items: "Brand Identity, Editorial Layout, Social Media, Figma, Illustrator, InDesign",
    },
    {
      category: "Interface",
      items: "UI / UX, Prototyping, Responsive Design, Webflow",
    },
    {
      category: "Development",
      items: "HTML, CSS, JavaScript, React",
    },
    {
      category: "Also",
      items: "Python, Java",
    },
  ];

  const certifications = [
    {
      title: "Complete Web Design: Figma to Webflow",
      date: "JANUARY 2025",
      description:
        "End-to-end interface design, structure and high-performance Webflow layouts.",
    },
    {
      title: "Full Stack Development — MERN",
      date: "NOVEMBER 2025",
      description:
        "Completed advanced training covering MongoDB databases, Express frameworks, React interfaces, and Node.js server architectures.",
    },
  ];

  useGSAP(
    () => {
      // --------------------------------
      // HEADING ANIMATION
      // --------------------------------
      const headingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      headingTimeline.fromTo(
        [headingRef.current, subtitleRef.current],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // --------------------------------
      // CAPABILITIES ANIMATION
      // --------------------------------
      const rows =
        capabilitiesRef.current?.querySelectorAll(".capability-row");

      if (rows && rows.length > 0) {
        gsap.fromTo(
          rows,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: capabilitiesRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // --------------------------------
      // CERTIFICATIONS ANIMATION
      // --------------------------------
      const certItems = certsRef.current?.querySelectorAll(".cert-item");

      if (certItems && certItems.length > 0) {
        gsap.fromTo(
          certItems,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: certsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    {
      scope: skillsRef,
    }
  );

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="relative bg-almond font-outfit select-none text-ocean py-24 px-6 md:px-16 lg:px-32 border-b border-navy-200"
    >
      {/* HEADER */}
      <div className="mb-16">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl text-center font-playwrite font-extrabold"
        >
          Skills & Expertise
        </h2>

        <p
          ref={subtitleRef}
          className="max-w-2xl mx-auto md:text-xl text-center mt-10 font-normal"
        >
          My current technical skills, software expertise and engineering
          disciplines
        </p>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* CAPABILITIES SECTION */}
        <div ref={capabilitiesRef}>
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-ocean/50 mb-10">
            Skills
          </h3>

          <div className="space-y-6 sm:space-y-8">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="capability-row grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline border-b border-ocean/10 pb-6 last:border-b-0"
              >
                <div className="sm:col-span-4 text-base sm:text-lg font-medium text-ocean">
                  {item.category}
                </div>

                <div className="sm:col-span-8 text-base text-ocean/70 leading-relaxed font-light">
                  {item.items}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS SECTION */}
        <div
          className="pt-12 lg:pt-0 border-t lg:border-t-0 lg:border-l border-ocean/15 lg:pl-12"
          ref={certsRef}
        >
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-ocean/50 mb-10">
            CERTIFICATIONS
          </h3>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`cert-item pb-8 ${
                  index !== certifications.length - 1
                    ? "border-b border-ocean/10"
                    : ""
                }`}
              >
                <h4 className="text-lg sm:text-xl font-medium text-ocean mb-1">
                  {cert.title}
                </h4>

                <p className="text-xs font-semibold tracking-wider uppercase text-ocean/45 mb-3">
                  {cert.date}
                </p>

                <p className="text-base text-ocean/70 leading-relaxed font-light">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
