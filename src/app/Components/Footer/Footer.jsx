"use client";

import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Youssef Hashish. All rights reserved.
        </p>

        <div className="flex space-x-6 text-2xl">
          <h1 className="font-bold mt-2">Contact Me </h1>
          <a
            href="https://wa.me/201027306090"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-green-500/50"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href="tel:+201027306090"
            title="Call Me"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-blue-500/50"
          >
            <i className="fas fa-phone"></i>
          </a>

          <a
            href="mailto:YousfHashish0@gmail.com"
            title="Email Me"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-500/50"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-yellow-500 text-black text-xl shadow-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      )}
    </footer>
  );
}
