'use client';
import React, { useState, useMemo } from "react";
import ProjectCard from "@/app/Components/ProjectCard/ProjectCard";

const projects = [
  {
    title: "ECISS Quality Control Dashboard",
    description: "A professional desktop dashboard that reads AdvanceLab gauges over USB/serial, performs live statistical quality control, and generates certified PDF reports.",
    tech: ["Python", "PySide6", "Matplotlib", "ReportLab", "Serial"],
    image: "/wall-thickness-analysis-software.webp", // You can update this to match your preferred asset image path
    link: "https://www.eciss.com.eg/uploads/softwares/brochures/ECISS-QC-Dashboard%E2%80%94Details-Brochure.pdf",
    category: "Desktop",
  },
  {
    title: "Qamar Scarves",
    description: "An e-commerce platform for Qamar Scarves, featuring dynamic product listings, real-time updates, and a smooth shopping experience.",
    tech: ["React.js", "Next.js", "TailwindCSS", "Firebase"],
    image: "/qamar.jpg",
    link: "https://qamar-kappa.vercel.app/",
    category: "E-Commerce",
  },
  {
    title: "Roads & Rides",
    description: "A social media website for Roads & Rides, the first exotics club in Egypt.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/RandR logo.jpg",
    link: "https://roads-rides.vercel.app/",
    category: "Social",
  },
  {
    title: "Biko Plaza",
    description: "E-commerce web app with authentication, payments, and real APIs.",
    tech: ["Next.js", "NextAuth", "Stripe", "TailwindCSS", "CSR", "SSR"],
    image: "/logo.png",
    link: "https://biko-plaza.vercel.app/",
    category: "E-Commerce",
  },
  {
    title: "Biko Sphere",
    description: "A social media web app template for posts, profiles, and interactions.",
    tech: ["React.js", "TailwindCSS"],
    image: "/logo.jpg",
    link: "https://biko-sphere-app.vercel.app/",
    category: "Social",
  },
  {
    title: "ECISS Website",
    description: "A professional company website for Egyptian Company for Scientific and Industrial Services.",
    tech: ["React.js", "Bootstrap", "Vanilla CSS"],
    image: "/ECISS_logo.png",
    link: "https://www.eciss.com.eg/",
    category: "Corporate",
  },
  {
    title: "AHS Architects",
    description: "A modern architectural portfolio showcasing residential, commercial, and interior design projects.",
    tech: ["Next.js", "Vite", "TailwindCSS", "CSS"],
    image: "/ahs-architects.jpg",
    link: "https://ahs-phi.vercel.app/",
    category: "Portfolio",
  },
  {
    title: "Advanced Security System",
    description: "IoT-based security system with device-free localization and mobile app control.",
    tech: ["React Native", "TypeScript", "IoT"],
    image: "/Home_page.jpg",
    category: "IoT",
  },
];

// Derive unique categories from the data
const ALL = "All";
const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-[url('/projectsbg.jpg')] bg-center bg-cover md:bg-fixed"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-yellow-500/70 uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-4xl font-bold text-white">
            My <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="mt-3 text-sm text-white/40 max-w-md mx-auto">
            {projects.length} projects across web, mobile, desktop, and IoT
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                px-4 py-1.5 rounded-full text-sm border transition-all duration-200
                ${active === cat
                  ? "bg-yellow-500/15 border-yellow-500/50 text-yellow-400"
                  : "bg-transparent border-white/15 text-white/45 hover:border-yellow-500/35 hover:text-yellow-400"}
              `}
            >
              {cat}
              {cat !== ALL && (
                <span className="ml-1.5 text-xs opacity-50">
                  {projects.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-white/30 text-sm mt-16">
            No projects in this category yet.
          </p>
        )}

        {/* Count */}
        <p className="text-center text-white/25 text-xs mt-10">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>
    </section>
  );
}