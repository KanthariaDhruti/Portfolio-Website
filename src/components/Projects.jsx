import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import SmartImage from "./SmartImage";
import { ArrowUpRight } from "./Icon";
import { projectsData } from "../data/projectsData";
import {
  gsap,
  EASE,
  reveal,
  drawRule,
  drift,
  prefersReducedMotion,
} from "../lib/motion";

function Projects() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      reveal("[data-section-head] > *", { trigger: sectionRef.current, scope: sectionRef.current });
      drawRule("[data-rule]", { scope: sectionRef.current });

      /* The image leads and the caption lags, so a row opens up a little in
         depth as it passes rather than sliding by as one plate. */
      gsap.utils.toArray("[data-project]", sectionRef.current).forEach((row) => {
        drift(row.querySelector("[data-drift-image]"), {
          distance: 64,
          trigger: row,
        });
        drift(row.querySelector("[data-drift-caption]"), {
          distance: -28,
          trigger: row,
        });
      });

      /* Each entry reveals on its own trigger: the mask lifts off the image
         while the caption rises. Both use the same curve, so a row reads as
         one gesture rather than three animations. */
      gsap.utils.toArray("[data-project]").forEach((item) => {
        const trigger = { trigger: item, start: "top 82%", once: true };

        gsap.fromTo(
          item.querySelector("[data-mask]"),
          { yPercent: 0 },
          { yPercent: -101, duration: 1.4, ease: EASE, scrollTrigger: trigger },
        );

        gsap.fromTo(
          item.querySelector("[data-project-image]"),
          { scale: 1.14 },
          { scale: 1, duration: 1.7, ease: EASE, scrollTrigger: trigger },
        );

        gsap.fromTo(
          item.querySelectorAll("[data-project-caption] > *"),
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.08,
            delay: 0.2,
            ease: EASE,
            scrollTrigger: trigger,
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div data-section-head className="flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow">01 — Selected work</span>
            <h2 className="display mt-4 text-[10vw] sm:text-[7vw] lg:text-[4vw]">
              Recent projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group hidden items-center gap-2 whitespace-nowrap pb-3 text-[0.9375rem] text-ink no-underline md:flex"
          >
            <span className="link-wipe link-retract">All work</span>
            <ArrowUpRight size={16} className="arrow" />
          </Link>
        </div>

        <div data-rule className="rule mt-10" />

        <div className="mt-16 flex flex-col gap-24 md:mt-20 md:gap-32">
          {projectsData.map((project, index) => {
            const flipped = index % 2 === 1;

            return (
              <article key={project.id} data-project>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group grid grid-cols-1 items-center gap-8 no-underline lg:grid-cols-12 lg:gap-16"
                >
                  <div
                    data-drift-image
                    className={`lg:col-span-7 ${
                      flipped ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="frame relative aspect-[16/11] w-full">
                      <SmartImage
                        data-project-image
                        src={project.thumbnail}
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        alt={project.title}
                        width="1200"
                        height="825"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                      <span
                        data-mask
                        className="absolute inset-0 z-10 block bg-paper"
                      />
                    </div>
                  </div>

                  <div
                    data-project-caption
                    data-drift-caption
                    className={`lg:col-span-5 ${
                      flipped ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="eyebrow">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </span>
                    <h3 className="display mt-4 text-[8vw] leading-[1.02] text-ink sm:text-[5vw] lg:text-[2.6vw]">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.75] text-muted">
                      {project.description}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 text-[0.9375rem] text-ink">
                      <span className="link-wipe">View case study</span>
                      <ArrowUpRight size={16} className="arrow" />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <Link
          to="/portfolio"
          className="group mt-16 flex items-center gap-2 text-[0.9375rem] text-ink no-underline md:hidden"
        >
          <span className="link-wipe link-retract">All work</span>
          <ArrowUpRight size={16} className="arrow" />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
