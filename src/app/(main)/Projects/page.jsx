'use client'
import React from "react";
import ProjectCard from "@/app/Components/ProjectCard/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "ECISS Website",
      description: "A professional company website for Egyptian Company for Scientific and Industrial Services.",
      tech: ["React.js", "BootStrap"],
      image: "/ECISS_logo.png",
      link: "https://www.eciss.com.eg/",
    },
    {
      title: "Biko Plaza",
      description: "E-commerce web app template with authentication, payments, and real APIs.",
      tech: ["Next.js", "NextAuth", "Stripe", "TailwindCSS"],
      image: "/logo.png",
      link: "https://biko-plaza.vercel.app/",
    },
    {
      title: "Biko Sphere",
      description: "A social media web app template for posts, profiles, and interactions.",
      tech: ["React.js", "TailwindCSS"],
      image: "/logo.jpg",
      link: "https://biko-sphere-app.vercel.app/",
    },
    {
      title: "Advanced Security System",
      description: "IoT-based security system with device-free localization and mobile app control.",
      tech: ["React Native", "TypeScript", "IoT"],
      image: "/Home_page.jpg",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-[url('/projectsbg.jpg')] bg-center bg-cover bg-fixed">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} direction={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
}
