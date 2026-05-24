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
          toggleActions: "play none none reverse",
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
              toggleActions: "play none none reverse",
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
    { scope: containerRef },
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-24 px-6 md:px-16 lg:px-32 text-center overflow-hidden border-b border-white/5"
    >
      {/* Decorative Grid Patterns & Canvas indicators */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-dots-dark pointer-events-none opacity-20 z-0"></div>
      <div className="absolute top-24 left-10 text-[10px] font-mono text-slate-500/40 select-none hidden lg:block uppercase tracking-wider">
        [Section: 06 / Services]
      </div>

      {/* Background glow highlights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-brand-indigo/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Services & Expertise
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p
            ref={subtitleRef}
            className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mt-4 leading-relaxed font-normal"
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
              className="serv-card bg-white/8 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="text-cyan-400 text-4xl mb-5 w-12 h-12 rounded-xl bg-cyan-950/40 flex items-center justify-center border border-cyan-500/10 group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.head}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>
              <ul className="space-y-2 text-slate-300 text-xs border-t border-white/5 pt-4">
                {service.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div
          ref={ctaRef}
          className="bg-navy-900/30 border border-white/10 backdrop-blur-md text-white rounded-3xl py-10 px-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
          <h4 className="text-2xl md:text-3xl font-extrabold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h4>
          <p className="text-slate-400 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            I am actively seeking internship opportunities and collaborative
            frontend development projects. Let's work together to bring your
            ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-[1.03] transition-all text-sm no-underline text-center"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto border border-white/20 hover:border-cyan-400 hover:bg-white/5 text-slate-200 hover:text-white font-bold px-8 py-3 rounded-full hover:scale-[1.03] transition-all text-sm no-underline text-center"
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
