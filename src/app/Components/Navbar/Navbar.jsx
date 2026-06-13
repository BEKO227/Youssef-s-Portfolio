"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",       href: "/",           section: "home" },
  { label: "About",      href: "/AboutMe",    section: "about" },
  { label: "Projects",   href: "/projects",   section: "projects" },
  { label: "Experience", href: "/Experience", section: "experience" },
];

export function Navbar() {
  const [isOpen, setIsOpen]               = React.useState(false);
  const [scrolled, setScrolled]           = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const pathname = usePathname();

  // Detect if we're on the single-page layout (sections exist in the DOM)
  const isSinglePage = React.useMemo(() => {
    if (typeof document === "undefined") return false;
    return links.some(({ section }) => document.getElementById(section) !== null);
  }, [pathname]);

  // Scroll → frosted glass
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Section follower via IntersectionObserver
  React.useEffect(() => {
    const sectionEls = links
      .map(({ section }) => document.getElementById(section))
      .filter(Boolean);

    if (sectionEls.length === 0) return;

    const visible = new Map();

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.set(entry.target.id, entry.boundingClientRect.top);
        } else {
          visible.delete(entry.target.id);
        }
      });

      if (visible.size === 0) return;

      const topmost = [...visible.entries()].reduce((a, b) =>
        Math.abs(a[1]) < Math.abs(b[1]) ? a : b
      );
      setActiveSection(topmost[0]);
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Decide active state per link:
  // - On a single-page layout: use the IntersectionObserver result only
  // - On a multi-page layout: use exact pathname match only
  const isActive = (link) => {
    if (isSinglePage) {
      return activeSection === link.section;
    }
    // Exact match — avoids "/" matching every route
    return pathname === link.href;
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-black/75 backdrop-blur-md py-3 border-b border-white/8"
          : "bg-transparent py-5"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wider text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
          aria-label="Home"
        >
          YH
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActiveSection(link.section)}
              className={`
                relative text-sm tracking-wide transition-colors duration-200
                after:absolute after:bottom-[-4px] after:left-0 after:h-px
                after:bg-yellow-400 after:transition-all after:duration-300
                ${isActive(link)
                  ? "text-yellow-400 after:w-full"
                  : "text-white/70 hover:text-yellow-400 after:w-0 hover:after:w-full"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — desktop */}
        <a
          href="https://drive.google.com/file/d/148eHFu3VwYepfHq2BT16hmvW-SUqLBgr/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-yellow-500/40 px-4 py-1.5 text-sm text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400/70 transition-all duration-300"
        >
          Resume
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>

        {/* Hamburger — mobile */}
        <button
          className={`
            md:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200
            ${isOpen
              ? "border-yellow-500/60 bg-yellow-500/10 text-yellow-400"
              : "border-white/15 bg-transparent text-white/70 hover:border-yellow-500/40 hover:text-yellow-400"}
          `}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav
          className="mx-4 mt-2 mb-1 rounded-xl border border-white/8 bg-black/85 backdrop-blur-md px-5 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => { setIsOpen(false); setActiveSection(link.section); }}
              className={`
                block py-2.5 text-sm font-medium tracking-wide border-b border-white/6 last:border-0
                transition-colors duration-200
                ${isActive(link) ? "text-yellow-400" : "text-white/65 hover:text-yellow-400"}
              `}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://drive.google.com/file/d/148eHFu3VwYepfHq2BT16hmvW-SUqLBgr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pt-3 text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}