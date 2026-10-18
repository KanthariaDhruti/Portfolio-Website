import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SEO from "./SEO";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────
const logofolioData = [
  {
    id: "dhruti-branding",
    brand: "Designed by Dhruti",
    logos: [
      {
        src: "/logos/dhruti/logo-color.webp",
        label: "Primary Logo",
        bg: "bg-pearl",
      },
      {
        src: "/logos/dhruti/icon-frame.webp",
        label: "Icon",
        bg: "bg-pearl",
      },
      {
        src: "/logos/dhruti/Vector.webp",
        label: "Monogram",
        bg: "bg-pearl",
      },
    ],
    caseStudyId: "dhruti branding",
  },
  {
    id: "granny-hobby",
    brand: "The Granny's Hobby",
    logos: [
      {
        src: "/logos/granny/primary-logo.webp",
        label: "Primary Logo",
        bg: "bg-pearl",
      },
      {
        src: "/logos/granny/Wordmark.webp",
        label: "Wordmark",
        bg: "bg-pearl",
      },
      {
        src: "/logos/granny/brandmark.webp",
        label: "Icon ",
        bg: "bg-pearl",
      },
    ],
    caseStudyId: "the granny's hobby",
  },
  {
    id: "cove",
    brand: "Cove",
    logos: [
      {
        src: "/logos/cove/primary-logo.webp",
        label: "Primary Logo",
        bg: "bg-pearl",
      },
      { src: "/logos/cove/wordmark.webp", label: "Wordmark", bg: "bg-pearl" },
      { src: "/logos/cove/icon.webp", label: " Icon", bg: "bg-almond" },
      {
        src: "/logos/cove/monogram.webp",
        label: "Monogram",
        bg: "bg-pearl",
      },
    ],
    caseStudyId: "cove",
  },
];

const marqueeItems = [
  "Brand Identity",
  "Logo Design",
  "Visual Systems",
  "Typography",
  "Color Theory",
  "Icon Design",
  "Monogram",
  "Wordmarks",
  "Style Guides",
  "Brand Strategy",
];

// ─── Component ────────────────────────────────────────────────────────────────
function Logofolio() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      // Hero entrance
      gsap.fromTo(
        ".lf-hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      );
      gsap.fromTo(
        ".lf-hero-sub",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.25, ease: "power4.out" },
      );

      // Brand section reveal
      const sections = gsap.utils.toArray(".lf-brand-section");
      sections.forEach((sec, i) => {
        gsap.from(sec, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            once: true,
          },
        });
      });

      // Logo card stagger inside each section
      const logoCards = gsap.utils.toArray(".lf-logo-card");
      logoCards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-almond select-none text-ocean studio-noise-bg font-outfit relative overflow-x-hidden pt-12"
    >
      <SEO
        title="Logofolio — Brand Identity Design"
        description="A curated collection of logo systems, visual marks, and brand identities designed by Dhruti Kantharia. Explore the Designed by Dhruti, Granny's Hobby, and Cove brand identities."
        url="/portfolio/logofolio"
      />

      {/* ── Studio Header ─────────────────────────────────────────────────── */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end items-center py-6 border-b border-ocean/10 relative z-20">
        <Link
          to="/portfolio"
          className="text-[10px] font-mono tracking-wider uppercase border border-ocean/25 px-4 py-2 rounded-full hover:bg-ocean hover:text-pearl hover:border-pearl transition-all duration-300 no-underline"
        >
          ← Back to Portfolio
        </Link>
      </header>

      {/* ── Hero Banner ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 text-center space-y-5">
        <span className="inline-block text-xs font-mono text-ocean/50 font-bold uppercase tracking-widest">
          LOGOFOLIO
        </span>
        <h1 className="lf-hero-title text-4xl md:text-6xl lg:text-7xl font-playwrite text-brown leading-tight max-w-4xl mx-auto">
          Marks built to last.
        </h1>
        <p className="lf-hero-sub mt-10 max-w-2xl text-xl font-outfit mx-auto leading-relaxed text-ocean/70">
          A curated collection of logo systems, visual marks, and brand
          identities — each crafted to communicate a distinct personality with
          precision and purpose.
        </p>
      </section>

      {/* ── Marquee Strip ─────────────────────────────────────────────────── */}
      <div className="w-full border-y border-ocean/10 py-4 overflow-hidden bg-ocean/[0.02] my-4">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-6 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-ocean/40 whitespace-nowrap"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-brown/60 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Brand Sections ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-32">
        {logofolioData.map((brand, brandIdx) => (
          <section
            // key={brand.id}
            className="lf-brand-section border-b border-ocean/10 pb-24 last:border-0 last:pb-0"
          >
            {/* Brand Header Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-5xl font-playwrite text-brown leading-tight">
                  {brand.brand}
                </h2>
              </div>

              {brand.caseStudyId && (
                <Link
                  to={`/portfolio/${brand.caseStudyId}`}
                  className="self-start md:self-auto inline-flex items-center gap-2 border border-ocean/30 text-ocean font-bold px-5 py-2 rounded-full hover:bg-ocean hover:text-pearl hover:border-ocean transition-all duration-300 no-underline text-[10px] uppercase tracking-wider shrink-0"
                >
                  View Case Study
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </Link>
              )}
            </div>

            {/* Two-column layout: Logo Grid + Info */}
            <div className="">
              {/* Logo Grid */}
              <div className="">
                <div
                  className={`grid gap-4 ${
                    brand.logos.length <= 3
                      ? "grid-cols-1 sm:grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-3"
                  }`}
                >
                  {brand.logos.map((logo, logoIdx) => (
                    <div
                      key={logoIdx}
                      className={`lf-logo-card group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-ocean/8 shadow-sm hover:shadow-md hover:border-ocean/20 transition-all duration-300 ${logo.bg}`}
                    >
                      <div className="flex items-center justify-center h-20 w-full">
                        <img
                          src={logo.src}
                          alt={`${brand.brand} ${logo.label}`}
                          loading="lazy"
                          decoding="async"
                          className="max-h-16 max-w-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-ocean/40 text-center">
                        {logo.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Collaboration CTA ─────────────────────────────────────────────── */}
      <section className="w-full bg-[url(/background.png)] text-pearl py-20 px-6 text-center select-none">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-10 h-10 rounded-full border border-pearl flex items-center justify-center mx-auto text-sm">
            <i className="fa-solid fa-lightbulb" />
          </div>
          <h2 className="text-3xl md:text-5xl font-playwrite font-black uppercase tracking-tight leading-none">
            Need a brand identity?
          </h2>
          <p className="text-pearl/80 max-w-lg mx-auto leading-relaxed">
            Whether you need a complete visual identity system or a single
            refined mark — let's craft something memorable together.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 border border-white bg-white text-ocean/80 font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer no-underline text-sm"
          >
            LET'S WORK TOGETHER
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Logofolio;
