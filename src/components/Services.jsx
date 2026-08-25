import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "./Icon";
import { gsap, reveal, drawRule, drift, prefersReducedMotion } from "../lib/motion";
import { useScrollTo } from "../lib/scroll";

const services = [
  {
    title: "Brand Identity",
    summary:
      "Marks, type systems and the rules that keep them consistent once the files leave my hands.",
    items: ["Logo & wordmark", "Visual guidelines", "Print & social collateral", "Art direction"],
  },
  {
    title: "Interface Design",
    summary:
      "Screens designed against a real grid, prototyped so the behaviour is agreed before anyone builds it.",
    items: ["Wireframes & flows", "High-fidelity prototypes", "Component systems", "Responsive layout"],
  },
  {
    title: "Web Development",
    summary:
      "Front-ends built the way they were drawn — accessible, quick, and maintainable after handoff.",
    items: ["React interfaces", "API integration", "Performance work", "CMS-ready builds"],
  },
];

function Services() {
  const sectionRef = useRef(null);
  const scrollTo = useScrollTo();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      reveal("[data-section-head] > *", { trigger: sectionRef.current, scope: sectionRef.current });
      drawRule("[data-rule]", { scope: sectionRef.current });

      /* Rows arrive one at a time as they cross, not as a batch on section
         entry — the reader's eye is already travelling down the list. */
      reveal("[data-service]", { stagger: 0.12, trigger: "[data-services]", scope: sectionRef.current });
      reveal("[data-services-cta] > *", { stagger: 0.08, trigger: "[data-services-cta]", scope: sectionRef.current });

      /* Each row's heading and its deliverables list pull apart slightly.
         The row itself is a reveal target, so the drift goes on its children. */
      gsap.utils.toArray("[data-service]", sectionRef.current).forEach((row) => {
        drift(row.querySelector("[data-drift-title]"), { distance: 26, trigger: row });
        drift(row.querySelector("[data-drift-list]"), { distance: -18, trigger: row });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div data-section-head>
          <span className="eyebrow">04 — Services</span>
          <h2 className="display mt-4 text-[10vw] sm:text-[7vw] lg:text-[4vw]">
            What I take on
          </h2>
        </div>

        <div data-rule className="rule mt-10" />

        <div data-services>
          {services.map((service, index) => (
            <article
              key={service.title}
              data-service
              className="grid grid-cols-1 gap-6 border-b border-line py-12 sm:grid-cols-12 sm:gap-8 md:py-16"
            >
              <div className="eyebrow sm:col-span-2 sm:pt-3">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div data-drift-title className="sm:col-span-5">
                <h3 className="display text-[8vw] leading-tight sm:text-[3.4vw] lg:text-[2.2vw]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-[0.9375rem] leading-[1.75] text-muted">
                  {service.summary}
                </p>
              </div>

              <ul data-drift-list className="space-y-2 sm:col-span-5 sm:pt-2">
                {service.items.map((item) => (
                  <li key={item} className="text-[0.9375rem] text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div data-services-cta className="mt-14 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <p className="text-[1.0625rem] text-ink-soft">
            Something here sound like your project?
          </p>
          <button
            type="button"
            onClick={() => scrollTo("#contact", { offset: -60 })}
            className="group flex cursor-pointer items-center gap-2 bg-transparent p-0 text-[0.9375rem] text-ink"
          >
            <span className="link-wipe link-retract">Start a conversation</span>
            <ArrowUpRight size={16} className="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
