"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const rotations = [
  "więcej klientów",
  "pełny kalendarz",
  "stabilny przychód",
  "15h tygodniowo z powrotem",
  "marketing, który się sam dzieje",
  "kontrolę nad biznesem",
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % rotations.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-paper">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-90" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-paper via-paper/60 to-paper"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-16 pt-28 pb-16 sm:pt-32 md:pt-40">
        {/* Status chips */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/80 backdrop-blur-sm px-3 py-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink/70">
            <span className="font-mono text-ink/55">v.2026</span>
            <span className="text-ink/30">/</span>
            <span>System sprzedaży dla trenerów</span>
          </span>
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink/55">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
            </span>
            2 miejsca / Q1
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-[clamp(34px,8.5vw,96px)] text-ink leading-[1.02] tracking-[-0.035em] [text-wrap:balance] break-words"
        >
          <span className="block">
            Dzięki GrowthOS<span className="tm">™</span> zyskujesz
          </span>
          <span
            className="relative block mt-1.5 sm:mt-2"
            style={{ minHeight: "2.08em" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={rotations[index]}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-0 block text-ink/85 [text-wrap:balance]"
              >
                {rotations[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3"
        >
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center min-h-[48px] rounded-full bg-ink px-6 py-3.5 text-[15px] sm:text-sm font-medium leading-none text-paper transition-[opacity,scale] duration-150 hover:opacity-90 active:scale-[0.97]"
          >
            Umów demo systemu
          </Link>
          <Link
            href="/proces"
            className="inline-flex items-center justify-center min-h-[48px] rounded-full border border-ink/15 bg-paper/60 px-6 py-3.5 text-[15px] sm:text-sm font-medium leading-none text-ink hover:bg-paper hover:border-ink/30 transition-colors"
          >
            Zobacz, jak działa →
          </Link>
        </motion.div>

        {/* Bottom mini-row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-auto pt-14 sm:pt-20 grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-x-8 gap-y-2 text-[11px] sm:text-[12px] text-ink/55"
        >
          <span className="font-mono">Trenerzy 5–60 tys. zł / mies.</span>
          <span className="hidden sm:inline text-ink/20">·</span>
          <span className="font-mono">Setup 14 dni</span>
          <span className="hidden sm:inline text-ink/20">·</span>
          <span className="font-mono">Rozliczenie od wyniku</span>
        </motion.div>
      </div>
    </section>
  );
}
