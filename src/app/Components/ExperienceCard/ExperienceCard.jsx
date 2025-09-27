"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExperienceCard({ role, company, duration, description, direction = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 0px 20px rgba(234, 179, 8, 0.25)",
      }}
      className="bg-white/5 backdrop-blur-md border border-yellow-500/30 rounded-xl p-6 shadow-md"
    >
      <h3 className="text-2xl font-bold text-yellow-400 mb-2">{role}</h3>

      <p className="flex items-center gap-2 text-white/90 mb-1">
        <i className="fas fa-building text-yellow-400"></i>
        {company}
      </p>

      <p className="flex items-center gap-2 text-sm text-gray-300 mb-4">
        <i className="fas fa-calendar-alt text-yellow-400"></i>
        {duration}
      </p>

      <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
