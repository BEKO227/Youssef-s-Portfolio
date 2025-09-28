"use client";
import { useEffect, useState } from "react";

export default function Typewriter() {
  const lines = ["Youssef Hashish", "Front-end Dev"];
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = lines[currentLine];
    let typingSpeed = isDeleting ? 50 : 100;

    const handler = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        const nextText = current.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === current) {
          // full word typed → pause then start deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // Deleting
        const nextText = current.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === "") {
          // word fully deleted → go to next line
          setIsDeleting(false);
          setCurrentLine((prev) => (prev + 1) % lines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handler);
  }, [displayText, isDeleting, currentLine]);

  return (
    <div className="text-4xl font-semibold text-yellow-500 mt-4">
      <span>I am </span>
      <span className="border-r-4 border-yellow-500 pr-1 animate-blink">
        {displayText}
      </span>
    </div>
  );
}
