"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PulseCTA from "@/components/PulseCTA";

const testimonials = [
  {
    quote:
      "Adam wszedł i poukładał wszystko: ofertę, lejek, reklamy. Cztery miesiące i 3× obrót. Bez ściemy.",
    name: "Olivia D.",
    role: "Coach online, trening kobiet",
  },
  {
    quote:
      "Przestałem oglądać wykresy w Excelu w niedzielę. System sam pokazuje, co działa, a Adam mówi, co dalej.",
    name: "Marcin Z.",
    role: "Studio personalne, Wrocław",
  },
  {
    quote:
      "Myślałem, że potrzebuję większego zasięgu. Okazało się, że potrzebowałem strategii — i kogoś, kto wykona ją ze mną do końca.",
    name: "Kamil W.",
    role: "Strongman coach, kanał online",
  },
  {
    quote:
      "Pierwszy raz mam kalendarz pełen na 6 tygodni do przodu i nie muszę za nikim gonić. Wystarczyło, żeby ktoś wreszcie poukładał ten chaos.",
    name: "Patrycja R.",
    role: "Trenerka funkcjonalna, Kraków",
  },
];

const AUTO_INTERVAL = 5500;

export default function CtaWithQuote() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const total = testimonials.length;

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [autoPlay, total]);

  function go(delta: number) {
    setAutoPlay(false);
    setIndex((i) => (i + delta + total) % total);
  }

  function jumpTo(i: number) {
    setAutoPlay(false);
    setIndex(i);
  }

  const t = testimonials[index];

  return (
    <section className="bg-paper px-5 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-24 md:py-32 lg:py-36 border-t border-ink/[0.08]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-start">
          {/* Rotator side */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/55">
                / Opinia {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40 inline-flex items-center gap-1.5">
                <span
                  className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                    autoPlay ? "bg-emerald-600" : "bg-ink/30"
                  }`}
                >
                  {autoPlay && (
                    <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70" />
                  )}
                </span>
                {autoPlay ? "auto" : "manual"}
              </span>
            </div>

            {/* Quote area with reserved height */}
            <div className="relative min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <p className="font-display text-[clamp(20px,4.2vw,36px)] leading-[1.22] text-ink [text-wrap:balance] tracking-[-0.025em]">
                    „{t.quote}"
                  </p>
                  <cite className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 not-italic text-[12.5px] sm:text-[13px] text-ink/70">
                    <span className="h-px w-6 sm:w-8 bg-ink/30" />
                    <strong className="font-medium text-ink">{t.name}</strong>
                    <span className="text-ink/40">·</span>
                    <span>{t.role}</span>
                  </cite>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-6 sm:mt-8 flex items-center gap-3">
              <button
                type="button"
                aria-label="Poprzednia opinia"
                onClick={() => go(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper hover:bg-paper-100 hover:border-ink/30 active:scale-[0.96] transition-all text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Następna opinia"
                onClick={() => go(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper hover:bg-paper-100 hover:border-ink/30 active:scale-[0.96] transition-all text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>

              {/* Dots */}
              <div className="ml-3 flex items-center gap-1.5">
                {testimonials.map((_, i) => {
                  const isActive = i === index;
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Opinia ${i + 1}`}
                      onClick={() => jumpTo(i)}
                      className={`h-2 rounded-full transition-all ${
                        isActive
                          ? "w-6 bg-ink"
                          : "w-2 bg-ink/20 hover:bg-ink/40"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA side */}
          <div className="lg:col-span-5 lg:border-l lg:border-ink/[0.08] lg:pl-12 pt-8 lg:pt-0 border-t lg:border-t-0 border-ink/[0.08]">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/55">
              / Następny krok
            </span>
            <h2 className="mt-4 sm:mt-5 font-display text-[clamp(24px,5vw,40px)] text-ink leading-[1.05] tracking-[-0.03em] [text-wrap:balance]">
              Sprawdźmy, czy GrowthOS<span className="tm">™</span> pasuje do Twojego biznesu.
            </h2>
            <p className="mt-4 sm:mt-5 text-[13.5px] sm:text-[14px] leading-[1.6] text-ink/70 max-w-sm">
              45 minut, bezpłatnie. Wychodzisz z 2-3 hipotezami wzrostu —
              niezależnie od tego, czy podejmiemy współpracę.
            </p>
            <div className="mt-7 sm:mt-8">
              <PulseCTA href="/kontakt" size="lg">
                Umów konsultację strategiczną
              </PulseCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
