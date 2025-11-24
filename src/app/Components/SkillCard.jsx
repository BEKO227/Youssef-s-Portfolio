"use client";
import { motion } from "framer-motion";

export default function SkillCard({ delay = 0, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.04,
        rotateX: 3,
        rotateY: -3,
        boxShadow: "0px 8px 25px rgba(255, 215, 0, 0.3)",
      }}
      className="p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 
      hover:border-yellow-400 transition-all duration-300"
    >
      {children}
    </motion.div>
  );
}
