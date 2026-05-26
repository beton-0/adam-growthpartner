"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const items = [
  {
    q: "Jak wygląda model rozliczenia?",
    a: "Najczęściej procent od dodatkowego przychodu, który wygenerujemy razem. Punktem odniesienia jest średnia z ostatnich 3 miesięcy przed naszą współpracą. W niektórych przypadkach dochodzi niewielki ryczałt operacyjny na pokrycie kosztów stałych (np. budżet reklamowy, narzędzia). Wszystko jest jasne w umowie, bez ukrytych pozycji.",
  },
  {
    q: "Ile to trwa, zanim zobaczę pierwsze efekty?",
    a: "Pierwsze efekty (więcej zapytań, lepsza jakość leadów, łatwiejsze rozmowy) najczęściej widać w 30–45 dni od startu wdrożenia. Realne przesunięcie w przychodach miesięcznych — 60–120 dni, w zależności od tego, jak dużo jest do ułożenia na starcie i ile masz aktywności w ofertach.",
  },
  {
    q: "Czy gwarantujesz wyniki?",
    a: "Gwarantuję podejście, nie liczby. Konkretne kwoty zależą od oferty, ceny, zaangażowania trenera i kilku innych zmiennych, na które nie mam stuprocentowego wpływu. Ale model rozliczenia od wyników to mój sposób na pokazanie, że jestem przy Tobie zaangażowany — bez wyniku ja też nie zarabiam.",
  },
  {
    q: "Czy muszę nagrywać filmy, prowadzić Instagrama, pokazywać się?",
    a: "Tak — w jakiejś formie tak. Trener, który sprzedaje wiedzę i siebie, musi być widzialny. Mogę pomóc Ci to ułożyć tak, by zajmowało jak najmniej czasu i było jak najmniej niewygodne, ale całkowite ukrywanie się za marką to dla mnie zły start.",
  },
  {
    q: "Pracujesz tylko z trenerami w Polsce?",
    a: "Najczęściej tak — polski rynek znam najlepiej, treści piszemy po polsku, kampanie są nakierowane na polskiego odbiorcę. Współpraca z trenerem prowadzącym po polsku z zagranicy jest jak najbardziej możliwa.",
  },
  {
    q: "Co jeśli nie pasujemy do siebie po pierwszej rozmowie?",
    a: "Wtedy się żegnamy i każdy idzie swoją drogą. Rozmowa diagnostyczna jest bezpłatna właśnie po to, żeby sprawdzić czy jest sens. Wolę powiedzieć 'nie biorę tego' niż wejść we współpracę, której obie strony będą żałować.",
  },
  {
    q: "Czy mogę kontynuować obecne kampanie reklamowe?",
    a: "Zacznę od analizy tego, co już działa. Jeśli widać, że obecny zestaw przynosi efekty — nie ruszamy go. Optymalizujemy i skalujemy. Jeśli pali pieniądze — wyłączamy i budujemy od nowa. Nie chodzi o robienie zmian dla zmian, tylko o decyzje na danych.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-widest text-ink-500">
              07 — Częste pytania
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tightest leading-[1.05]">
              Co trenerzy najczęściej{" "}
              <span className="italic text-ink-400">pytają</span>
            </h2>
          </div>
        </Reveal>

        <div className="divide-y divide-ink-200/80 border-t border-b border-ink-200/80">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                >
                  <span className="font-display text-2xl md:text-3xl tracking-tight leading-snug pr-4">
                    {it.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 mt-2 w-10 h-10 rounded-full bg-ink-50 border border-ink-200 flex items-center justify-center group-hover:bg-ink-900 group-hover:text-white group-hover:border-ink-900 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-16 text-ink-600 leading-relaxed">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
