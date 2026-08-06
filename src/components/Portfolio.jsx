import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);

  const [selectedBrochure, setSelectedBrochure] = useState(0);
  const [activeLinkedinPost, setActiveLinkedinPost] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    document.title = "Visual Design & UI Portfolio | Dhruti Kantharia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Step into the creative studio of Dhruti Kantharia. Explore interactive editorial brochure spreads, graphic design LinkedIn carousels, and responsive UI/UX webpages.",
      );
    }
  }, []);

  // Keyboard controls for LinkedIn Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeLinkedinPost) return;
      const hasImages = activeLinkedinPost.slides.some((s) => s.img);
      const totalSlides = hasImages
        ? activeLinkedinPost.slides.filter((s) => s.img).length
        : activeLinkedinPost.slides.length;

      if (e.key === "ArrowLeft") {
        setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
      } else if (e.key === "Escape") {
        setActiveLinkedinPost(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLinkedinPost]);

  const brochures = [
    {
      title: "Fashion Magazine Layout",
      subtitle: "Editorial / Graphic Layout",
      desc: "An avant-garde editorial magazine concept. Adapts asymmetrical grids, vertical typography guides, and large font titles to display lifestyle imagery.",
      src: "/magazine.png",
    },
    {
      title: "LIMS (Laboratory Management System)",
      subtitle: "Company Product Brochure",
      desc: "A product brochure designed to introduce and communicate the key features and capabilities of a Laboratory Information Management System (LIMS). The goal was to transform complex product information into a clear, structured, and visually engaging format while maintaining a professional, industry-focused aesthetic.",
      src: "/LIMS.jpg",
    },
    {
      title: "Clinical Experiment Product",
      subtitle: "Company Product Brochure",
      desc: "A product brochure designed to present a Clinical Trial Management Software and its role in streamlining trial planning, tracking, and collaboration. The design focuses on simplifying complex product information into a clear, professional, and visually engaging communication piece for the life sciences industry.",
      src: "/Vista.jpg",
    },
  ];

  const linkedinPosts = [
    {
      title: "Company Products",
      desc: "LinkedIn carousel post designed for Adrta Technologies Pvt. Ltd. which shows the interconnected products used together as a mini suite.(The original text hass been changed to avoid any confidentiality issues)",
      category: "Carousel",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7485328465924132865/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7uKDUB4KL34vMi4wCjvXUt3-13rfhcX2E",
      slides: [
        {
          img: "/caousel1_1.png",
        },
        {
          img: "/caousel1_2.png",
        },
        {
          img: "/caousel1_3.png",
        },
        {
          img: "/caousel1_4.png",
        },
        {
          img: "/caousel1_5.png",
        },
      ],
    },
    {
      title: "Document Processing",
      desc: "This post shows how the system can work fasterr with the help of right tools (Also made for Adrta Technologies Pvt. Ltd. and the original text hass been changed to avoid any confidentiality issues).",
      category: "Carousel",
      link: "https://www.linkedin.com/posts/adrta_zentixs-sign-ugcPost-7445089165362315266-Cqm8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7uKDUB4KL34vMi4wCjvXUt3-13rfhcX2E",
      slides: [
        {
          img: "/c2-1.png",
        },
        {
          img: "/c2-2.png",
        },
        {
          img: "/c2-3.png",
        },
      ],
    },
    {
      title: "Product suite",
      desc: "Information of the products and how they are connected to each other. (Also made for Adrta Technologies Pvt. Ltd. and the original text hass been changed to avoid any confidentiality issues)",
      category: "Carousel",
      link: "https://www.linkedin.com/posts/adrta_zentixs-equipment-management-software-ugcPost-7477936599343833089-YlK2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7uKDUB4KL34vMi4wCjvXUt3-13rfhcX2E",
      slides: [
        {
          img: "/c3-1.png",
        },
        {
          img: "/c3-2.png",
        },
        {
          img: "/c3-3.png",
        },
        {
          img: "/c3-4.png",
        },
        {
          img: "/c3-5.png",
        },
      ],
    },
    {
      title: "Testimonial",
      desc: "Review from real clients of the company after the Product use. (Also made for Adrta Technologies Pvt. Ltd. and the original text hass been changed to avoid any confidentiality issues)",
      category: "Single post",
      link: "https://www.linkedin.com/posts/adrta_zentixstalent-adrtatechnologies-etms-activity-7449316703563472897-oXRf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7uKDUB4KL34vMi4wCjvXUt3-13rfhcX2E",
      slides: [
        {
          img: "/p3.jpg",
        },
      ],
    },
    {
      title: "Company Product",
      desc: "Product description in the post. (Also made for Adrta Technologies Pvt. Ltd. and the original text hass been changed to avoid any confidentiality issues)",
      category: "Single post",
      link: "https://www.linkedin.com/posts/adrta_zentixssign-digitalsignature-adrtatchnologies-activity-7442886296014028800-udf_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7uKDUB4KL34vMi4wCjvXUt3-13rfhcX2E",
      slides: [
        {
          img: "/p2.jpg",
        },
      ],
    },
    {
      title: "Company Product",
      desc: "Product description in the post. (Also made for Adrta Technologies Pvt. Ltd. and the original text hass been changed to avoid any confidentiality issues)",
      category: "Single post",
      link: "https://www.linkedin.com/posts/adrta_a-compliant-digital-signature-is-more-than-activity-7458002673309499392-c7Kk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7uKDUB4KL34vMi4wCjvXUt3-13rfhcX2E",
      slides: [
        {
          img: "/p1.jpg",
        },
      ],
    },
  ];

  const webpages = [
    {
      title: "ChatBot UI/UX Landing",
      subtitle: "Figma to Webflow Prototyping",
      img: "/chat.png",
      desc: "A custom chatbot branding layout and lead generation page, designed in Figma and coded to Webflow.",
      link: "https://chatbot-bc1e03.webflow.io/",
    },
    {
      title: "Team App Workspace",
      subtitle: "Collaborative SaaS Layout",
      img: "/team.png",
      desc: "A futuristic web dashboard mockup optimized for collaboration and real-time project metrics.",
      link: "https://dhrutis-team-app.webflow.io/",
    },
    {
      title: "Fintech Appointment Flow",
      subtitle: "Interactive Booking Experience",
      img: "/fintech.png",
      desc: "A micro-frontend appointment workflow concept built for clean, frictionless finance consultations.",
      link: "https://www.figma.com/proto/GVIcgnWj17n4IayKNM01Pw/Untitled?page-id=0%3A1&node-id=50-2435&viewport=2182%2C-707%2C0.39&t=Bf9v609J5InSDtL4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40%3A2906",
    },
    {
      title: "Wanderlust – Explore Stays",
      subtitle: "MERN Stack Design Integration",
      img: "/Wanderlust.png",
      desc: "A complete lodging catalog platform showcasing list elements, maps, and high-fidelity search components.",
      link: "https://github.com/KanthariaDhruti/WanderLust",
    },
  ];

  useGSAP(
    () => {
      // Intro animations
      gsap.fromTo(
        ".hero-part-1",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
      );
      gsap.fromTo(
        ".hero-part-2",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power4.out" },
      );
      gsap.fromTo(
        ".hero-part-3",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power4.out" },
      );
      gsap.fromTo(
        ".hero-tag",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.6, ease: "power3.out" },
      );

      // Scroll animations for sections
      const sections = gsap.utils.toArray(".studio-section");
      sections.forEach((sec) => {
        gsap.from(sec.querySelectorAll(".sec-header"), {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: pageRef },
  );

  const openLinkedinPost = (post) => {
    setActiveLinkedinPost(post);
    setCurrentSlideIndex(0);
  };
  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#faf8f5] text-[#1c1c1c] studio-noise-bg font-sans relative overflow-x-hidden pt-12 pb-24 selection:bg-accent-lime/30 selection:text-[#1c1c1c]"
    >
      {/* Studio Bespoke Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-6 border-b border-[#1c1c1c]/10 relative z-20">
        <Link
          to="/"
          className="font-syne font-extrabold tracking-tight text-[#1c1c1c] hover:text-[#8b9c00] transition-all duration-300 no-underline text-lg md:text-xl flex items-center gap-1.5"
        >
          <span>DHRUTI K.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-lime"></span>
        </Link>
        <nav className="hidden md:flex gap-8 text-xs font-mono tracking-wider uppercase text-[#1c1c1c]/60">
          <a
            href="#brochures"
            className="hover:text-[#8b9c00] transition-colors no-underline"
          >
            [01] Brochures
          </a>
          <a
            href="#linkedin"
            className="hover:text-[#8b9c00] transition-colors no-underline"
          >
            [02] LinkedIn
          </a>
          <a
            href="#webpages"
            className="hover:text-[#8b9c00] transition-colors no-underline"
          >
            [03] Webpages
          </a>
        </nav>
        <Link
          to="/"
          className="text-[10px] font-mono tracking-wider uppercase border border-[#1c1c1c]/25 px-4 py-2 rounded-full hover:bg-accent-lime hover:text-carbon-black hover:border-accent-lime transition-all duration-300 no-underline text-[#1c1c1c]"
        >
          ← Back to Studio
        </Link>
      </header>

      {/* Hero Exhibition */}
      <section
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-28 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
      >
        <div className="lg:col-span-7 space-y-6">
          <span className="hero-tag inline-block text-xs font-mono text-carbon-black bg-accent-lime px-3 py-1.5 rounded border border-[#1c1c1c]/15">
            Dhruti Kantharia // Visual Sandbox
          </span>
          <div className="space-y-2">
            <h1 className="hero-part-1 font-syne text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-[#1c1c1c]">
              VISUAL
            </h1>
            <h1 className="hero-part-2 font-syne text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(28,28,28,0.7)]">
              DESIGN
            </h1>
            <h2 className="hero-part-3 font-serif-editorial text-4xl md:text-6xl lg:text-7xl italic font-normal text-[#c2593f] leading-tight pl-2">
              & Digital Experiences.
            </h2>
          </div>
          <p className="hero-desc-anim text-[#1c1c1c]/70 text-sm md:text-base leading-relaxed max-w-xl text-justify font-sans">
            A premium playground showcasing high-end visual communications,
            magazine layout hierarchies, interactive slide systems, and
            responsive web aesthetics. Merging fine-art rules with
            production-grade frontends.
          </p>
        </div>

        {/* Poster Stack Widget (Right Column) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
          <div className="relative w-64 md:w-72 aspect-[3/4] group cursor-pointer">
            {/* Poster 1 (Back, Rotates Left) */}
            <div className="poster-card-1 absolute inset-0 bg-[#cc0000] text-[#ebeae5] p-5 flex flex-col justify-between aspect-[3/4] rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.15)] transform -rotate-6 translate-x-[-15px] translate-y-[-10px] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-12 group-hover:-translate-x-12 group-hover:-translate-y-8 select-none">
              <div className="flex justify-between font-mono text-[9px] text-[#ebeae5]/60 border-b border-[#ebeae5]/20 pb-1.5">
                <span>SWISS STYLE // 1957</span>
                <span>GRID 01</span>
              </div>
              <div className="my-auto py-4 text-center">
                <span className="font-syne font-black text-7xl leading-none text-[#ebeae5]">
                  Aa
                </span>
              </div>
              <div className="font-syne font-bold text-[10px] tracking-tight uppercase leading-tight">
                FORM FOLLOWS FUNCTION.
              </div>
            </div>

            {/* Poster 2 (Middle, Rotates Right) */}
            <div className="poster-card-2 absolute inset-0 bg-[#1e2a3f] text-studio-cream border border-white/15 p-5 flex flex-col justify-between aspect-[3/4] rounded-2xl shadow-[0_15px_42px_rgba(0,0,0,0.18)] transform rotate-3 translate-x-[10px] translate-y-[5px] transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 group-hover:translate-x-6 group-hover:-translate-y-4 select-none">
              <div className="flex justify-between font-mono text-[9px] text-white/40 border-b border-white/10 pb-1.5">
                <span>TYPO LABS</span>
                <span>GRID 02</span>
              </div>
              <div className="space-y-1.5 my-auto">
                <div className="w-8 h-1 bg-[#d2ff00]"></div>
                <div className="h-0.5 w-16 bg-white/20"></div>
                <div className="h-0.5 w-12 bg-white/20"></div>
                <div className="h-0.5 w-20 bg-white/20"></div>
              </div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-white/50">
                DHRUTI KANTHARIA // 2026
              </div>
            </div>

            {/* Poster 3 (Front, Straight) */}
            <div className="poster-card-3 absolute inset-0 bg-accent-lime text-carbon-black p-5 flex flex-col justify-between aspect-[3/4] rounded-2xl shadow-[0_20px_48px_rgba(0,0,0,0.2)] transform rotate-0 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:translate-x-14 group-hover:translate-y-4 select-none">
              <div className="flex justify-between font-mono text-[9px] text-carbon-black/60 border-b border-carbon-black/20 pb-1.5">
                <span>DIGITAL SYSTEM</span>
                <span>GRID 03</span>
              </div>
              <div>
                <span className="font-syne font-black text-3xl uppercase tracking-tighter leading-none block">
                  CREATIVE
                </span>
                <span className="font-serif-editorial italic text-4xl block leading-none mt-1">
                  Playground
                </span>
              </div>
              <div className="flex justify-between items-end border-t border-carbon-black/20 pt-2 font-mono text-[8px] uppercase">
                <span>DESIGN DEPT.</span>
                <span>A+ GRADE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Ticker (Marquee) */}
      <section className="w-full bg-accent-lime py-4 border-y border-[#1c1c1c]/10 overflow-hidden relative z-10 my-10 select-none">
        <div
          ref={marqueeRef}
          className="animate-marquee text-carbon-black font-syne font-black text-sm md:text-lg uppercase tracking-wider flex items-center whitespace-nowrap gap-8"
        >
          <span>* BROCHURES & EDITORIAL BOOKLETS</span>
          <span>* LINKEDIN DOC CAROUSELS</span>
          <span>* BRANDING</span>
          <span>* RESPONSIVE BROWSER WIREFRAMES</span>
          <span>* SOCIAL MEDIA</span>
          <span>* MOCKUPS</span>

          {/* Duplicate to create infinite seamless loop */}
          <span>* BROCHURES & EDITORIAL BOOKLETS</span>
          <span>* LINKEDIN DOC CAROUSELS</span>
          <span>* BRANDING</span>
          <span>* RESPONSIVE BROWSER WIREFRAMES</span>
          <span>* SOCIAL MEDIA</span>
          <span>* MOCKUPS</span>
        </div>
      </section>

      {/* Section 01: Brochures */}
      <section
        id="brochures"
        className="studio-section max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 border-b border-[#1c1c1c]/10"
      >
        <div className="sec-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-[#8b9c00] font-bold uppercase tracking-widest block mb-2">
              [01] PRINT & EDITORIAL LAYOUTS
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-[#1c1c1c] tracking-tight uppercase">
              Brochure Designs
            </h2>
          </div>
          <p className="text-[#1c1c1c]/60 text-xs md:text-sm max-w-sm leading-relaxed">
            Multi-page document layouts prioritizing typographic hierarchy,
            structural grid systems, and visual narratives.
          </p>
        </div>

        {/* Asymmetric Brochure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left selectors list */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {brochures.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedBrochure(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col space-y-2 ${
                  selectedBrochure === index
                    ? "bg-white border-[#1c1c1c] text-[#1c1c1c] shadow-[0_8px_24px_rgba(28,28,28,0.06)]"
                    : "bg-transparent border-[#1c1c1c]/10 text-[#1c1c1c]/60 hover:border-[#1c1c1c]/30 hover:text-[#1c1c1c]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`font-mono text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-sm ${selectedBrochure === index ? "text-carbon-black bg-accent-lime" : "text-[#1c1c1c]/70 bg-[#1c1c1c]/5"}`}
                  >
                    0{index + 1} // {item.subtitle}
                  </span>
                  {selectedBrochure === index && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-lime"></span>
                  )}
                </div>
                <h3 className="font-syne font-bold text-lg md:text-xl text-[#1c1c1c]">
                  {item.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${selectedBrochure === index ? "text-[#1c1c1c]/80" : "text-[#1c1c1c]/50"}`}
                >
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Right Preview spread */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="studio-glass-panel-light rounded-2xl p-6 md:p-10 flex items-center justify-center min-h-[420px] transition-all duration-500 relative">
              {/* Cover/Grid Graphic pattern */}
              <div className="absolute inset-0 bg-grid-light bg-dots-light opacity-30 pointer-events-none rounded-2xl"></div>

              {/* Show selected layout */}
              {brochures[selectedBrochure] && (
                <div className="w-full max-w-lg flex items-center justify-center p-4 bg-white rounded-xl border border-[#1c1c1c]/10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden min-h-[350px]">
                  <img
                    src={brochures[selectedBrochure].src}
                    alt={brochures[selectedBrochure].title || "Brochure Image"}
                    className="max-h-[340px] object-contain rounded shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: LinkedIn Posts */}
      <section
        id="linkedin"
        className="studio-section max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 border-b border-[#1c1c1c]/10"
      >
        <div className="sec-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-[#8b9c00] font-bold uppercase tracking-widest block mb-2">
              [02] SOCIAL BRANDING & GRAPHICS
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-[#1c1c1c] tracking-tight uppercase">
              Social Media Posts
            </h2>
          </div>
          <p className="text-[#1c1c1c]/60 text-xs md:text-sm max-w-sm leading-relaxed">
            Highly engaging content designs combining visual guidelines and UX
            tips. Click a card to view and flip through the multi-page slide
            documents.
          </p>
        </div>

        {/* Carousel Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {linkedinPosts.map((post, idx) => (
            <div
              key={post.id || idx}
              onClick={() => openLinkedinPost(post)}
              className="studio-glass-panel-light rounded-2xl p-6 flex flex-col justify-between min-h-[250px] cursor-pointer hover:translate-y-[-6px] relative group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#1c1c1c]/50 border-b border-[#1c1c1c]/10 pb-3">
                  <span>{post.category}</span>
                  <span>
                    {post.slides.some((s) => s.img)
                      ? post.slides.filter((s) => s.img).length
                      : post.slides.length}{" "}
                    SLIDES
                  </span>
                </div>
                <h3 className="font-syne font-bold text-xl text-[#1c1c1c] group-hover:text-[#8b9c00] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-[#1c1c1c]/70 leading-relaxed font-sans">
                  {post.desc}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-[#1c1c1c]/10 pt-4 text-xs font-mono">
                {post.link ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#8b9c00] hover:text-[#1c1c1c] font-bold transition-colors duration-200"
                    title="Click here to see original post"
                    alt="Click here to see original post"
                  >
                    [ CLICK HERE TO SEE ORIGINAL POST ]
                  </a>
                ) : (
                  <span className="text-[#1c1c1c]/60 group-hover:text-[#1c1c1c] transition-colors">
                    [ VIEW DOCUMENT ]
                  </span>
                )}
                <i className="fa-solid fa-arrow-right transform group-hover:translate-x-2 transition-transform text-[#1c1c1c]/60 group-hover:text-[#1c1c1c]"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03: Webpages */}
      <section
        id="webpages"
        className="studio-section max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10"
      >
        <div className="sec-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-[#8b9c00] font-bold uppercase tracking-widest block mb-2">
              [03] DIGITAL INTERFACES & CODE
            </span>
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold text-[#1c1c1c] tracking-tight uppercase">
              Web & UI
            </h2>
          </div>
          <p className="text-[#1c1c1c]/60 text-xs md:text-sm max-w-sm leading-relaxed">
            Responsive digital experiences spanning UI layouts and MERN
            application designs. Hover over mockups to scroll through the full
            pages.
          </p>
        </div>

        {/* Browser Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {webpages.map((project, index) => (
            <div key={index} className="space-y-4 flex flex-col">
              {/* macOS Styled Browser Frame */}
              <div className="shadow-xl rounded-xl overflow-hidden flex flex-col">
                {/* Browser Top bar */}
                <div className="bg-[#e1ddd5] rounded-t-xl px-4 py-2.5 border-b border-[#1c1c1c]/10 flex items-center gap-1.5 select-none relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                  <div className="flex-grow text-center text-[9px] font-mono text-[#1c1c1c]/50 truncate max-w-xs mx-auto bg-[#faf8f5] py-0.5 rounded border border-[#1c1c1c]/10 px-2">
                    {project.link.replace("https://", "").replace("www.", "")}
                  </div>
                </div>
                {/* Browser Body with Scroll Hover */}
                <div className="browser-scroll-container bg-[#f4f1ea] aspect-video w-full rounded-b-xl overflow-hidden relative border-x border-b border-[#1c1c1c]/15">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="browser-scroll-image object-cover object-top w-full absolute top-0"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="px-2 flex justify-between items-start gap-4">
                <div className="space-y-1 flex-grow">
                  <span className="font-mono text-[9px] font-bold tracking-wider text-[#1c1c1c]/80 bg-accent-lime/25 px-2 py-0.5 rounded-sm uppercase inline-block">
                    {project.subtitle}
                  </span>
                  <h3 className="font-syne font-bold text-lg text-[#1c1c1c]">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#1c1c1c]/60 leading-relaxed font-sans">
                    {project.desc}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#1c1c1c]/15 flex items-center justify-center text-[#1c1c1c]/70 hover:text-[#8b9c00] hover:border-[#8b9c00] hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Studio Bottom CTA */}
      <section className="w-full py-24 px-6 text-center border-t border-[#1c1c1c]/10 bg-[#e6e2d8] relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-grid-light bg-dots-light opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 relative z-10">
          <span className="font-mono text-xs text-[#8b9c00] font-bold uppercase tracking-widest">
            COLLABORATION DESK
          </span>
          <h2 className="font-syne text-4xl md:text-6xl font-black text-[#1c1c1c] uppercase tracking-tight leading-none">
            HAVE A PROJECT <br />
            <span className="font-serif-editorial italic font-normal text-[#c2593f] text-5xl md:text-7xl block mt-2">
              In Mind?
            </span>
          </h2>
          <p className="text-[#1c1c1c]/70 text-xs md:text-sm max-w-md mx-auto leading-relaxed font-sans">
            Ready to deploy professional layout principles, high-conversion
            visual design grids, or responsive web platforms? Let's construct it
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 border border-[#8b9c00] bg-[#8b9c00] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(139,156,0,0.25)] hover:scale-[1.02] cursor-pointer no-underline text-xs"
            >
              <span>SEND BRIEF</span>
              <i className="fa-solid fa-paper-plane text-[10px]"></i>
            </Link>
            <a
              href="https://github.com/KanthariaDhruti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#1c1c1c]/20 text-[#1c1c1c] font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#1c1c1c]/5 hover:scale-[1.02] cursor-pointer no-underline text-xs"
            >
              <i className="fa-brands fa-github text-sm"></i>
              <span>VIEW REPOS</span>
            </a>
          </div>
        </div>
      </section>

      {/* LinkedIn Post slide-document Viewer Modal */}
      {activeLinkedinPost &&
        (() => {
          const hasImages = activeLinkedinPost.slides.some((s) => s.img);
          const slidesToRender = hasImages
            ? activeLinkedinPost.slides.filter((s) => s.img)
            : activeLinkedinPost.slides;
          const currentSlide = slidesToRender[currentSlideIndex] || {};

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f4f1ea]/95 backdrop-blur-md p-4">
              <div className="relative w-full max-w-2xl bg-white border border-[#1c1c1c]/10 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[420px]">
                {/* Top Meta info */}
                <div className="flex items-center justify-between border-b border-[#1c1c1c]/10 pb-4 mb-4 select-none">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-lime text-carbon-black font-extrabold flex items-center justify-center text-[10px]">
                      DK
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-[#1c1c1c] leading-none">
                        Dhruti Kantharia
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9px] text-[#1c1c1c]/60">
                          Graphic Designer & UI Developer
                        </span>
                        {activeLinkedinPost.link && (
                          <>
                            <span className="text-[#1c1c1c]/20 text-[9px]">
                              •
                            </span>
                            <a
                              href={activeLinkedinPost.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[9px] text-[#8b9c00] hover:underline"
                              title="Click here to see original post"
                              alt="Click here to see original post"
                            >
                              Original Post ↗
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveLinkedinPost(null)}
                    className="text-[#1c1c1c]/60 hover:text-[#1c1c1c] transition-colors p-2 hover:bg-[#1c1c1c]/5 rounded-full cursor-pointer"
                  >
                    <i className="fa-solid fa-xmark text-base"></i>
                  </button>
                </div>

                {/* Slide Content Frame */}
                <div className="flex-grow flex flex-col justify-center py-8 px-2 relative">
                  {/* Background grid for graphic feel */}
                  <div className="absolute inset-0 bg-grid-light bg-dots-light opacity-30 pointer-events-none"></div>

                  {/* Slide Layout based on type/image */}
                  {currentSlide.img ? (
                    <div className="w-full flex items-center justify-center p-2 relative z-10">
                      <img
                        src={currentSlide.img}
                        alt={`Slide ${currentSlideIndex + 1}`}
                        className="max-h-[350px] object-contain rounded shadow-lg transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : currentSlide.type === "cover" ? (
                    <div className="space-y-5 text-center relative z-10">
                      <span className="text-[9px] font-mono text-[#8b9c00] tracking-widest uppercase bg-accent-lime/15 px-3 py-1 rounded-full border border-[#8b9c00]/20 inline-block font-bold">
                        {currentSlide.sub}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-syne font-black text-[#1c1c1c] uppercase tracking-tighter leading-tight max-w-lg mx-auto">
                        {currentSlide.title}
                      </h3>
                      <p className="text-[#1c1c1c]/70 max-w-md mx-auto text-xs leading-relaxed font-sans">
                        {currentSlide.content}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-w-lg mx-auto relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8b9c00]"></span>
                        <span className="text-[9px] font-mono text-[#8b9c00] uppercase tracking-wider font-bold">
                          {currentSlide.sub}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-syne font-extrabold text-[#1c1c1c] uppercase tracking-tight">
                        {currentSlide.title}
                      </h3>
                      <p className="text-[#1c1c1c]/80 text-xs md:text-sm leading-relaxed font-sans">
                        {currentSlide.content}
                      </p>
                    </div>
                  )}
                </div>

                {/* Slide Navigation footer */}
                <div className="border-t border-[#1c1c1c]/10 pt-4 mt-4 flex items-center justify-between text-xs text-[#1c1c1c]/60 select-none">
                  <div>
                    Slide{" "}
                    <span className="text-[#8b9c00] font-bold font-mono">
                      {currentSlideIndex + 1}
                    </span>{" "}
                    of {slidesToRender.length}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setCurrentSlideIndex((prev) => Math.max(0, prev - 1))
                      }
                      disabled={currentSlideIndex === 0}
                      className={`w-9 h-9 rounded-full border border-[#1c1c1c]/10 flex items-center justify-center transition ${
                        currentSlideIndex === 0
                          ? "opacity-20 cursor-not-allowed"
                          : "cursor-pointer hover:border-[#1c1c1c] hover:text-[#1c1c1c] hover:bg-[#1c1c1c]/5"
                      }`}
                    >
                      <i className="fa-solid fa-arrow-left text-xs"></i>
                    </button>
                    <button
                      onClick={() =>
                        setCurrentSlideIndex((prev) =>
                          Math.min(slidesToRender.length - 1, prev + 1),
                        )
                      }
                      disabled={currentSlideIndex === slidesToRender.length - 1}
                      className={`w-9 h-9 rounded-full border border-[#1c1c1c]/10 flex items-center justify-center transition ${
                        currentSlideIndex === slidesToRender.length - 1
                          ? "opacity-20 cursor-not-allowed"
                          : "cursor-pointer hover:border-[#1c1c1c] hover:text-[#1c1c1c] hover:bg-[#1c1c1c]/5"
                      }`}
                    >
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
}

export default Portfolio;
