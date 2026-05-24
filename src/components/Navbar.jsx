import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  // Track scroll position to alter navbar height & opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Entrance Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        logoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
      );

      const navLinks =
        linksContainerRef.current?.querySelectorAll(".nav-link-anim");
      if (navLinks && navLinks.length > 0) {
        tl.fromTo(
          navLinks,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.5",
        );
      }
    },
    { scope: navRef },
  );

  // Smooth scroll helper for hash links
  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-navy-950/80 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(3,7,18,0.3)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link
          to="/"
          ref={logoRef}
          className="text-xl md:text-2xl font-extrabold tracking-tight text-white hover:text-cyan-400 transition-colors duration-300 select-none no-underline flex items-center gap-2"
        >
          <span className="bg-gradient-to-r from-white to-navy-300 bg-clip-text text-transparent">
            Dhruti
          </span>
          <span className="text-cyan-400 font-medium">Kantharia</span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
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
        <div
          ref={linksContainerRef}
          className="hidden md:flex items-center space-x-8"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="nav-link-anim relative text-slate-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 py-1 group no-underline"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-panel transition-all duration-500 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100"
            : "opacity-0 -translate-y-4 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-4 bg-navy-950/95 border-b border-white/10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="w-full text-center py-2 text-slate-300 hover:text-cyan-400 font-semibold transition-colors duration-300 no-underline"
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
