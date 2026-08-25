import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, Instagram } from "./Icon";
import { drawRule, reveal, prefersReducedMotion } from "../lib/motion";
import { useScrollTo } from "../lib/scroll";

const socials = [
  { label: "GitHub", href: "https://github.com/KanthariaDhruti", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhruti-kantharia-759700255/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/designed.by.dhruti/?hl=en",
    Icon: Instagram,
  },
];

const sections = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

function Footer() {
  const footerRef = useRef(null);
  const scrollTo = useScrollTo();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      drawRule("[data-rule]", { scope: footerRef.current });
      reveal("[data-footer-item]", { stagger: 0.07, y: 10, trigger: footerRef.current, scope: footerRef.current });
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef} className="px-6 pb-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div data-rule className="rule" />

        <div className="grid grid-cols-1 gap-10 pt-12 sm:grid-cols-12">
          <div data-footer-item className="sm:col-span-5">
            <p className="display text-3xl">Dhruti Kantharia</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Graphic designer and web developer working with brands that would
              rather be understood than noticed.
            </p>
          </div>

          <nav data-footer-item className="sm:col-span-3">
            <span className="eyebrow">Sections</span>
            <ul className="mt-4 space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(`#${section.id}`, { offset: -80 })}
                    className="link-wipe cursor-pointer bg-transparent p-0 text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/portfolio"
                  className="link-wipe text-sm text-ink-soft no-underline transition-colors duration-300 hover:text-ink"
                >
                  All work
                </Link>
              </li>
            </ul>
          </nav>

          <div data-footer-item className="sm:col-span-4">
            <span className="eyebrow">Elsewhere</span>
            <div className="mt-4 flex items-center gap-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted transition-colors duration-300 hover:text-ink"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          data-footer-item
          className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6"
        >
          <p className="eyebrow">
            © {new Date().getFullYear()} Dhruti Kantharia
          </p>
          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="eyebrow link-wipe cursor-pointer bg-transparent p-0 transition-colors duration-300 hover:text-ink"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
