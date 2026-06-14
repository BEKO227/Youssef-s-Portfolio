"use client";

import { useEffect, useRef } from "react";
import Typewriter from "@/app/Components/TypeWriter/Typewriter";
import Link from "next/link";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let dots = [];
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      dots = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(234,179,8,0.4)";
        ctx.fill();
      });

      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(234,179,8,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const socials = [
    {
      href: "https://www.facebook.com/yousf.hashish/",
      label: "Facebook",
      icon: "fa-facebook-f",
      color: "text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50",
    },
    {
      href: "https://www.instagram.com/yousfhashish/",
      label: "Instagram",
      icon: "fa-instagram",
      color: "text-pink-400 hover:bg-pink-500/20 hover:border-pink-400/50",
    },
    {
      href: "https://github.com/BEKO227",
      label: "GitHub",
      icon: "fa-github",
      color: "text-gray-300 hover:bg-white/15 hover:border-white/40",
    },
    {
      href: "https://www.linkedin.com/in/yousf-hashish-567a16211/",
      label: "LinkedIn",
      icon: "fa-linkedin-in",
      color: "text-blue-400 hover:bg-blue-700/20 hover:border-blue-500/50",
    },
    {
      href: "https://drive.google.com/file/d/1z2LamOXc_D9bHPFoIF5LB3JvvZwVwC6n/view?usp=drive_link",
      label: "Download CV",
      icon: "fa-file-arrow-down",
      color: "text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-400/50",
      solid: true,
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0d0d1a]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/hashish.png')] bg-cover bg-center md:bg-right opacity-30"
        aria-hidden="true"
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />


      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow label */}
        <span className="mb-3 text-xs tracking-[0.22em] text-yellow-500/80 uppercase animate-fade-up">
          Frontend Developer
        </span>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-none tracking-tight animate-fade-up animation-delay-100">
          <span className="text-white">Youssef </span>
          <span className="text-yellow-400">Hashish</span>
        </h1>

        {/* Typewriter */}
        <div className="mt-4 text-lg sm:text-xl text-white/55 animate-fade-up animation-delay-200">
          <Typewriter className="text-white/55" />
        </div>

        {/* Social icons */}
        <div className="mt-8 flex items-center gap-3 animate-fade-up animation-delay-300">
          {socials.map(({ href, label, icon, color, solid }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`
                w-11 h-11 flex items-center justify-center rounded-full
                bg-white/8 border border-white/15 text-lg
                transition-all duration-300 hover:-translate-y-1 hover:scale-110
                ${color}
              `}
            >
              <i className={`${solid ? "fa-solid" : "fab"} ${icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#work"
          className="
            mt-7 inline-flex items-center gap-2 rounded-full
            border border-yellow-500/35 px-6 py-2.5
            text-sm tracking-wide text-yellow-400
            hover:bg-yellow-500/10 hover:border-yellow-400/60
            transition-all duration-300 animate-fade-up animation-delay-400
          "
        >
          View my work
          <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow">
        <span className="text-[10px] tracking-[0.15em] text-white/25 uppercase">scroll</span>
        <i className="fa-solid fa-chevron-down text-xs text-white/25" aria-hidden="true" />
      </div>
    </div>
  );
}