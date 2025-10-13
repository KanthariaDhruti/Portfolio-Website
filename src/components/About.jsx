import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  const abtCard = [
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate only the left text
      gsap.from(".about-flex1", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: "power3.out",
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={aboutRef}
      id="about"
      className="about bg-white py-20 px-6 md:px-16 lg:px-32 text-center"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
        Get to know more about my journey, passion, and aspirations in web
        development
      </p>

      <div className="about-flex flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Text Section (Animated) */}
        <div className="about-flex1 lg:w-1/2 text-left space-y-4">
          <h2 className="text-2xl font-bold text-blue-700">
            Hi, I'm Dhruti Kantharia!
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            I'm an aspiring web developer currently pursuing my B.Tech in IT
            Engineering at Gandhinagar University. With a passion for creating
            beautiful and functional websites, I'm constantly learning and
            improving my skills in web development and UI/UX design.
            <br />
            <br />
            Beyond coding, I'm a creative individual who loves expressing myself
            through singing, dancing, and various forms of art. My background as
            an ex-NCC cadet has instilled in me discipline, leadership
            qualities, and the ability to work effectively in teams.
            <br />
            <br />I recently completed a comprehensive UI/UX course to enhance
            my design skills and understanding of user experience principles.
            I'm actively seeking internship opportunities to apply my knowledge
            and contribute to meaningful projects while continuing to grow as a
            developer.
          </p>
        </div>

        {/* Right Cards Section (Static) */}
        <div className="about-flex2 lg:w-1/2">
          <div className="abt-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
            {abtCard.map((card, index) => (
              <div
                key={index}
                className="abt-card bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center"
              >
                <i className={`${card.icon} text-3xl text-blue-600 mb-3`}></i>
                <h4 className="text-lg font-semibold text-gray-800">
                  {card.head}
                </h4>
                <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
