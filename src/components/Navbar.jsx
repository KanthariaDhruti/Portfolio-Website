import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function Navbar() {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(linksRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.3,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full sticky top-0 bg-blue-50 shadow-sm z-50"
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        {/* Logo */}
        <div className="flex-shrink-0 text-2xl font-bold tracking-wide text-gray-700 hover:text-blue-600 transition">
          Dhruti Kantharia
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => (linksRef.current[i] = el)}
              className="relative text-black hover:text-blue-500 transition-colors duration-300 text-md group whitespace-nowrap"
              style={{ textDecoration: "none" }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center bg-blue-50 pb-3">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-black hover:text-blue-500 transition-colors duration-300 text-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;