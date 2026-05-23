import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const textSectionRef = useRef(null);
  const cardsRef = useRef(null);

  const abtCards = [
    {
      icon: "fa-solid fa-book-open",
      head: "Education",
      desc: "B.Tech IT Engineering, 7th semester",
    },
    {
      icon: "fa-solid fa-award",
      head: "Academic Performance",
      desc: "SGPA of 8.43 in latest semester",
    },
    {
      icon: "fa-solid fa-user-group",
      head: "Leadership",
      desc: "Ex-NCC Cadet with discipline & teamwork",
    },
    {
      icon: "fa-solid fa-heart",
      head: "Interests",
      desc: "Singing, Dancing, Arts and Sports",
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
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        textSectionRef.current,
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: textSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      const cards = cardsRef.current?.querySelectorAll(".abt-card");
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
          }
        );
      }
    },
    { scope: aboutRef }
  );

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-6 md:px-16 lg:px-32 overflow-hidden border-b border-navy-100"
    >
      

      <div className="max-w-7xl mx-auto text-center z-10 relative">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight"
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p
            ref={subtitleRef}
            className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg mt-4 leading-relaxed font-normal"
          >
            Get to know more about my journey, academic credentials, and design passion
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 text-left">
          {/* Left Text Block */}
          <div
            ref={textSectionRef}
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold text-navy-900">
              Hi, I'm <span className="text-blue-600">Dhruti Kantharia</span>
            </h3>
            
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed text-justify">
              <p>
                I am currently pursuing my B.Tech in IT Engineering at Gandhinagar University. 
                I genuinely enjoy blending structural code with design to create clean interfaces, 
                functional websites, and immersive user experiences. I'm always eager to learn and create.
              </p>
              <p>
                As a Graphic Design Intern at Adrta Technologies, I develop practical experience in 
                brand messaging, layouts, and digital styling. This graphic background gives me a unique 
                advantage in styling pixel-perfect frontends.
              </p>
              <p>
                Outside of design and development, I find balance through singing, dancing, and fine arts. 
                My background as an ex-NCC Cadet has also instilled in me strong values of discipline, 
                collaborative teamwork, and leadership under pressure.
              </p>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            >
              {abtCards.map((card, index) => (
                <div
                  key={index}
                  className="abt-card bg-white border border-navy-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 text-2xl flex items-center justify-center mb-4">
                      <i className={card.icon}></i>
                    </div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">
                      {card.head}
                    </h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;