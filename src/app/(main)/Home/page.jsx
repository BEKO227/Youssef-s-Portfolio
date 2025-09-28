import React from "react";
import Typewriter from "@/app/Components/TypeWriter/Typewriter";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-[url('/hashish.png')] bg-cover bg-no-repeat 
  bg-right sm:bg-center md:bg-right">
        <div className="h-screen w-full bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-yellow-500">Hello</h1>
          <Typewriter className="text-yellow-500"/>
          <div className="flex my-10 space-x-6 text-3xl">
            <a
              href="https://www.facebook.com/yousf.hashish/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-blue-500/50"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://www.instagram.com/youssef.hashish/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-pink-500/50"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://github.com/BEKO227"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-gray-300 hover:text-black transition-all duration-300 shadow-md hover:shadow-gray-400/50"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/yousf-hashish-567a16211/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-blue-700/50"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://drive.google.com/file/d/148eHFu3VwYepfHq2BT16hmvW-SUqLBgr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              title="Download CV"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-500/50"
            >
              <i className="fa-solid fa-file"></i>
            </a>
          </div>
    
        </div>
      </div>
    </>
  );
}
