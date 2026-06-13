'use client';
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectCard({ title, description, tech, image, link, category, index = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll-reveal: fade + slide up on enter
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`
        group flex flex-col rounded-2xl overflow-hidden
        border border-white/10 bg-white/5 backdrop-blur-sm
        transition-all duration-500
        hover:-translate-y-2 hover:border-yellow-500/40 hover:bg-white/8
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden bg-black/40">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-white/15 text-sm">No preview</span>
          </div>
        )}

        {/* Category pill overlay */}
        {category && (
          <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-0.5 text-[11px] text-white/60">
            {category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
        <p className="text-sm text-white/45 leading-relaxed flex-1">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-yellow-500/20 bg-yellow-500/8 px-2.5 py-0.5 text-[11px] text-yellow-400/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 w-full justify-center
              rounded-xl border border-yellow-500/30 py-2.5 text-sm text-yellow-400
              hover:bg-yellow-500/10 hover:border-yellow-400/60
              transition-all duration-200
            "
          >
            View project
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        ) : (
          <div className="flex items-center justify-center gap-1.5 w-full rounded-xl border border-white/8 py-2.5 text-sm text-white/25 cursor-default select-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            No preview available
          </div>
        )}
      </div>
    </article>
  );
}