"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedWords from "./../../Components/AnimatedParagraph";

// ─── Skill logo URLs (devicons CDN) ───────────────────────────────────────────
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const PROGRAMMING_SKILLS = [
  { label: "Python",       logo: `${DEVICON}/python/python-original.svg` },
  { label: "Java",         logo: `${DEVICON}/java/java-original.svg` },
  { label: "JavaScript",   logo: `${DEVICON}/javascript/javascript-original.svg` },
  { label: "TypeScript",   logo: `${DEVICON}/typescript/typescript-original.svg` },
  { label: "React.js",     logo: `${DEVICON}/react/react-original.svg` },
  { label: "Next.js",      logo: `${DEVICON}/nextjs/nextjs-original.svg` },
  { label: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { label: "React Native", logo: `${DEVICON}/react/react-original.svg` },
];

const ENGINEERING_SKILLS = [
  { label: "MATLAB",            logo: `${DEVICON}/matlab/matlab-original.svg` },
  { label: "Logic Design",      icon: "⚡" },
  { label: "Circuit Analysis",  icon: "🔌" },
  { label: "Cadence",           icon: "🖥️" },
  { label: "Microsoft Project", logo: `${DEVICON}/windows8/windows8-original.svg` },
];

const OTHER_SKILLS = [
  { label: "Database Management", icon: "🗄️" },
  { label: "Creative Design",     icon: "🎨" },
  { label: "Team Collaboration",  icon: "🤝" },
  { label: "Multitasking",        icon: "⚙️" },
];

const CERTIFICATIONS = [
  {
    title: "Bachelor of electronics and computer engineering",
    issuer: "Nile Univeristy",
    year: "2025",
    icon: "🏅",
  },
  {
    title: "Frontend Development Diploma",
    issuer: "Route Academy",
    year: "2025",
    icon: "🏅",
  },
];

const LANGUAGES = [
  {
    name: "English",
    level: "C1 – Advanced",
    proficiency: 90,
    flag: "🇬🇧",
  },
  {
    name: "Arabic",
    level: "Native",
    proficiency: 100,
    flag: "🇪🇬",
  },
  {
    name: "German",
    level: "A2 – Beginner",
    proficiency: 25,
    flag: "🇩🇪",
  },
];

// ─── Reusable badge ──────────────────────────────────────────────────────────
function SkillBadge({ label, logo, icon }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                 bg-white/5 border border-white/10 text-white/80
                 hover:border-yellow-500/50 hover:text-yellow-400
                 hover:bg-yellow-500/5 transition-colors cursor-default
                 text-xs font-medium backdrop-blur-sm"
    >
      {logo ? (
        <img src={logo} alt={label} className="w-4 h-4 object-contain rounded-sm" />
      ) : (
        <span className="text-sm leading-none">{icon}</span>
      )}
      {label}
    </motion.span>
  );
}

// ─── Card wrapper ────────────────────────────────────────────────────────────
function SkillCard({ title, icon, accentColor = "yellow", delay = 0, children }) {
  const accents = {
    yellow: "from-yellow-500/20 to-transparent border-yellow-500/30",
    blue:   "from-blue-500/20 to-transparent border-blue-500/30",
    purple: "from-purple-500/20 to-transparent border-purple-500/30",
    green:  "from-green-500/20 to-transparent border-green-500/30",
    teal:   "from-teal-500/20 to-transparent border-teal-500/30",
  };
  const iconColors = {
    yellow: "bg-yellow-500/15 text-yellow-400",
    blue:   "bg-blue-500/15 text-blue-400",
    purple: "bg-purple-500/15 text-purple-400",
    green:  "bg-green-500/15 text-green-400",
    teal:   "bg-teal-500/15 text-teal-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative rounded-2xl border bg-white/[0.04] backdrop-blur-sm p-5
                  bg-gradient-to-br ${accents[accentColor]}
                  hover:bg-white/[0.07] transition-colors group`}
    >
      {/* subtle top-edge glow line */}
      <div className={`absolute top-0 left-6 right-6 h-px
                       bg-gradient-to-r from-transparent via-white/20 to-transparent`} />

      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base
                         ${iconColors[accentColor]}`}>
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-white/90 tracking-wide">{title}</h3>
      </div>

      {children}
    </motion.div>
  );
}

// ─── Language bar ────────────────────────────────────────────────────────────
function LanguageBar({ name, level, proficiency, flag, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      viewport={{ once: true }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-white/85 font-medium">
          <span className="text-lg leading-none">{flag}</span>
          {name}
        </span>
        <span className="text-xs text-white/50">{level}</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 0.9, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300"
        />
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AboutMe() {
  return (
    <section className="relative py-28 px-6 bg-[url('/projectsbg.jpg')] bg-center bg-cover md:bg-fixed overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Subtle radial glow behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(234,179,8,0.08),transparent)]" />

      <div className="relative max-w-5xl mx-auto space-y-16">

        {/* ── ABOUT HEADER ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br
                              from-yellow-400/40 via-yellow-500/20 to-transparent blur-md" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-500/60
                              shadow-[0_0_40px_rgba(234,179,8,0.15)]">
                <Image
                  src="/AboutPic.jpg"
                  alt="Youssef Hashish"
                  width={280}
                  height={280}
                  className="object-cover w-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Eye-brow label */}
              <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase
                               text-yellow-500/80 mb-2">
                Who I Am
              </span>
              <h2 className="text-3xl font-bold text-yellow-500 leading-tight"><span className="text-white">About </span>Me</h2>
            </motion.div>

            <AnimatedWords>
              I&apos;m{" "}
              <span className="font-semibold text-white">Youssef Hashish</span>, a fresh
              Computer Engineering graduate from{" "}
              <span className="font-semibold text-yellow-400">Nile University</span>.
              I enjoy building innovative solutions that bridge technology and
              real-world needs, with hands-on experience in{" "}
              <span className="font-semibold text-white">
                web development, embedded systems, IoT, and circuit design
              </span>.
              I&apos;m a fast learner with strong problem-solving skills, teamwork
              spirit, and an eye for detail. Recently, I also completed a{" "}
              <span className="font-semibold text-yellow-400">
                Frontend Development Diploma at Route Academy
              </span>
              , where I gained practical skills in React.js, Next.js, and Tailwind CSS.
              I value{" "}
              <span className="font-semibold text-white">
                time management, organization, and creativity
              </span>
              , and I&apos;m always eager to explore new technologies and grow as an engineer.
            </AnimatedWords>

            {/* Quick-stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { value: "Nile University", label: "ECE Graduate" },
                { value: "Route Academy", label: "FE Diploma" },
                { value: "EN / AR / DE", label: "Languages" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center px-4 py-2 rounded-xl
                             bg-white/5 border border-white/10 text-center min-w-[90px]"
                >
                  <span className="text-yellow-400 font-semibold text-sm leading-tight">{stat.value}</span>
                  <span className="text-white/50 text-[11px] mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── SKILLS ───────────────────────────────────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase
                             text-yellow-500/80 mb-2">
              What I Know
            </span>
            <h2 className="text-3xl font-bold text-yellow-500">Skills</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Programming & Development */}
            <SkillCard title="Programming & Development" icon="💻" accentColor="yellow" delay={0}>
              <div className="flex flex-wrap gap-2">
                {PROGRAMMING_SKILLS.map((s) => (
                  <SkillBadge key={s.label} {...s} />
                ))}
              </div>
            </SkillCard>

            {/* Engineering & Technical Tools */}
            <SkillCard title="Engineering & Technical Tools" icon="⚙️" accentColor="blue" delay={0.07}>
              <div className="flex flex-wrap gap-2">
                {ENGINEERING_SKILLS.map((s) => (
                  <SkillBadge key={s.label} {...s} />
                ))}
              </div>
            </SkillCard>

            {/* Other Skills */}
            <SkillCard title="Other Skills" icon="🧩" accentColor="purple" delay={0.14}>
              <div className="flex flex-wrap gap-2">
                {OTHER_SKILLS.map((s) => (
                  <SkillBadge key={s.label} {...s} />
                ))}
              </div>
            </SkillCard>

            {/* Languages */}
            <SkillCard title="Languages" icon="🌐" accentColor="teal" delay={0.21}>
              <div className="space-y-3">
                {LANGUAGES.map((lang, i) => (
                  <LanguageBar key={lang.name} {...lang} delay={0.21 + i * 0.1} />
                ))}
              </div>
            </SkillCard>

            {/* Certifications — full width */}
            <div className="md:col-span-2">
              <SkillCard title="Certifications" icon="🏅" accentColor="green" delay={0.28}>
                <div className="flex flex-wrap gap-4">
                  {CERTIFICATIONS.map((cert) => (
                    <motion.div
                      key={cert.title}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-4 px-5 py-3 rounded-xl
                                 bg-yellow-500/10 border border-yellow-500/25
                                 hover:border-yellow-500/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center
                                      justify-center text-xl flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{cert.title}</p>
                        <p className="text-white/50 text-xs mt-0.5">
                          {cert.issuer} &middot; {cert.year}
                        </p>
                      </div>
                      <span className="ml-auto text-[10px] font-semibold tracking-widest uppercase
                                       text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    </motion.div>
                  ))}
                </div>
              </SkillCard>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}