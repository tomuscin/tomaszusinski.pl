"use client";

import { useEffect, useRef } from "react";

export default function StickyHeader() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const onScroll = () => {
      if (window.scrollY > 80) {
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
      } else {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      style={{ opacity: 0, pointerEvents: "none", transition: "opacity 0.3s ease" }}
      className="fixed top-0 left-0 right-0 z-[9999] bg-black/90 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <p className="font-semibold text-sm text-white">Tomasz Uściński</p>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-5">
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">O mnie</a>
            <a href="#process" className="text-sm text-gray-300 hover:text-white transition-colors">Jak pracuję</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Kontakt</a>
            <a
              href="https://www.linkedin.com/in/uscinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </nav>
          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:scale-[1.03] transition-all duration-200"
          >
            Skontaktuj się
          </a>
        </div>
      </div>
    </header>
  );
}
