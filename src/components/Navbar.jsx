import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { gsap, EASE, prefersReducedMotion } from "../lib/motion";
import { useScrollTo } from "../lib/scroll";

const sections = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scrollTo = useScrollTo();
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const panelRef = useRef(null);

  const onLanding = pathname === "/";

  /* The bar earns its background only once the page has moved beneath it. */
  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  /* The menu is a full sheet on mobile; lock the page under it. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open || !panelRef.current || prefersReducedMotion()) return;
    const items = panelRef.current.querySelectorAll("[data-menu-item]");
    gsap.fromTo(
      items,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: EASE, delay: 0.1 },
    );
  }, [open]);

  const goToSection = (id) => {
    setOpen(false);
    if (onLanding) {
      scrollTo(`#${id}`, { offset: -80 });
    } else {
      navigate("/", { state: { section: id } });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          lifted || open
            ? "bg-paper/85 backdrop-blur-md border-b border-line"
            : "border-b border-transparent"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <Link
            to="/"
            className="font-display text-xl tracking-tight text-ink no-underline"
            onClick={() => onLanding && scrollTo(0)}
          >
            Dhruti Kantharia
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => goToSection(section.id)}
                className="link-wipe cursor-pointer bg-transparent p-0 text-[0.9rem] font-light text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                {section.label}
              </button>
            ))}
            <Link
              to="/portfolio"
              className="link-wipe text-[0.9rem] font-light text-ink no-underline"
            >
              Selected Work
            </Link>
          </nav>

          {/* Two rules that cross into an X — the state change is the animation. */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative h-6 w-7 cursor-pointer bg-transparent md:hidden"
          >
            <span
              className="absolute left-0 block h-px w-7 bg-ink transition-transform duration-500"
              style={{
                top: open ? "50%" : "35%",
                transform: open ? "rotate(45deg)" : "none",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            />
            <span
              className="absolute left-0 block h-px w-7 bg-ink transition-all duration-500"
              style={{
                top: open ? "50%" : "60%",
                opacity: open ? 1 : 1,
                transform: open ? "rotate(-45deg)" : "none",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </button>
        </div>
      </header>

      {open && (
        <div
          ref={panelRef}
          className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-6 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                data-menu-item
                type="button"
                onClick={() => goToSection(section.id)}
                className="display cursor-pointer bg-transparent py-2 text-left text-[2.75rem] text-ink"
              >
                {section.label}
              </button>
            ))}
            <Link
              data-menu-item
              to="/portfolio"
              className="display py-2 text-[2.75rem] text-ink no-underline"
            >
              Selected Work
            </Link>
          </nav>

          <div data-menu-item className="mt-12 eyebrow">
            Gandhinagar, India
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
