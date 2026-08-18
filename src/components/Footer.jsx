import React from "react";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#C49A6C] font-outfit border-t border-navy-300/40 py-12 px-6 text-center text-pearl">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo / Brand Name */}
        <div className="flex flex-col items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-extrabold tracking-tight text-navy-900 hover:text-cyan-650 transition-colors duration-300 select-none cursor-pointer no-underline flex items-center gap-2 mb-1"
          >
            <img src="/monogram-white.png" alt="" className="h-35 mb-5" />
          </Link>
          <p className="mt-2  font-medium">
            Web Designer • UI/UX Designer • B.Tech IT • Freelance Graphic
            Designer
          </p>
        </div>

        {/* Mini quick-links menu */}
        <div className="flex flex-wrap font-playwrite justify-center gap-6 text-xs uppercase tracking-widest font-semibold text-navy-700 pt-2 pb-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-navy-900 transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-navy-900 transition duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-navy-900 transition duration-300 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-navy-900 transition duration-300 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-navy-900 transition duration-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-navy-900 transition duration-300 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-navy-900 transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons inside Footer */}
        <div className="flex items-center gap-6 text-lg text-navy-700 pt-2 border-t border-navy-300/40 w-full max-w-[250px] justify-center">
          <a
            href="https://github.com/KanthariaDhruti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy-900 transition-colors duration-300"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-650 transition-colors duration-300"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-655 transition-colors duration-300"
            title="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        {/* Copyright notice */}
        <div className="pt-4  text-navy-850 font-medium">
          <p>© {currentYear} Dhruti Kantharia. All rights reserved.</p>
          <p className=" mt-1">Designed & built with Tailwind CSS & GSAP</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
