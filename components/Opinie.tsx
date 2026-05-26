"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const opinions = [
  {
    text: "Adam nie sprzedaje magii. Wchodzi w biznes, ogląda dane, mówi co jest do poprawy i pomaga to wdrożyć. Wartość poczułem już w pierwszym miesiącu.",
    author: "Kuba M.",
    role: "Trener personalny",
    city: "Kraków",
  },
  {
    text: "Najbardziej doceniam to, że nie jest 'agencją od reklam'. Patrzy na cały proces, nie na pojedyncze kawałki. I tłumaczy mi wszystko — wiem co się dzieje i dlaczego.",
    author: "Natalia W.",
    role: "Trenerka online",
    city: "Wrocław",
  },
  {
    text: "Przez pół roku potroiłem przychody. Bez wielkiego budżetu na reklamy, bez 12 godzin pracy dziennie. Tylko ułożone procesy i konsekwencja.",
    author: "Marek S.",
    role: "Trener i dietetyk",
    city: "Poznań",
  },
  {
    text: "To jest pierwsza osoba, która wzięła odpowiedzialność za wynik, a nie za 'wykonanie zadań'. Procent od wyników działa — Adam realnie walczy o mój biznes.",
    author: "Asia K.",
    role: "Trenerka personalna",
    city: "Warszawa",
  },
  {
    text: "Najwięcej dał mi nie nowy lejek, tylko zrozumienie kogo właściwie obsługuję i czego ten człowiek potrzebuje, żeby kupić. Cała reszta się od tego ułożyła.",
    author: "Tomek R.",
    role: "Trener online",
    city: "Gdańsk",
  },
  {
    text: "Bezpośredni, konkretny, nie owija w bawełnę. Jeśli coś nie ma sensu — mówi to wprost. Doceniam to bardziej niż słodzenie.",
    author: "Magda P.",
    role: "Trenerka personalna",
    city: "Łódź",
  },
];

export default function Opinie() {
  return (
    <section className="relative py-32 px-6 bg-ink-50/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-ink-500">
              05 — Opinie
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tightest leading-[1.05]">
              Co mówią <span className="italic text-ink-400">trenerzy</span>,{" "}
              <br />z którymi pracowałem
            </h2>
          </div>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {opinions.map((o, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid mb-6 p-7 rounded-3xl bg-white border border-ink-200/70"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-amber-400"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-ink-700 leading-relaxed mb-6">{o.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-ink-100">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ink-200 to-ink-300 flex items-center justify-center text-xs font-medium text-ink-700">
                    {o.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{o.author}</div>
                    <div className="text-xs text-ink-500">
                      {o.role} · {o.city}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
