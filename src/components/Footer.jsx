import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(
        null,
        "",
        targetId === "home" ? "/" : `/#${targetId}`,
      );
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Experience", target: "experience" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "Services", target: "services" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <footer className="bg-[#C49A6C] select-none font-outfit border-t border-navy-300/40 py-8 sm:py-10 px-5 sm:px-8 lg:px-12 text-pearl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="cursor-pointer no-underline flex items-center"
          >
            <img
              src="/logos/dhruti/monogram-white.webp"
              alt="Dhruti Kantharia monogram logo"
              width="140"
              height="140"
              loading="lazy"
              decoding="async"
              className="h-24 sm:h-28 md:h-32 lg:h-35 mb-3 sm:mb-4 object-contain"
            />
          </a>

          <p className="mt-1 text-sm sm:text-base leading-relaxed">
            Dhruti Kantharia <br />
            Designing with passion
          </p>
        </div>

        {/* Navigation + Socials */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-3 sm:gap-x-5 text-[10px] sm:text-xs uppercase tracking-widest font-semibold max-w-xl">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`/#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="hover:text-navy-900 transition duration-300 cursor-pointer no-underline"
              >
                {link.name}
              </a>
            ))}
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
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
              target="_blank"
              rel="noopener noreferrer"
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
        <p>© {currentYear} Dhruti Kantharia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;