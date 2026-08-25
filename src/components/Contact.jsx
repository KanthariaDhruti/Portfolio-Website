import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "./Icon";
import {
  reveal,
  drawRule,
  drift,
  revealLines,
  fontsReady,
  prefersReducedMotion,
} from "../lib/motion";

/**
 * Fill this in to show a direct mail link. Left empty deliberately: the old
 * site linked to a Gmail compose URL that only opens for the account owner,
 * and the footer carried "your-email@example.com". Neither reaches anyone.
 */
const EMAIL = "";

const channels = [
  {
    label: "LinkedIn",
    value: "dhruti-kantharia",
    href: "https://www.linkedin.com/in/dhruti-kantharia-759700255/",
  },
  {
    label: "Instagram",
    value: "@designed.by.dhruti",
    href: "https://www.instagram.com/designed.by.dhruti/?hl=en",
  },
  {
    label: "GitHub",
    value: "KanthariaDhruti",
    href: "https://github.com/KanthariaDhruti",
  },
];

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[0.9375rem] text-ink placeholder-muted/70 transition-colors duration-300 focus:border-ink focus:outline-none";

function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      let revert = () => {};
      fontsReady().then(() => {
        revert = revealLines(headingRef.current, { scroll: true, stagger: 0.08 });
      });

      reveal("[data-contact-eyebrow]", { trigger: sectionRef.current, scope: sectionRef.current });
      drawRule("[data-rule]", { scope: sectionRef.current });
      reveal("[data-channel]", { stagger: 0.08, y: 10, trigger: "[data-channels]", scope: sectionRef.current });
      reveal("[data-field]", { stagger: 0.08, y: 10, trigger: "[data-form]", scope: sectionRef.current });

      drift("[data-contact-side]", { distance: 30, scope: sectionRef.current });
      drift("[data-form]", { distance: -20, scope: sectionRef.current });

      return () => revert();
    },
    { scope: sectionRef },
  );

  const sendEmail = (event) => {
    event.preventDefault();
    if (status.state === "sending") return;

    setStatus({ state: "sending", message: "Sending…" });

    emailjs
      .sendForm(
        "service_74wjdmh",
        "template_df44l8m",
        event.target,
        "dS7tWE4Ud1wj1gB0j",
      )
      .then(
        () => {
          setStatus({
            state: "sent",
            message: "Thank you — your message is on its way.",
          });
          formRef.current?.reset();
        },
        () => {
          setStatus({
            state: "error",
            message: "That didn't send. Try again, or reach me on LinkedIn.",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div data-rule className="rule" />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div data-contact-side className="lg:col-span-6">
            <span data-contact-eyebrow className="eyebrow">
              05 — Contact
            </span>
            <h2
              ref={headingRef}
              data-split
              className="display mt-4 text-[11vw] sm:text-[7.5vw] lg:text-[4.2vw]"
            >
              Let's make
              <br />
              something
              <br />
              <span className="italic">worth keeping.</span>
            </h2>

            <div data-channels className="mt-12 max-w-md">
              {EMAIL && (
                <a
                  data-channel
                  href={`mailto:${EMAIL}`}
                  className="group grid grid-cols-12 items-baseline gap-4 border-t border-line py-4 no-underline"
                >
                  <span className="eyebrow col-span-4">Email</span>
                  <span className="col-span-7 text-[0.9375rem] text-ink">
                    <span className="link-wipe">{EMAIL}</span>
                  </span>
                  <ArrowUpRight size={15} className="arrow col-span-1 text-muted" />
                </a>
              )}

              {channels.map((channel) => (
                <a
                  key={channel.label}
                  data-channel
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 items-baseline gap-4 border-t border-line py-4 no-underline"
                >
                  <span className="eyebrow col-span-4">{channel.label}</span>
                  <span className="col-span-7 text-[0.9375rem] text-ink">
                    <span className="link-wipe">{channel.value}</span>
                  </span>
                  <ArrowUpRight size={15} className="arrow col-span-1 text-muted" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              ref={formRef}
              data-form
              onSubmit={sendEmail}
              className="lg:pt-6"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div data-field>
                  <label htmlFor="from_name" className="eyebrow">
                    Name
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div data-field>
                  <label htmlFor="from_email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div data-field className="mt-6">
                <label htmlFor="subject" className="eyebrow">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className={fieldClass}
                />
              </div>

              <div data-field className="mt-6">
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about the project, the timeline, and what success looks like."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div data-field className="mt-10 flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="group flex cursor-pointer items-center gap-2 bg-transparent p-0 text-[0.9375rem] text-ink disabled:cursor-wait disabled:text-muted"
                >
                  <span className="link-wipe link-retract">
                    {status.state === "sending" ? "Sending" : "Send message"}
                  </span>
                  <ArrowUpRight size={16} className="arrow" />
                </button>

                {/* Status replaces the old alert() dialogs. */}
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm transition-opacity duration-500 ${
                    status.message ? "opacity-100" : "opacity-0"
                  } ${status.state === "error" ? "text-accent" : "text-muted"}`}
                >
                  {status.message || " "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
