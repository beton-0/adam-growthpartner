"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PulseCTA from "@/components/PulseCTA";
import HeroPanel from "@/components/home/HeroPanel";

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
      {/* Faint grid backdrop */}
      <div className="absolute inset-0 -z-20 grid-bg opacity-90" />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-paper via-paper/60 to-paper"
      />

      {/* Soft colored glows behind the headline */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute top-[18%] left-[10%] w-[520px] h-[520px] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 195, 165, 0.55) 0%, transparent 65%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.15 }}
          className="absolute top-[8%] right-[14%] w-[480px] h-[480px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(190, 210, 255, 0.5) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.25 }}
          className="absolute bottom-[10%] left-[35%] w-[440px] h-[440px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(200, 255, 215, 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-16 pt-28 pb-16 sm:pt-32 md:pt-40">
        {/* Centered status chips on top */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/80 backdrop-blur-sm px-3 py-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink/70">
            <span className="font-mono text-ink/55">v.2026</span>
            <span className="text-ink/30">/</span>
            <span>System sprzedaży dla trenerów</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-paper/60 backdrop-blur-sm px-3 py-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink/55">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
            </span>
            2 miejsca / Q1
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-[clamp(34px,7.2vw,84px)] text-ink leading-[1.02] tracking-[-0.035em] [text-wrap:balance] break-words"
              style={{
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.7), 0 0 80px rgba(255,210,180,0.25)",
              }}
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
              <PulseCTA href="/kontakt" size="lg">
                Umów konsultację strategiczną
              </PulseCTA>
              <Link
                href="/proces"
                className="inline-flex items-center justify-center min-h-[56px] rounded-full border border-ink/15 bg-paper/60 px-6 py-3.5 text-[15px] font-medium leading-none text-ink hover:bg-paper hover:border-ink/30 transition-colors"
              >
                Zobacz, jak działa →
              </Link>
            </motion.div>

            {/* Bottom mini-row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 sm:mt-14 grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-x-8 gap-y-2 text-[11px] sm:text-[12px] text-ink/55"
            >
              <span className="font-mono">Trenerzy 5–60 tys. zł / mies.</span>
              <span className="hidden sm:inline text-ink/20">·</span>
              <span className="font-mono">Setup 14 dni</span>
              <span className="hidden sm:inline text-ink/20">·</span>
              <span className="font-mono">Rozliczenie od wyniku</span>
            </motion.div>
          </div>

          {/* Right: live system status panel — desktop only */}
          <div className="hidden lg:flex justify-end items-center">
            <HeroPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
