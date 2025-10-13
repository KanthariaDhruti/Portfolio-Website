import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "/src/App.css";

function Home() {
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(imgRef.current, {
      y: -15,          // float up by 10px
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,      // loop infinitely
      yoyo: true,      // reverse back smoothly
    });
  }, []);

  return (
    <div
      id="home"
      className="hero flex flex-col-reverse md:flex-row items-center justify-around max-h-screen h-100 px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Left Content */}
      <div className="text-center md:text-left space-y-4">
        <p className="text-lg text-gray-700">
          Heyy! I am
          <span className="font-semibold text-xl text-blue-600"> Dhruti</span>
        </p>

        <div className="mb-5 md:text-5xl font-bold text-gray-900 text-left">
          <span className="text-blue-600 text-6xl">Web </span>
          <span className="mt-3 text-6xl leading-tight">
            Developer <br /> & Designer
          </span>
        </div>

        <p className="text-gray-700 text-base text-left md:text-lg leading-relaxed">
          I’m a web developer based in India, turning ideas into beautiful,{" "}
          <br /> user-friendly websites. My goal is to create digital
          experiences <br /> that are not just functional, but also
          unforgettable.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap group justify-center md:justify-start gap-4 mt-8">
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              section.scrollIntoView({ behavior: "smooth" });
            }}          
            style={{ textDecoration: "none" }}
            className="border border-blue-600 text-blue-600 rounded px-6 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition shadow"
          >
            Get In Touch
          </button>
          <button
            onClick={() => {
              const section = document.getElementById("projects");
              section.scrollIntoView({ behavior: "smooth" });
            }}            
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded rounded-lg font-medium hover:bg-blue-600 hover:text-white transition shadow"
          >
            Browse Projects
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 mt-6 text-2xl text-gray-700">
          <a
            href="https://github.com/KanthariaDhruti"
            target="_blank"
            className="hover:text-black transition transform hover:scale-110"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
            target="_blank"
            className="hover:text-blue-700 transition transform hover:scale-110"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
            target="_blank"
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
