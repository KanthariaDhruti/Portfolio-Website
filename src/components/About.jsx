import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  reveal,
  drawRule,
  drift,
  revealLines,
  fontsReady,
  prefersReducedMotion,
} from "../lib/motion";

const facts = [
  { label: "Education", value: "B.Tech Information Technology, Gandhinagar University" },
  { label: "Academic record", value: "8.14 CGPA" },
  { label: "Currently", value: "Graphic Design Intern, Adrta Technologies" },
  { label: "Background", value: "Ex-NCC Cadet — discipline, teamwork, leadership" },
  { label: "Off the clock", value: "Singing, dancing, fine arts, sport" },
];

function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      let revert = () => {};
      fontsReady().then(() => {
        revert = revealLines(headingRef.current, { scroll: true, stagger: 0.08 });
      });

      reveal("[data-about-eyebrow]", { trigger: sectionRef.current, scope: sectionRef.current });
      reveal("[data-about-copy] > p", { stagger: 0.12, trigger: "[data-about-copy]", scope: sectionRef.current });
      drawRule("[data-rule]", { scope: sectionRef.current });
      reveal("[data-fact]", { stagger: 0.08, y: 10, trigger: "[data-facts]", scope: sectionRef.current });

      /* The prose and the facts table drift apart by a few pixels; the sticky
         heading is left alone, since transforming it would break the stick. */
      drift("[data-about-copy]", { distance: 34, scope: sectionRef.current });
      drift("[data-facts]", { distance: -22, scope: sectionRef.current });

      return () => revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div data-rule className="rule" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span data-about-eyebrow className="eyebrow">
                02 — About
              </span>
              <h2
                ref={headingRef}
              data-split
                className="display mt-4 text-[10vw] sm:text-[7vw] lg:text-[3.6vw]"
              >
                A designer who
                <br />
                writes the code
                <br />
                as well.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              data-about-copy
              className="max-w-xl space-y-6 text-[1.0625rem] leading-[1.8] text-ink-soft"
            >
              <p>
                I design for small businesses, startups and individuals who need
                their work to look considered. I studied B.Tech IT at
                Gandhinagar University, and I've spent that time learning both
                halves of the same craft — how a layout should feel, and how it
                actually gets built.
              </p>
              <p>
                As a Graphic Design Intern at Adrta Technologies I work on brand
                messaging, layout systems and digital styling, alongside the
                front-end team. Sitting between those two rooms is the useful
                part: I know what a grid promises, and I know what a browser
                will do with it.
              </p>
              <p>
                Away from the desk I sing, dance and draw. My time as an NCC
                cadet is where the rest of it came from — showing up early,
                working to a standard, and finishing what the team started.
              </p>
            </div>

            <dl data-facts className="mt-16">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  data-fact
                  className="grid grid-cols-1 gap-1 border-t border-line py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <dt className="eyebrow sm:col-span-4 sm:pt-1">
                    {fact.label}
                  </dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-ink sm:col-span-8">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
