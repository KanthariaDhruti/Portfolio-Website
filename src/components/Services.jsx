import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  const services = [
    {
      icon: "fa-solid fa-code",
      head: "Web Development",
      desc: "Creating responsive and interactive web applications using HTML, CSS, JavaScript, React, Express, and Backend with Node.js.",
      list: [
        "Responsive Grid Layouts",
        "Interactive State Logic",
        "API Integration & Design",
        "Performance Optimization",
      ],
    },
    {
      icon: "fa-solid fa-palette",
      head: "UI/UX Design",
      desc: "Designing intuitive and visually appealing user interfaces with focus on user experience using Figma and Webflow.",
      list: [
        "Wireframing & UI Flows",
        "High Fidelity Prototyping",
        "User Centric Architecture",
        "Component Systems",
      ],
    },
    {
      icon: "fa-solid fa-compass-drafting",
      head: "Graphic Design",
      desc: "Creating modern and visually appealing graphic designs that help brands communicate effectively through social media, branding, and digital content.",
      list: [
        "Branding & Logo Design",
        "Social Media Graphics",
        "Visual Design Guidelines",
        "Creative Content Layouts",
      ],
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        [headingRef.current, subtitleRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      );

      const cards = cardsRef.current?.querySelectorAll(".serv-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
          },
        );
      }

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-almond select-none font-outfit text-ocean py-24 px-6 md:px-16 lg:px-32 text-center overflow-hidden border-b border-navy-200"
    >
      {/* Decorative Grid Patterns & Canvas indicators */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-dots-dark pointer-events-none opacity-20 z-0"></div>
      <div className="absolute top-24 left-10 text-[10px] font-mono text-ocean/50 select-none hidden lg:block uppercase tracking-wider">
        [Section: 06 / Services]
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-playwrite font-extrabold text-navy-900 tracking-tight"
          >
            Services
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full"></div>
          <p
            ref={subtitleRef}
            className="max-w-2xl  mx-auto text-base md:text-xl mt-4 font-normal"
          >
            Providing high-quality visual designs and responsive frontend
            developments
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left items-stretch"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="serv-card border border-transparent rounded-3x p-8 hover:border-brown/40 hover:shadow-md hover:-translate-y-2 transition-all duration-300 flex flex-col group "
            >
              <div className=" text-4xl mb-5 w-12 h-12 rounded-xl bg-brown flex items-center justify-center text-pearl group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-playwrite font-bold text-navy-900 mb-3  transition-colors">
                {service.head}
              </h3>
              <p className="text-navy-700  leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>
              <ul className="space-y-2 text-navy-800  border-t border-navy-200/50 pt-4">
                {service.list.map((item, i) => (
                  <li key={i}>
                    <span className="text-brown">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div
          ref={ctaRef}
          className="bg-brown/80 text-pearl rounded-3xl py-10 px-8 max-w-4xl mx-auto shadow-md relative overflow-hidden"
        >
          <h4 className="text-2xl md:text-3xl font-playwrite font-extrabold mb-3">
            Ready to Start Your Project?
          </h4>
          <p className=" md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            I am actively seeking internship opportunities and collaborative
            frontend development projects. Let's work together to bring your
            ideas to life!
          </p>
          <div className="flex flex-col font-playwrite sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-pearl hover:bg-brown hover:text-pearl font-bold px-8 py-3 rounded-full shadow-[0_4px_12px_rgba(93,118,139,0.25)] hover:scale-[1.03] transition-all text-brown text-sm no-underline border border-pearl/10 text-center"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto border border-pearl/50 hover:bg-pearl hover:text-brown font-bold px-8 py-3 rounded-full hover:scale-[1.03] transition-all text-sm no-underline text-center"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
