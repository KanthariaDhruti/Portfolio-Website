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

  useGSAP(
    () => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      // Text section animation
      gsap.fromTo(
        textSectionRef.current,
        {
          opacity: 0,
          x: -60,
        },
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

      // Cards stagger animation - using fromTo for explicit values
      const cards = cardsRef.current?.querySelectorAll('.abt-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
          },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power1.in",
          }
        );
      }
    },
    { scope: aboutRef }
  );

  return (
    <div
      ref={aboutRef}
      id="about"
      className="about bg-white py-20 px-6 md:px-16 lg:px-32 text-center overflow-hidden"
    >
      <h1
        ref={headingRef}
        className="text-4xl font-extrabold text-gray-900 mb-4"
      >
        About Me
      </h1>
      <p
        ref={subtitleRef}
        className="text-gray-600 max-w-2xl mx-auto text-lg mb-12"
      >
        Get to know more about my journey, passion, and aspirations in web
        development
      </p>

      <div className="about-flex flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Text Section (Animated) */}
        <div
          ref={textSectionRef}
          className="about-flex1 lg:w-1/2 text-left space-y-4"
        >
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

        {/* Right Cards Section (Animated) */}
        <div className="about-flex2 lg:w-1/2">
          <div
            ref={cardsRef}
            className="abt-cards grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {abtCard.map((card, index) => (
              <div
                key={index}
                className="abt-card bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer"
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