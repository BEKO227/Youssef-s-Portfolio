"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExperienceCard({
  role,
  company,
  duration,
  description,
  image,
  direction = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }} // animates every scroll into view
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative rounded-xl overflow-hidden shadow-lg"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative p-6 text-white">
        <h3 className="text-2xl font-bold text-yellow-500">{role}</h3>
        <p className="italic text-sm mb-2">{company}</p>
        <p className="text-sm mb-4">{duration}</p>
        <p className="leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
