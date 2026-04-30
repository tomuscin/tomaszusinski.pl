"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/dictionary";

export default function StickyHeader({
  dict,
  lang,
}: {
  dict: Dictionary["nav"];
  lang: Locale;
}) {
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

  const otherLang = lang === "pl" ? "en" : "pl";

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
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">{dict.about}</a>
            <a href="#process" className="text-sm text-gray-300 hover:text-white transition-colors">{dict.process}</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">{dict.contact}</a>
          </nav>
          <a
            href="https://www.linkedin.com/in/uscinski/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors hidden md:flex items-center"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <Link
            href={`/${otherLang}`}
            className="text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-wider hidden md:block"
          >
            {otherLang}
          </Link>
          <a
            href={`tel:${"+48" + "787417293"}`}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:scale-[1.03] transition-all duration-200"
          >
            {dict.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
