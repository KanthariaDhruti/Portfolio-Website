import React from "react";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#C49A6C] font-outfit border-t border-navy-300/40 py-8 sm:py-10 px-5 sm:px-8 lg:px-12 text-pearl">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
        
        {/* Logo / Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer no-underline flex items-center"
          >
            <img
              src="/monogram-white.png"
              alt="Dhruti Kantharia monogram logo"
              className="h-24 sm:h-28 md:h-32 lg:h-35 mb-3 sm:mb-4 object-contain"
            />
          </Link>

          <p className="mt-1 text-sm sm:text-base leading-relaxed">
            Dhruti Kantharia <br />
            Designing with passion
          </p>
        </div>

        {/* Navigation + Socials */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          
          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-3 sm:gap-x-5 text-[10px] sm:text-xs uppercase tracking-widest font-semibold max-w-xl">
            
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
          </nav>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-end gap-6 text-lg mt-5">
            
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
              className="hover:text-navy-900 transition-colors duration-300"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="mailto:your-email@example.com"
              className="hover:text-navy-900 transition-colors duration-300"
              title="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-pearl/20 mt-7 pt-5 text-center font-medium text-xs sm:text-sm">
        <p>
          © {currentYear} Dhruti Kantharia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;