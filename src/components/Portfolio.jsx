import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import SmartImage from "./SmartImage";
import SEO from "./SEO";
import Footer from "./Footer";
import { ArrowUpRight } from "./Icon";
import { projectsData } from "../data/projectsData";
import {
  gsap,
  EASE,
  reveal,
  drawRule,
  revealLines,
  fontsReady,
  prefersReducedMotion,
} from "../lib/motion";

function Portfolio() {
  const pageRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      let revert = () => {};
      fontsReady().then(() => {
        revert = revealLines(headingRef.current, { delay: 0.1, stagger: 0.08 });
      });

      reveal("[data-page-eyebrow]", { trigger: pageRef.current, delay: 0.05, scope: pageRef.current });
      reveal("[data-page-lead]", { delay: 0.4, trigger: pageRef.current, scope: pageRef.current });
      drawRule("[data-rule]", { scope: pageRef.current });

      gsap.utils.toArray("[data-tile]").forEach((tile) => {
        const trigger = { trigger: tile, start: "top 85%", once: true };

        gsap.fromTo(
          tile.querySelector("[data-mask]"),
          { yPercent: 0 },
          { yPercent: -101, duration: 1.3, ease: EASE, scrollTrigger: trigger },
        );
        gsap.fromTo(
          tile.querySelector("[data-tile-image]"),
          { scale: 1.12 },
          { scale: 1, duration: 1.6, ease: EASE, scrollTrigger: trigger },
        );
        gsap.fromTo(
          tile.querySelectorAll("[data-tile-caption] > *"),
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.07,
            delay: 0.18,
            ease: EASE,
            scrollTrigger: trigger,
          },
        );
      });

      return () => revert();
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="min-h-screen">
      <SEO
        title="Selected Work"
        description="Branding, editorial layout and interface design projects by Dhruti Kantharia."
        url="/portfolio"
      />

      <header className="px-6 pt-36 pb-4 md:px-10 md:pt-44 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <span data-page-eyebrow className="eyebrow">
            {projectsData.length} projects — 2025 / 2026
          </span>
          <h1
            ref={headingRef}
              data-split
            className="display mt-5 text-[14vw] leading-[0.95] sm:text-[10vw] lg:text-[6.5vw]"
          >
            Selected work
          </h1>
          <p
            data-page-lead
            className="mt-8 max-w-lg text-[1.0625rem] leading-[1.8] text-ink-soft"
          >
            Identity systems, editorial layouts and product collateral. Each one
            starts as a question about what the work is meant to say, and ends
            as something a team can actually use.
          </p>
          <div data-rule className="rule mt-14" />
        </div>
      </header>

      <section className="px-6 pb-28 md:px-10 md:pb-36 lg:px-16">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-10 gap-y-20 pt-16 md:grid-cols-2 md:gap-y-28">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              data-tile
              /* Every second tile drops half a step, so the grid reads as a
                 spread rather than a row of equal boxes. */
              className={index % 2 === 1 ? "md:pt-20" : ""}
            >
              <Link
                to={`/portfolio/${project.id}`}
                className="group block no-underline"
              >
                <div className="frame relative aspect-[4/3] w-full">
                  <SmartImage
                    data-tile-image
                    src={project.thumbnail}
                    sizes="(min-width: 768px) 48vw, 100vw"
                    alt={project.title}
                    width="1000"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <span
                    data-mask
                    className="absolute inset-0 z-10 block bg-paper"
                  />
                </div>

                <div data-tile-caption className="pt-6">
                  <span className="eyebrow">{project.category}</span>
                  <h2 className="display mt-3 flex items-baseline gap-3 text-[7vw] leading-tight text-ink sm:text-[4vw] lg:text-[2.4vw]">
                    {project.title}
                    <ArrowUpRight size={20} className="arrow text-muted" />
                  </h2>
                  {project.subtitle && (
                    <p className="mt-2 text-[0.9375rem] text-muted">
                      {project.subtitle}
                    </p>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;
