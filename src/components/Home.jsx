import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";

function Home() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const glowRef = useRef(null);
  const infoRef = useRef(null);
  const buttonsRef = useRef(null);
  const iconsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      // Reset positions to prevent flash of unstyled layouts
      gsap.set(imgRef.current, { opacity: 0 });
      if (infoRef.current) gsap.set(infoRef.current.children, { opacity: 0 });
      if (buttonsRef.current)
        gsap.set(buttonsRef.current.children, { opacity: 0 });
      if (iconsRef.current)
        gsap.set(iconsRef.current.querySelectorAll("a"), { opacity: 0 });

      tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 })
        .fromTo(
          imgRef.current,
          { scale: 0.8, y: 50, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 1.2, ease: "back.out(1.2)" },
          "-=0.2",
        )
        .fromTo(
          infoRef.current?.children || [],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          buttonsRef.current?.children || [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12 },
          "-=0.4",
        )
        .fromTo(
          iconsRef.current?.querySelectorAll("a") || [],
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );

      // Continuous float animation for profile image
      gsap.to(imgRef.current, {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Continuous subtle pulse for background neon glow
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.15,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-navy px-6 sm:px-12 md:px-20 lg:px-32 py-24 overflow-hidden border-b border-white/5"
    >
      {/* Ambient background glows */}
      <div
        ref={glowRef}
        className="absolute top-1/4 right-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none z-0"
      ></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-brand-indigo/10 blur-[110px] rounded-full pointer-events-none z-0"></div>

      {/* Decorative Grid Patterns & Designer Canvas indicators */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-dots-dark pointer-events-none opacity-20 z-0"></div>

      {/* Figma/Designer style canvas guides */}
      <div className="absolute top-24 left-10 text-[10px] font-mono text-cyan-500/40 select-none hidden lg:block uppercase tracking-wider">
        [w: 100% / h: auto]
      </div>
      <div className="absolute bottom-10 right-10 text-[10px] font-mono text-slate-500/40 select-none hidden lg:block uppercase tracking-wider">
        Grid: 60px / Dots: 24px
      </div>
      <div className="absolute top-24 right-10 text-[10px] font-mono text-slate-500/40 select-none hidden lg:block uppercase tracking-wider">
        Canvas: Active
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 z-10">
        {/* Left Side Info Panel */}
        <div
          ref={infoRef}
          className="w-full mt-15 md:w-3/5 text-center md:text-left flex flex-col space-y-4 md:space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Dhruti
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 leading-snug">
            Graphic Designer <span className="text-cyan-400">&</span> Web
            Developer
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl text-justify md:text-left">
            I turn creative thoughts into responsive, clean code and visually
            stunning interactive web designs. Blending technical accuracy with
            strong layout aesthetics to craft unforgettable digital journeys.
          </p>

          {/* Interactive Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:scale-[1.03] transition-all duration-300 cursor-pointer text-sm">
                Get In Touch
              </button>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-50}
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto border border-white/20 hover:border-cyan-400 hover:bg-white/5 text-slate-200 hover:text-white font-bold px-8 py-3.5 rounded-full hover:scale-[1.03] transition-all duration-300 cursor-pointer text-sm">
                Browse Projects
              </button>
            </Link>
          </div>

          {/* Styled Social Icons */}
          <div
            ref={iconsRef}
            className="flex items-center justify-center md:justify-start gap-6 pt-4 text-2xl text-slate-400"
          >
            <a
              href="https://github.com/KanthariaDhruti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 hover:shadow-[0_0_15px_rgba(248,113,113,0.2)] p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
              title="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Side Frame Profile Image */}
        <div className="w-full md:w-2/5 flex justify-center items-center z-10">
          <div
            ref={imgRef}
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[350px] lg:h-[350px] p-2 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.25)] flex items-center justify-center hover:scale-[1.02] transition-transform duration-500 ease-out"
          >
            {/* Soft backdrop overlay */}
            <div className="absolute inset-0 bg-navy-950 rounded-full scale-[0.985]"></div>

            {/* Real profile image */}
            <img
              src="/dhrutiImg.jpg"
              alt="Dhruti Kantharia"
              className="w-full h-full object-cover rounded-full z-10 border-4 border-navy-950 scale-[0.97]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
