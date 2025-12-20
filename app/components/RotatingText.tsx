"use client";

import { useEffect, useState } from "react";

export default function RotatingText({ words = ["Anywhere", "Anytime", "Limitless"] }: { words?: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-flex flex-col h-[1.1em] overflow-hidden align-bottom">
      <span 
        className="block text-blue-600 transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateY(-${index * 1.1}em)` }}
      >
        {words.map((word) => (
          <span key={word} className="block h-[1.1em] flex items-center">
            {word}.
          </span>
        ))}
      </span>
    </span>
  );
}
