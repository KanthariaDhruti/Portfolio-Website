import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "/src/App.css";
import { Link } from "react-scroll";

function Home() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const iconsRef = useRef(null);

  useGSAP(
    () => {
      if (!imgRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      const iconLinks = iconsRef.current?.querySelectorAll("a");

      tl.from(heroRef.current, { opacity: 0 })
        .from(imgRef.current, { opacity: 0, y: 60 })
        .from(headingRef.current, { opacity: 0, y: 40 }, "-=0.5")
        .from(textRef.current, { opacity: 0, y: 30 }, "-=0.4")
        .from(
          buttonsRef.current.children,
          { opacity: 0, y: 20, stagger: 0.2 },
          "-=0.3"
        );

      if (iconLinks?.length) {
        tl.fromTo(
          iconLinks,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6 },
          "-=0.5"
        );
      }

      // 🌊 Continuous gentle floating animation
      // Ensure image is exactly at y: 0 before floating starts
      gsap.set(imgRef.current, { y: 1 });

      // Floating animation (only goes upward & back down to same level)
      gsap.to(imgRef.current, {
        y: -10, // goes up 10px max
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: heroRef }
  );

  return (
    <div
      id="home"
      ref={heroRef}
      className="hero flex flex-col md:flex-row items-center justify-around h-auto md:h-screen px-8 md:px-16 lg:px-24 py-16 overflow-hidden"
    >
      {/* Left Content */}
      <div className="md:w-1/2 md:text-left">
        <p ref={headingRef} className="text-lg text-gray-700">
          Heyy! I am
          <span className="font-semibold text-xl text-blue-600"> Dhruti</span>
        </p>

        <div className="mb-5 font-bold text-gray-900 text-left">
          <span className="text-blue-600 text-5xl md:text-6xl">Web </span>
          <span className="mt-3 text-5xl md:text-6xl leading-tight">
            Designer <br /> & Developer
          </span>
        </div>

        <p
          ref={textRef}
          className="text-gray-700 text-left text-base md:text-lg leading-relaxed"
        >
          I'm a web designer and developer based in India, turning ideas into
          beautiful, user-friendly websites. My goal is to create digital
          experiences that are not just functional, but also unforgettable.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
        >
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            <button className="border border-blue-600 text-blue-600 rounded px-6 py-2 font-medium hover:bg-blue-600 hover:text-white transition shadow">
              Get In Touch
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-50}>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded font-medium hover:bg-blue-600 hover:text-white transition shadow">
              Browse Projects
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div
          ref={iconsRef}
          className="flex justify-center md:justify-start gap-5 mt-6 text-2xl text-gray-700"
        >
          <a
            href="https://github.com/KanthariaDhruti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition transform hover:scale-110"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition transform hover:scale-110"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition transform hover:scale-110"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <img
        ref={imgRef}
        src="/dhrutiImg.jpg"
        alt="Dhruti Kantharia"
        className="w-60 h-60 mt-5 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg border-4 border-white hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );
}

export default Home;
