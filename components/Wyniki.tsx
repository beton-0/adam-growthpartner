"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedNumber from "./AnimatedNumber";

const cases = [
  {
    id: "01",
    name: "Trener personalny — Warszawa",
    niche: "Trening siłowy dla kobiet",
    duration: "4 miesiące współpracy",
    before: {
      revenue: 9800,
      clients: 7,
      cpl: 0,
      callShow: 35,
    },
    after: {
      revenue: 34200,
      clients: 22,
      cpl: 47,
      callShow: 78,
    },
    highlights: [
      "Wprowadzenie programu premium 3x w cenie pierwotnej oferty",
      "Lejek z reklam Meta + sekwencja DM zamykająca 1 na 3 zapytania",
      "Skalowanie z 7 do 22 aktywnych klientów bez zwiększania liczby godzin pracy",
    ],
    quote:
      "Pierwsze tygodnie były niewygodne — Adam wytknął mi rzeczy, których sama nie widziałam. Ale właśnie po tym wszystko ruszyło. Teraz mam więcej klientek niż kiedykolwiek i nie żyję już telefonem.",
    author: "Klient #01",
  },
  {
    id: "02",
    name: "Trener online — coaching hipertrofii",
    niche: "Mężczyźni 25–40",
    duration: "6 miesięcy współpracy",
    before: {
      revenue: 22000,
      clients: 18,
      cpl: 0,
      callShow: 50,
    },
    after: {
      revenue: 71500,
      clients: 41,
      cpl: 62,
      callShow: 82,
    },
    highlights: [
      "Przejście z planów jednorazowych na model subskrypcyjny",
      "Wdrożenie procesu rozmów sprzedażowych z konwersją 47%",
      "Treści wideo dopasowane pod każdy etap lejka",
    ],
    quote:
      "Najwięcej dał mi nie sam wzrost przychodu, tylko to że wiem dlaczego on rośnie. Każda zmiana ma uzasadnienie. To już nie jest 'a nuż się uda'.",
    author: "Klient #02",
  },
  {
    id: "03",
    name: "Trener personalny + dietetyk",
    niche: "Redukcja, kobiety 30+",
    duration: "3 miesiące współpracy",
    before: {
      revenue: 14500,
      clients: 11,
      cpl: 0,
      callShow: 42,
    },
    after: {
      revenue: 42800,
      clients: 28,
      cpl: 38,
      callShow: 85,
    },
    highlights: [
      "Stworzenie wspólnej oferty trener + dietetyk z wyższą wartością",
      "Automatyzacja kwalifikacji w wiadomościach Instagram",
      "Materiały sprzedażowe pozwalające zamykać rozmowy bez 'sprzedawania'",
    ],
    quote:
      "Bałam się że stracę kontrolę nad tym jak rozmawiam z klientkami. Wyszło odwrotnie — w końcu wiem, kogo chcę przyjąć, a kogo nie, i czuję się z tym dobrze.",
    author: "Klient #03",
  },
];

function Metric({
  label,
  before,
  after,
  prefix = "",
  suffix = "",
  inverted = false,
}: {
  label: string;
  before: number;
  after: number;
  prefix?: string;
  suffix?: string;
  inverted?: boolean;
}) {
  const change =
    before === 0 ? null : Math.round(((after - before) / before) * 100);
  const isPositive = inverted ? after < before : after > before;

  return (
    <div className="p-5 rounded-2xl bg-ink-50/70 border border-ink-200/60">
      <div className="text-xs text-ink-500 uppercase tracking-widest mb-3">
        {label}
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <div className="text-xs text-ink-400 mb-0.5">przed</div>
          <div className="text-lg text-ink-500 line-through">
            {prefix}
            {before.toLocaleString("pl-PL")}
            {suffix}
          </div>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-ink-300 shrink-0"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-right">
          <div className="text-xs text-ink-400 mb-0.5">po</div>
          <div className="text-2xl font-display tracking-tight">
            <AnimatedNumber value={after} prefix={prefix} suffix={suffix} />
          </div>
        </div>
      </div>
      {change !== null && (
        <div
          className={`mt-3 text-xs font-medium ${
            isPositive ? "text-emerald-600" : "text-ink-500"
          }`}
        >
          {change > 0 ? "+" : ""}
          {change}% {isPositive ? "zmiana" : "zmiana"}
        </div>
      )}
    </div>
  );
}

export default function Wyniki() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="wyniki" className="relative py-32 px-6 bg-ink-900 text-ink-100 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-ink-400">
                04 — Wyniki
              </span>
              <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tightest leading-[1.05] text-white">
                Co realnie się zmieniło u podopiecznych
              </h2>
              <p className="mt-6 text-ink-300 leading-relaxed">
                Dane z anonimizowanych przypadków. Każdy biznes jest inny —
                pokazuję skalę, nie obiecuję powtórki 1:1.
              </p>
            </div>
            <span className="text-xs text-ink-500 italic">
              * dane przykładowe, do podmiany
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {cases.map((cs, i) => (
              <button
                key={cs.id}
                onClick={() => setActive(i)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all border ${
                  active === i
                    ? "bg-white text-ink-900 border-white"
                    : "bg-transparent text-ink-300 border-ink-700 hover:border-ink-500 hover:text-white"
                }`}
              >
                <span className="font-mono text-xs opacity-60 mr-2">
                  {cs.id}
                </span>
                {cs.name}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-5 gap-8"
          >
            <div className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-ink-800/60 border border-ink-700/50 backdrop-blur">
              <div className="flex items-center gap-4 text-xs text-ink-400 uppercase tracking-widest mb-6">
                <span>{c.niche}</span>
                <span className="w-1 h-1 rounded-full bg-ink-600" />
                <span>{c.duration}</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Metric
                  label="Przychód miesięczny"
                  before={c.before.revenue}
                  after={c.after.revenue}
                  suffix=" zł"
                />
                <Metric
                  label="Aktywni klienci"
                  before={c.before.clients}
                  after={c.after.clients}
                />
                <Metric
                  label="Pojawialność na rozmowach"
                  before={c.before.callShow}
                  after={c.after.callShow}
                  suffix="%"
                />
                <Metric
                  label="Koszt zapytania"
                  before={c.before.cpl || 180}
                  after={c.after.cpl}
                  suffix=" zł"
                  inverted
                />
              </div>

              <div className="mt-8 pt-8 border-t border-ink-700/50">
                <div className="text-xs uppercase tracking-widest text-ink-500 mb-4">
                  Co konkretnie zrobiliśmy
                </div>
                <ul className="space-y-3">
                  {c.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-ink-200 leading-relaxed text-sm"
                    >
                      <span className="text-ink-500 font-mono text-xs pt-1">
                        0{i + 1}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-ink-800/80 to-ink-900 border border-ink-700/50 flex flex-col justify-between">
              <div>
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  className="text-ink-500 mb-6"
                >
                  <path
                    d="M0 32V20C0 8.954 8.954 0 20 0v8c-6.627 0-12 5.373-12 12h12v12H0zm20 0V20c0-11.046 8.954-20 20-20v8c-6.627 0-12 5.373-12 12h12v12H20z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="font-display text-2xl md:text-3xl leading-[1.25] text-white tracking-tight">
                  {c.quote}
                </blockquote>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ink-600 to-ink-800 border border-ink-600" />
                <div>
                  <div className="text-sm text-white">{c.author}</div>
                  <div className="text-xs text-ink-500">{c.niche}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
