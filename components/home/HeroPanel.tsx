"use client";

import { motion, AnimatePresence, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const events = [
  { tag: "lead", text: "Nowy lead z Meta — Karolina S." },
  { tag: "call", text: "Rozmowa zaplanowana · czw, 14:00" },
  { tag: "deal", text: "Pakiet 3-mies. podpisany · +4 200 zł" },
  { tag: "lead", text: "Nowy lead z IG — Bartosz M." },
  { tag: "call", text: "Rozmowa zaplanowana · pt, 10:30" },
  { tag: "deal", text: "Pakiet 6-mies. podpisany · +8 400 zł" },
];

function useCounter(to: number, trigger: boolean, decimals = 0) {
  const mv = useMotionValue(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(decimals === 0 ? Math.round(v) : Number(v.toFixed(decimals))),
    });
    return () => controls.stop();
  }, [trigger, to, mv, decimals]);

  return value;
}

export default function HeroPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const leads = useCounter(47, inView);
  const calls = useCounter(12, inView);
  const conv = useCounter(38, inView);

  const [eventIndex, setEventIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setEventIndex((i) => (i + 1) % events.length);
    }, 2200);
    return () => clearInterval(id);
  }, [inView]);

  const e = events[eventIndex];

  return (
    <div ref={ref} className="relative w-full max-w-[400px]">
      {/* glow under */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[40px] blur-[60px] opacity-50 -z-10"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(180, 200, 255, 0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(255, 220, 180, 0.35), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[24px] border border-ink/[0.08] bg-paper/85 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18),0_0_0_1px_rgba(10,10,10,0.04)_inset] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-ink/[0.06] bg-paper/40">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65">
              GrowthOS<span className="tm">™</span> · live
            </span>
          </div>
          <span className="font-mono text-[10.5px] text-ink/45 tabular-nums">
            14:32
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 divide-x divide-ink/[0.06] border-b border-ink/[0.06]">
          {[
            { v: leads, suffix: "", label: "Leady / 7d" },
            { v: calls, suffix: "", label: "Rozmowy" },
            { v: conv, suffix: "%", label: "Konwersja" },
          ].map((m) => (
            <div key={m.label} className="px-3 py-4 flex flex-col gap-1">
              <span className="font-display text-[22px] leading-none tracking-[-0.02em] text-ink tabular-nums">
                {m.v}
                {m.suffix}
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/55">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Event feed */}
        <div className="px-5 py-4 flex flex-col gap-2 min-h-[88px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
            / Live feed
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={e.tag + eventIndex}
              initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2.5"
            >
              <span
                className={`font-mono text-[9px] uppercase tracking-[0.15em] px-1.5 py-0.5 rounded ${
                  e.tag === "lead"
                    ? "bg-blue-500/15 text-blue-700"
                    : e.tag === "call"
                    ? "bg-amber-500/15 text-amber-700"
                    : "bg-emerald-500/15 text-emerald-700"
                }`}
              >
                {e.tag}
              </span>
              <span className="text-[12.5px] text-ink/80 truncate">
                {e.text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-ink/[0.06] bg-paper/40 flex items-center justify-between">
          <span className="font-mono text-[10px] text-ink/45 uppercase tracking-[0.18em]">
            uptime 99.97%
          </span>
          <span className="font-mono text-[10px] text-ink/45">
            last sync · now
          </span>
        </div>
      </motion.div>
    </div>
  );
}
