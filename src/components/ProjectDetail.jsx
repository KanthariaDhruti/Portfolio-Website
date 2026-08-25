import { useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import SmartImage from "./SmartImage";
import SEO from "./SEO";
import Footer from "./Footer";
import { ArrowLeft, ArrowUpRight } from "./Icon";
import { projectsData } from "../data/projectsData";
import {
  gsap,
  EASE,
  reveal,
  drawRule,
  revealLines,
  parallax,
  fontsReady,
  prefersReducedMotion,
} from "../lib/motion";

/* A masked plate that lifts off any image as it arrives. The single move the
   whole site is built on, reused here so the case study feels like the
   same hand as the index. */
function Plate({ src, alt, sizes, ratio = "aspect-[16/10]", priority = false }) {
  return (
    <div data-plate className={`frame relative w-full ${ratio}`}>
      <SmartImage
        data-plate-image
        src={src}
        sizes={sizes}
        alt={alt}
        width="1400"
        height="875"
        loading={priority ? undefined : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="h-full w-full object-cover"
      />
      <span data-mask className="absolute inset-0 z-10 block bg-paper" />
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const heroImageRef = useRef(null);

  const index = projectsData.findIndex((item) => item.id === id);
  const project = projectsData[index];
  const next = projectsData[(index + 1) % projectsData.length];

  useGSAP(
    () => {
      if (!project || prefersReducedMotion()) return;

      let revert = () => {};
      fontsReady().then(() => {
        revert = revealLines(titleRef.current, { delay: 0.1, stagger: 0.08 });
      });

      reveal("[data-detail-eyebrow]", { trigger: pageRef.current, delay: 0.05, scope: pageRef.current });
      reveal("[data-detail-lead]", { delay: 0.45, trigger: pageRef.current, scope: pageRef.current });
      reveal("[data-meta]", { delay: 0.55, stagger: 0.08, y: 10, trigger: pageRef.current, scope: pageRef.current });
      drawRule("[data-rule]", { scope: pageRef.current });
      reveal("[data-copy] > *", { stagger: 0.1, trigger: "[data-copy]", scope: pageRef.current });

      /* Plates below the fold reveal on their own trigger; the hero plate
         plays immediately on load instead of waiting to be scrolled into. */
      gsap.utils.toArray("[data-plate]").forEach((plate, plateIndex) => {
        const isHero = plateIndex === 0;
        const trigger = isHero
          ? null
          : { trigger: plate, start: "top 88%", once: true };

        gsap.fromTo(
          plate.querySelector("[data-mask]"),
          { yPercent: 0 },
          {
            yPercent: -101,
            duration: 1.4,
            ease: EASE,
            delay: isHero ? 0.3 : 0,
            ...(trigger ? { scrollTrigger: trigger } : {}),
          },
        );
        gsap.fromTo(
          plate.querySelector("[data-plate-image]"),
          { scale: 1.12 },
          {
            scale: 1,
            duration: 1.7,
            ease: EASE,
            delay: isHero ? 0.3 : 0,
            ...(trigger ? { scrollTrigger: trigger } : {}),
          },
        );
      });

      parallax(heroImageRef.current, { amount: 6 });

      return () => revert();
    },
    { scope: pageRef, dependencies: [id] },
  );

  if (!project) return <Navigate to="/portfolio" replace />;

  const gallery = project.carouselImages || [];
  const designs = project.designsImages || [];

  return (
    <div ref={pageRef} className="min-h-screen">
      <SEO
        title={`${project.title} — ${project.category}`}
        description={project.description}
        url={`/portfolio/${project.id}`}
        image={project.thumbnail}
      />

      {/* Title block */}
      <header className="px-6 pt-32 md:px-10 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 text-sm text-muted no-underline transition-colors duration-300 hover:text-ink"
          >
            <ArrowLeft size={15} className="arrow" />
            <span className="link-wipe">All work</span>
          </Link>

          <span data-detail-eyebrow className="eyebrow mt-12 block">
            {project.category}
          </span>

          <h1
            ref={titleRef}
              data-split
            className="display mt-4 max-w-4xl text-[12vw] leading-[0.98] sm:text-[8vw] lg:text-[5.2vw]"
          >
            {project.title}
          </h1>

          <p
            data-detail-lead
            className="mt-8 max-w-xl text-[1.0625rem] leading-[1.8] text-ink-soft"
          >
            {project.description}
          </p>

          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-6 sm:grid-cols-4">
            <div data-meta>
              <dt className="eyebrow">Discipline</dt>
              <dd className="mt-2 text-[0.9375rem]">{project.category}</dd>
            </div>
            <div data-meta>
              <dt className="eyebrow">Scope</dt>
              <dd className="mt-2 text-[0.9375rem]">
                {project.subtitle || "Identity & layout"}
              </dd>
            </div>
            <div data-meta>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-2 text-[0.9375rem]">Design & art direction</dd>
            </div>
            <div data-meta>
              <dt className="eyebrow">Year</dt>
              <dd className="mt-2 text-[0.9375rem]">2026</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Hero plate */}
      <section className="mt-14 px-6 md:mt-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="frame relative aspect-[16/9] w-full overflow-hidden">
            <div
              ref={heroImageRef}
              data-plate
              className="absolute inset-x-0 top-[-6%] h-[112%]"
            >
              <SmartImage
                data-plate-image
                src={project.heroImage}
                sizes="100vw"
                alt={`${project.title} — cover`}
                width="1600"
                height="900"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span
                data-mask
                className="absolute inset-0 z-10 block bg-paper"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The brief */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div data-rule className="rule" />
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow">The brief</span>
            </div>
            <div data-copy className="lg:col-span-7">
              <p className="max-w-xl text-[1.25rem] leading-[1.7] text-ink">
                {project.aboutBrandText}
              </p>
            </div>
          </div>

          {project.aboutBrandImg && (
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-10 lg:col-start-3">
                <Plate
                  src={project.aboutBrandImg}
                  alt={`${project.title} — brand study`}
                  sizes="(min-width: 1024px) 80vw, 100vw"
                  ratio="aspect-[16/10]"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* The work */}
      <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div data-rule className="rule" />
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow">The work</span>
            </div>
            <div data-copy className="lg:col-span-7">
              <p className="max-w-xl text-[1.0625rem] leading-[1.8] text-ink-soft">
                {project.designsText}
              </p>
            </div>
          </div>

          {designs.length > 0 && (
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
              {designs.map((image, i) => (
                <Plate
                  key={image + i}
                  src={image}
                  alt={`${project.title} — design ${i + 1}`}
                  sizes="(min-width: 768px) 48vw, 100vw"
                  ratio="aspect-[4/3]"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
              {gallery.map((image, i) => (
                <div
                  key={image + i}
                  className={
                    i % 3 === 0
                      ? "md:col-span-7"
                      : i % 3 === 1
                        ? "md:col-span-5 md:pt-16"
                        : "md:col-span-12"
                  }
                >
                  <Plate
                    src={image}
                    alt={`${project.title} — artefact ${i + 1}`}
                    sizes="(min-width: 768px) 55vw, 100vw"
                    ratio={i % 3 === 2 ? "aspect-[16/9]" : "aspect-[4/3]"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing banner */}
      {project.fullBannerImg && (
        <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <Plate
              src={project.fullBannerImg}
              alt={`${project.title} — final application`}
              sizes="100vw"
              ratio="aspect-[21/9]"
            />
          </div>
        </section>
      )}

      {/* Next */}
      <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div data-rule className="rule" />
          <Link
            to={`/portfolio/${next.id}`}
            className="group flex flex-col gap-4 pt-10 no-underline sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="eyebrow">Next project</span>
              <h2 className="display mt-3 text-[10vw] leading-tight text-ink sm:text-[6vw] lg:text-[3.6vw]">
                {next.title}
              </h2>
            </div>
            <ArrowUpRight size={28} className="arrow text-muted" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
