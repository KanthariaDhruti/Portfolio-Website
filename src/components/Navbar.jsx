import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const navRef = useRef(null);
  const linksRef = useRef([]);

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
      // Animate Navbar itself
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate nav links one by one
      gsap.from(linksRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.3,
      });
    }, navRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full sticky top-0 flex md:flex-row justify-between items-center bg-blue-50 px-6 py-2 shadow-sm z-50"
    >
      {/* Logo / Name */}
      <div className="text-2xl font-bold tracking-wide mt-2 mb-3 md:mb-0 text-gray-700 hover:text-blue-600 transition">
        Dhruti Kantharia
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
        {links.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            ref={(el) => (linksRef.current[i] = el)}
            className="relative text-black hover:text-blue-500 transition-colors duration-300 text-md group"
            style={{ textDecoration: "none" }}
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
