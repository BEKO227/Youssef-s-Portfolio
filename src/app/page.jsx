import React from "react";
import Typewriter from "./Components/TypeWriter/Typewriter";

export default function page() {
  return (
    <>
      <div className="h-screen w-full bg-[url('/hashish.png')] bg-center bg-cover bg-fixed">
        <div className="h-screen w-full bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-yellow-500">Hello</h1>
          <Typewriter className="text-yellow-500"/>
            <div className="text-white font-bold">
                <a href="https://www.facebook.com/share/1BHdESNLmr/?mibextid=wwXIfr" className="m-5 icon fab fa-facebook hover:text-yellow-500" target="_blank" rel="noopener noreferrer" title="Facebook"></a>
                <a href="https://www.instagram.com/yousfhashish/" className="m-5 icon fab fa-instagram hover:text-yellow-500" target="_blank" rel="noopener noreferrer" title="Instagram"></a>
                <a href="https://github.com/BEKO227" className="m-5 icon fab fa-github hover:text-yellow-500" target="_blank" rel="noopener noreferrer" title="GitHub"></a>
                <a href="https://www.linkedin.com/in/yousf-hashish-567a16211/" className="m-5 icon fab fa-linkedin hover:text-yellow-500" target="_blank" rel="noopener noreferrer" title="LinkedIn"></a>
                <a href="https://drive.google.com/file/d/148eHFu3VwYepfHq2BT16hmvW-SUqLBgr/view?usp=drive_link" className="m-5 icon fa-solid fa-file hover:text-yellow-500" target="_blank" rel="noopener noreferrer" title="Download CV"></a>
              </div>      
        </div>
      </div>
    </>
  );
}
