"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#dla-kogo", label: "Dla kogo" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#proces", label: "Proces" },
  { href: "#wyniki", label: "Wyniki" },
  { href: "#o-mnie", label: "O mnie" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-ink-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-2 h-2 rounded-full bg-ink-900 group-hover:scale-150 transition-transform" />
          <span className="font-medium tracking-tight">
            Adam <span className="text-ink-400">| Growth Partner</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-600">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-ink-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="text-sm font-medium px-4 py-2 rounded-full bg-ink-900 text-white hover:bg-ink-800 transition-colors"
        >
          Umów rozmowę
        </a>
      </div>
    </motion.header>
  );
}
