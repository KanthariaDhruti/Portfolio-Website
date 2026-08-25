import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { reveal, drawRule, drift, prefersReducedMotion } from "../lib/motion";

const roles = [
  {
    period: "Jun 2026 — Present",
    title: "Freelance Graphic Designer",
    org: "Independent",
    notes: [
      "Brand guidelines, vector asset libraries and marketing collateral for small studios and startups.",
      "Social creatives, layout grids and vector illustration in Illustrator and Figma.",
    ],
  },
  {
    period: "Jan 2026 — Jun 2026",
    title: "Graphic Design Intern",
    org: "Adrta Technologies",
    notes: [
      "Built corporate branding guidelines, vector assets and digital marketing material.",
      "Worked alongside the front-end team to keep visual layouts and UI implementation in agreement.",
    ],
  },
];

const capabilities = [
  { group: "Design", items: ["Brand Identity", "Editorial Layout", "Figma", "Illustrator", "InDesign"] },
  { group: "Interface", items: ["UI / UX", "Prototyping", "Responsive Design", "Webflow"] },
  { group: "Development", items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "SQL"] },
  { group: "Also", items: ["Python", "Java"] },
];

const certifications = [
  {
    title: "Complete Web Design: Figma to Webflow",
    date: "January 2025",
    note: "End-to-end interface design, structure and high-performance Webflow layouts.",
  },
  {
    title: "Full Stack Development — MERN",
    date: "November 2025",
    note: "MongoDB, Express, React and Node.js, completed at Apna College.",
  },
];

function Experience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      reveal("[data-section-head] > *", { trigger: sectionRef.current, scope: sectionRef.current });
      drawRule("[data-rule]", { scope: sectionRef.current });
      reveal("[data-role]", { stagger: 0.14, trigger: "[data-roles]", scope: sectionRef.current });
      reveal("[data-capability]", { stagger: 0.08, y: 10, trigger: "[data-capabilities]", scope: sectionRef.current });
      reveal("[data-cert]", { stagger: 0.1, y: 10, trigger: "[data-certs]", scope: sectionRef.current });

      /* Only the scrolling column moves — the capabilities panel is sticky. */
      drift("[data-roles]", { distance: 40, scope: sectionRef.current });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div data-section-head>
          <span className="eyebrow">03 — Practice</span>
          <h2 className="display mt-4 text-[10vw] sm:text-[7vw] lg:text-[4vw]">
            Where I've worked
          </h2>
        </div>

        <div data-rule className="rule mt-10" />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Roles */}
          <div data-roles className="lg:col-span-7">
            {roles.map((role) => (
              <article
                key={role.title}
                data-role
                className="grid grid-cols-1 gap-3 border-b border-line pb-10 pt-2 first:pt-0 sm:grid-cols-12 sm:gap-6 [&:not(:first-child)]:pt-10"
              >
                <div className="eyebrow sm:col-span-4 sm:pt-2">
                  {role.period}
                </div>
                <div className="sm:col-span-8">
                  <h3 className="display text-[6vw] leading-tight sm:text-[3vw] lg:text-[1.75vw]">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{role.org}</p>
                  <ul className="mt-5 space-y-3">
                    {role.notes.map((note) => (
                      <li
                        key={note}
                        className="text-[0.9375rem] leading-[1.75] text-muted"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Capabilities + certifications */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div data-capabilities>
                <span className="eyebrow">Capabilities</span>
                <div className="mt-6 space-y-5">
                  {capabilities.map((capability) => (
                    <div
                      key={capability.group}
                      data-capability
                      className="grid grid-cols-1 gap-1 sm:grid-cols-12 sm:gap-4"
                    >
                      <span className="text-sm text-ink sm:col-span-3">
                        {capability.group}
                      </span>
                      <span className="text-sm leading-relaxed text-muted sm:col-span-9">
                        {capability.items.join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div data-certs className="mt-14">
                <span className="eyebrow">Certifications</span>
                <div className="mt-6 space-y-6">
                  {certifications.map((cert) => (
                    <div
                      key={cert.title}
                      data-cert
                      className="border-t border-line pt-5"
                    >
                      <h4 className="text-[0.9375rem] text-ink">
                        {cert.title}
                      </h4>
                      <span className="eyebrow mt-1 block">{cert.date}</span>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {cert.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
