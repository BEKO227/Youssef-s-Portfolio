"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  link,
  direction = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }} // 👈 animate every scroll
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 25px rgba(234, 179, 8, 0.3)",
      }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
    >
      {/* Image */}
      <div className="relative w-full h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <h3 className="text-2xl font-bold text-yellow-500 mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
}
