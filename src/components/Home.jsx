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
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

      // Get icon links
      const iconLinks = iconsRef.current?.querySelectorAll('a');

      tl.from(heroRef.current, {
        opacity: 0,
      })
        .from(
          imgRef.current,
          {
            opacity: 0,
            y: 40,
          },
          "-=0.5"
        )
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 40,
          },
          "-=0.5"
        )
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 30,
          },
          "-=0.4"
        )
        .from(
          buttonsRef.current.children,
          {
            opacity: 0,
            y: 20,
            stagger: 0.2,
          },
          "-=0.3"
        );
        
      // Animate icons separately with explicit final values
      if (iconLinks && iconLinks.length > 0) {
        tl.fromTo(
          iconLinks,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.5"
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <div
      id="home"
      ref={heroRef}
      className="hero flex flex-col-reverse md:flex-row items-center justify-around max-h-screen h-100 px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Left Content */}
      <div className="text-center md:text-left space-y-4">
        <p ref={headingRef} className="text-lg text-gray-700">
          Heyy! I am
          <span className="font-semibold text-xl text-blue-600"> Dhruti</span>
        </p>

        <div className="mb-5 md:text-5xl font-bold text-gray-900 text-left">
          <span className="text-blue-600 text-6xl">Web </span>
          <span className="mt-3 text-6xl leading-tight">
            Designer <br /> & Developer
          </span>
        </div>

        <p
          ref={textRef}
          className="text-gray-700 text-base text-left md:text-lg leading-relaxed"
        >
          I'm a web designer and developer based in India, turning ideas into
          beautiful, user-friendly <br /> websites. My goal is to create digital
          experiences that are not just functional, but also unforgettable.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-wrap group justify-center md:justify-start gap-4 mt-8"
        >
          <Link to={"contact"} smooth={true} duration={500} offset={-50}>
            <button className="border border-blue-600 text-blue-600 rounded px-6 py-2 font-medium hover:bg-blue-600 hover:text-white transition shadow">
              Get In Touch
            </button>
          </Link>
          <Link to={"projects"} smooth={true} duration={500} offset={-50}>
            {" "}
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
      <div className="mb-10 md:mb-0">
        <img
          ref={imgRef}
          src="/dhrutiImg.jpg"
          alt="Dhruti Kantharia"
          className="w-56 h-56 md:w-72 md:h-72 lg:w-110 lg:h-110 object-cover rounded-full shadow-lg border-4 border-white hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
    </div>
  );
}

export default Home;