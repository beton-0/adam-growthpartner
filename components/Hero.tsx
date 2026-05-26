"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["systemy", "sprzedaży", "dla trenerów"];

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100vh] flex items-center overflow-hidden pt-24"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 hero-gradient"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-ink-200/60 text-xs font-medium text-ink-600 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Przyjmuję 2 nowych klientów w tym kwartale
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tightest text-ink-900">
          <span className="block text-ink-400 italic">Buduję</span>
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 max-w-xl text-lg text-ink-600 leading-relaxed"
        >
          Wchodzę do biznesu trenera personalnego i online, układam cały proces
          pozyskiwania klienta — od pierwszego zetknięcia do podpisu umowy.
          Wynagradzany od wyników, nie od godzin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#kontakt">
            Umów bezpłatną rozmowę →
          </MagneticButton>
          <MagneticButton href="#wyniki" variant="ghost">
            Zobacz wyniki podopiecznych
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20 flex items-center gap-8 text-xs text-ink-500 uppercase tracking-widest"
        >
          <span>Współpracuję z trenerami</span>
          <div className="h-px flex-1 bg-ink-200 max-w-32" />
          <span>Rozliczam się od wyników</span>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-xs text-ink-500"
        >
          <span>przewiń</span>
          <div className="w-px h-8 bg-gradient-to-b from-ink-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
