"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const socials = [
  {
    href: "https://www.facebook.com/yousf.hashish/",
    label: "Facebook",
    icon: "fab fa-facebook-f",
    color: "text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50",
  },
  {
    href: "https://www.instagram.com/yousfhashish/",
    label: "Instagram",
    icon: "fab fa-instagram",
    color: "text-pink-400 hover:bg-pink-500/20 hover:border-pink-400/50",
  },
  {
    href: "https://github.com/BEKO227",
    label: "GitHub",
    icon: "fab fa-github",
    color: "text-gray-300 hover:bg-white/10 hover:border-white/30",
  },
  {
    href: "https://www.linkedin.com/in/yousf-hashish-567a16211/",
    label: "LinkedIn",
    icon: "fab fa-linkedin-in",
    color: "text-blue-400 hover:bg-blue-700/20 hover:border-blue-500/50",
  },
];

const contacts = [
  {
    href: "https://wa.me/201027306090",
    label: "WhatsApp",
    icon: "fab fa-whatsapp",
    text: "+20 102 730 6090",
    color: "text-green-400 hover:text-green-300",
  },
  {
    href: "tel:+201027306090",
    label: "Phone",
    icon: "fas fa-phone",
    text: "+20 102 730 6090",
    color: "text-blue-400 hover:text-blue-300",
  },
  {
    href: "mailto:YousfHashish0@gmail.com",
    label: "Email",
    icon: "fas fa-envelope",
    text: "YousfHashish0@gmail.com",
    color: "text-yellow-400 hover:text-yellow-300",
  },
];

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/AboutMe" },
  { label: "Projects",   href: "/projects" },
  { label: "Experience", href: "/Experience" },
];

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="relative bg-[#080810] border-t border-white/8 text-white">

        {/* Top divider accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Brand column */}
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold text-yellow-400 tracking-wider">YH</span>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                Frontend developer based in Egypt, building fast and thoughtful web experiences with React and Next.js.
              </p>
              {/* Social icons */}
              <div className="flex gap-3 mt-1">
                {socials.map(({ href, label, icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`
                      w-9 h-9 flex items-center justify-center rounded-full
                      border border-white/12 bg-transparent text-sm
                      transition-all duration-200 hover:-translate-y-0.5
                      ${color}
                    `}
                  >
                    <i className={icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs tracking-[0.18em] uppercase text-white/35">Quick links</h3>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-white/55 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-3 h-px bg-white/20 group-hover:w-4 group-hover:bg-yellow-400 transition-all duration-200" aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs tracking-[0.18em] uppercase text-white/35">Get in touch</h3>
              <ul className="flex flex-col gap-3">
                {contacts.map(({ href, label, icon, text, color }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className={`flex items-center gap-3 text-sm transition-colors duration-200 group ${color}`}
                    >
                      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-sm flex-shrink-0 group-hover:border-white/20 transition-colors duration-200">
                        <i className={icon} aria-hidden="true" />
                      </span>
                      <span className="text-white/50 group-hover:text-current transition-colors duration-200 truncate">
                        {text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} Youssef Hashish. All rights reserved.
            </p>
            <p className="text-xs text-white/20">
              Built with Next.js · TailwindCSS · Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top button — uses AnimatePresence for proper exit animation */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 16, scale: 0.85 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: 16, scale: 0.85 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            aria-label="Scroll to top"
            className="
              fixed bottom-6 right-6 z-50
              w-11 h-11 rounded-full
              bg-yellow-500 text-black text-sm
              flex items-center justify-center
              hover:bg-yellow-400 hover:-translate-y-0.5
              transition-colors duration-200
              shadow-lg shadow-yellow-500/25
            "
          >
            <i className="fas fa-arrow-up" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}