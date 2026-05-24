import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_74wjdmh",
        "template_df44l8m",
        e.target,
        "dS7tWE4Ud1wj1gB0j",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        },
      );

    e.target.reset();
  };

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

      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -40 },
        {
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40 },
        {
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-gradient-to-b from-white to-navy-100 py-24 px-6 md:px-16 lg:px-32 overflow-hidden border-b border-navy-100"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight"
          >
            Let’s Connect
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p
            ref={subtitleRef}
            className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg mt-4 leading-relaxed font-normal"
          >
            Have a project in mind or interested in collaboration? I'd love to
            hear from you!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Side - Contact Info */}
          <div
            ref={leftRef}
            className="bg-white border border-dashed border-slate-350 shadow-sm rounded-2xl p-8 flex-1 flex flex-col justify-between relative mt-6 lg:mt-0"
          >
            <div>
              <h4 className="text-2xl font-bold text-navy-900 mb-4">
                Get In Touch
              </h4>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
                I'm actively seeking internship opportunities in web development
                and UI/UX design. Whether you have a project proposal,
                collaboration idea, or just want to connect, I'm always excited
                to meet new people and explore new opportunities.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 border border-navy-200/40 bg-navy-50/50 rounded-2xl p-4 hover:border-cyan-500/25 hover:shadow-sm transition-all duration-300">
                <div className="text-blue-600 text-xl w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-800 hover:text-blue-600 font-semibold no-underline text-sm break-all"
                  >
                    Email me here
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 border border-navy-200/40 bg-navy-50/50 rounded-2xl p-4 hover:border-cyan-500/25 hover:shadow-sm transition-all duration-300">
                <div className="text-blue-600 text-xl w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div>
                  <p className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-800 hover:text-blue-600 font-semibold no-underline text-sm"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 border border-navy-200/40 bg-navy-50/50 rounded-2xl p-4 hover:border-cyan-500/25 hover:shadow-sm transition-all duration-300">
                <div className="text-blue-600 text-xl w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div>
                  <p className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/KanthariaDhruti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-800 hover:text-blue-600 font-semibold no-underline text-sm"
                  >
                    View my Repositories
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 border border-navy-200/40 bg-navy-50/50 rounded-2xl p-4 hover:border-cyan-500/25 hover:shadow-sm transition-all duration-300">
                <div className="text-blue-600 text-xl w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="font-semibold text-xs uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="text-navy-800 font-semibold text-sm">
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            ref={rightRef}
            className="bg-white border-2 border-blue-500 shadow-md p-8 flex-1 flex flex-col justify-between relative mt-6 lg:mt-0"
          >
            {/* Figma style selected frame tab indicator */}
            <div className="absolute -top-6 left-0 bg-blue-500 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-t select-none uppercase tracking-wider">
              Frame: Contact_Form [w: 480 / h: 520]
            </div>

            {/* Figma resize handles/nodes */}
            <div className="absolute w-2.5 h-2.5 bg-white border-2 border-blue-500 -top-[5px] -left-[5px] z-30 shadow-sm"></div>
            <div className="absolute w-2.5 h-2.5 bg-white border-2 border-blue-500 -top-[5px] -right-[5px] z-30 shadow-sm"></div>
            <div className="absolute w-2.5 h-2.5 bg-white border-2 border-blue-500 -bottom-[5px] -left-[5px] z-30 shadow-sm"></div>
            <div className="absolute w-2.5 h-2.5 bg-white border-2 border-blue-500 -bottom-[5px] -right-[5px] z-30 shadow-sm"></div>
            <form
              onSubmit={sendEmail}
              className="space-y-5 flex flex-col h-full justify-between"
            >
              <div>
                <h4 className="text-2xl font-bold text-navy-900 mb-2">
                  Send a Message
                </h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    id="contact-form-name"
                    name="from_name"
                    type="text"
                    placeholder="Your Name"
                    aria-label="Your Name"
                    className="w-full border border-navy-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-navy-50/20 text-navy-950 placeholder-slate-400 transition-all duration-300"
                    required
                  />
                  <input
                    id="contact-form-email"
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    className="w-full border border-navy-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-navy-50/20 text-navy-950 placeholder-slate-400 transition-all duration-300"
                    required
                  />
                </div>

                <input
                  id="contact-form-subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  className="w-full border border-navy-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-navy-50/20 text-navy-950 placeholder-slate-400 transition-all duration-300"
                  required
                />

                <textarea
                  id="contact-form-message"
                  name="message"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  rows="5"
                  className="w-full border border-navy-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-navy-50/20 text-navy-950 placeholder-slate-400 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                id="contact-form-submit"
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.01] cursor-pointer text-sm mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
