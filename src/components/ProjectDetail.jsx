import React, { useEffect, useRef } from "react";
import SmartImage from "./SmartImage";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SEO from "./SEO";

gsap.registerPlugin(ScrollTrigger);

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  // Find current project
  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIndex];

  // Scroll to top on load/change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useGSAP(
    () => {
      if (!project) return;

      // Hero animations
      gsap.fromTo(
        ".hero-title-anim",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      );
      gsap.fromTo(
        ".hero-subtitle-anim",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power4.out" },
      );

      // Section reveal animations
      const sections = gsap.utils.toArray(".reveal-section");
      sections.forEach((sec) => {
        gsap.from(sec, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: pageRef, dependencies: [id] },
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-almond text-ocean select-none flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-syne text-4xl font-black mb-4">
          CASE STUDY NOT FOUND
        </h2>
        <p className="text-ocean/60 max-w-sm mb-8">
          The project you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/portfolio"
          className="bg-ocean text-pearl font-bold px-8 py-3.5 rounded-full hover:shadow-lg transition-all duration-300 no-underline text-xs"
        >
          BACK TO PORTFOLIO
        </Link>
      </div>
    );
  }

  // Get previous and next projects
  const prevProject =
    projectsData[
      projectIndex === 0 ? projectsData.length - 1 : projectIndex - 1
    ];
  const nextProject =
    projectsData[
      projectIndex === projectsData.length - 1 ? 0 : projectIndex + 1
    ];

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-almond font-outfit select-none text-ocean studio-noise-bg  relative overflow-x-hidden pt-12 pb-24 selection:bg-pearl selection:text-ocean"
    >
      <SEO
        title={project.title}
        description={project.description || project.aboutBrandText}
        image={project.thumbnail}
        url={`/portfolio/${project.id}`}
      />
      {/* Studio Header Nav */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end items-center py-6 border-b border-ocean/5 relative z-20">
        <Link
          to="/portfolio"
          className="text-[10px] font-mono tracking-wider uppercase border border-ocean/25 px-4 py-2 rounded-full hover:bg-ocean hover:text-pearl hover:border-ocean transition-all duration-300 no-underline text-ocean"
        >
          ← Portfolio Index
        </Link>
      </header>

      {/* Hero Exhibition Banner (Full height/width header banner overlay) */}
      <section className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden flex items-end justify-center py-16 px-6">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={project.heroImage}
            sizes="100vw"
            alt={`${project.title} Hero Showcase`}
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pearl/50 via-transparent to-ocean/30"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="hero-subtitle-anim inline-block text-xs font-mono text-pearl bg-ocean/80 px-3.5 py-1.5 rounded-full border border-white/20 uppercase tracking-widest mb-4">
            {project.category}
          </span>
          <h1 className="hero-title-anim text-4xl md:text-7xl font-black uppercase text-white font-playwrite leading-relaxed drop-shadow-md">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Section 1: About the Brand */}
      <section className="reveal-section max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Sketchbook / Illustration on Left */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-white p-4 rounded-3xl border border-ocean/10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
            {project.aboutBrandImg?.toLowerCase().endsWith(".webm") ||
            project.aboutBrandImg?.toLowerCase().endsWith(".mp4") ? (
              <video
                src={project.aboutBrandImg}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`About ${project.title}`}
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm"
              >
                Your browser does not support video playback.
              </video>
            ) : (
              <SmartImage
                src={project.aboutBrandImg}
                sizes="(min-width: 1024px) 40vw, 100vw"
                alt={`About ${project.title}`}
                width="400"
                height="300"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm transition-transform duration-500 hover:scale-103"
              />
            )}
          </div>
        </div>
        {/* Brand Text on Right */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-ocean"></span>
            <span className="font-mono text-xs text-ocean font-bold uppercase tracking-widest">
              [ THE BRIEF ]
            </span>
          </div>
          <h2 className="font-syne text-3xl font-playwrite md:text-3xl font-semibold  uppercase leading-16 text-ocean">
            About {project.title}
          </h2>
          <p className="text-ocean/80 leading-relaxed text-lg text-justify">
            {project.aboutBrandText}
          </p>
        </div>
      </section>

      {/* Section 2: Twin Mockup Images Side-by-Side */}
      <section className="reveal-section max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.designsImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl border border-ocean/10 shadow-lg aspect-[16/10] bg-pearl"
            >
              <SmartImage
                src={img}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={`${project.title} design showcase ${idx + 1}`}
                width="600"
                height="375"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: About the Designs */}
      <section className="reveal-section max-w-7xl mx-auto px-6 md:px-12 py-20 text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brown"></span>
          <span className="font-mono text-xs text-brown font-bold uppercase tracking-widest">
            [ DESIGN CONCEPT ]
          </span>
        </div>
        <h2 className="font-syne text-2xl font-playwrite md:text-4xl font-semibold uppercase text-ocean leading-relaxed max-w-3xl mx-auto">
          About the designs
        </h2>
        <p className="text-ocean/70 text-lg max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
          {project.designsText}
        </p>
      </section>

      {/* Section 4: Scrollable Showcase Carousel */}
      <section className="reveal-section w-full py-16 overflow-hidden border-y border-ocean/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <span className="font-mono text-[10px] text-ocean/50 font-bold uppercase tracking-widest block mb-1">
            [ SHOWCASE GALLERY ]
          </span>
          <h3 className="text-xl font-bold text-ocean">Visual Artifacts</h3>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 max-w-7xl mx-auto scrollbar-thin">
          
{project.carouselImages.map((img, idx) => (
  <div
    key={idx}
    className="flex-shrink-0 w-120 aspect-[4/3] bg-white rounded-2xl border border-ocean/10 overflow-hidden shadow-md group"
  >
    {img.toLowerCase().endsWith(".webm") ||
    img.toLowerCase().endsWith(".mp4") ? (
      <video
        src={img}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${project.title} gallery video ${idx + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
        Your browser does not support video playback.
      </video>
    ) : (
      <SmartImage
        src={img}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt={`${project.title} gallery artifact ${idx + 1}`}
        width="480"
        height="360"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    )}
  </div>
))}

        </div>
      </section>

      {/* Section 5: Kind Words Testimonial */}
      {project.testimonial?.quote &&
        project.testimonial.quote.trim() !== "" && (
          <section className="reveal-section font-outfit max-w-5xl mx-auto px-6 py-24 text-center">
            <div className="w-12 h-12 rounded-full bg-ocean text-white flex items-center justify-center mx-auto mb-6 text-xl">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <h3 className=" text-3xl text-ocean leading-snug mb-6 max-w-5xl mx-auto">
              "{project.testimonial.quote}"
            </h3>
            {project.testimonial.author && (
              <span className="font-playwrite text-xs uppercase tracking-wider text-ocean/80">
                — {project.testimonial.author}
              </span>
            )}
          </section>
        )}

      {/* Section 6: Logo Grid and Icons */}
      {/* <section className="reveal-section max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-ocean/10">
        <div className="lg:col-span-5 grid grid-cols-3 gap-6">
          {project.brandIcons.map((iconClass, idx) => (
            <div
              key={idx}
              className="aspect-square bg-white border border-ocean/10 rounded-2xl flex items-center justify-center text-3xl text-[#5D768B] hover:text-[#c2593f] hover:border-[#c2593f]/30 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <i className={iconClass}></i>
            </div>
          ))}
        </div>
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-syne text-3xl font-black uppercase text-ocean">
            Visual Tokens
          </h3>
          <p className="text-ocean/70 text-xs md:text-sm leading-relaxed font-sans">
            Every icon, vector glyph, and graphic component represents a
            deliberate brick in the cohesive brand architecture. The grid to the
            left illustrates variations designed to remain clear and functional
            at any scale, from favicon codes to billboard sizing.
          </p>
        </div>
      </section> */}

      {/* Section 7: Bottom Action CTA */}
      <section className="reveal-section w-full py-20 px-6 text-center border-t border-ocean/10 bg-brown/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light bg-dots-light opacity-20 pointer-events-none"></div>
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <span className="font-mono text-sm text-pearl/90 leading-10 font-bold uppercase tracking-widest">
            COLLABORATE WITH DHRUTI
          </span>
          <h2 className="text-3xl md:text-5xl font-playwrite mt-5 font-black text-pearl uppercase leading-none">
            Like what you see?
          </h2>
          <p className="text-pearl leading-relaxed">
            Let's work together to bring your brand to life with premium visual
            design grids and high-fidelity interfaces.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-brown text-pearl font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg font-playwrite hover:scale-102 cursor-pointer no-underline text-xs"
          >
            <span>LET'S WORK TOGETHER</span>
            <i className="fa-solid fa-paper-plane text-[15px]"></i>
          </Link>
        </div>
      </section>

      {/* Section 8: Large Full Width Banner Image */}
      <section className="reveal-section w-full h-[300px] md:h-[450px] overflow-hidden relative">
        <SmartImage
          src={project.fullBannerImg}
          sizes="100vw"
          alt={`${project.title} Full Banner`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Section 9: Case Study Prev/Next Navigation Controls */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex justify-between items-center border-t border-ocean/10 mt-12 select-none">
        <Link
          to={`/portfolio/${prevProject.id}`}
          className="group flex flex-col text-left no-underline text-ocean"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase text-ocean/50 group-hover:text-[#5D768B] transition-colors">
            ← Previous Case Study
          </span>
          <span className="font-syne font-bold text-base md:text-lg group-hover:text-[#5D768B] transition-colors">
            {prevProject.title}
          </span>
        </Link>

        <Link
          to={`/portfolio/${nextProject.id}`}
          className="group flex flex-col text-right no-underline text-ocean"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase text-ocean/50 group-hover:text-[#5D768B] transition-colors">
            Next Case Study →
          </span>
          <span className="font-outfit font-bold text-base md:text-lg group-hover:text-[#5D768B] transition-colors">
            {nextProject.title}
          </span>
        </Link>
      </section>
    </div>
  );
}

export default ProjectDetail;
