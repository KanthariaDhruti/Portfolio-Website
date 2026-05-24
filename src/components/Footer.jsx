import React from "react";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12 px-6 text-center text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo / Brand Name */}
        <div className="flex flex-col items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-extrabold tracking-tight text-white hover:text-cyan-400 transition-colors duration-300 select-none cursor-pointer no-underline flex items-center gap-2 mb-1"
          >
            <span className="bg-gradient-to-r from-white to-navy-300 bg-clip-text text-transparent">
              Dhruti
            </span>
            <span className="text-cyan-400 font-medium">Kantharia</span>
          </Link>
          <p className="text-sm text-slate-500 font-medium">
            Web Developer • UI/UX Designer • B.Tech IT Student
          </p>
        </div>

        {/* Mini quick-links menu */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest font-semibold text-slate-500 pt-2 pb-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-white transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-white transition duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-white transition duration-300 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-white transition duration-300 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-white transition duration-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-white transition duration-300 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-white transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons inside Footer */}
        <div className="flex items-center gap-6 text-lg text-slate-500 pt-2 border-t border-white/5 w-full max-w-[250px] justify-center">
          <a
            href="https://github.com/KanthariaDhruti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors duration-300"
            title="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        {/* Copyright notice */}
        <div className="pt-4 text-xs text-slate-600 font-medium">
          <p>© {currentYear} Dhruti Kantharia. All rights reserved.</p>
          <p className="mt-1">Designed & built with Tailwind CSS & GSAP</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
