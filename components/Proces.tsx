"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const steps = [
  {
    nr: "01",
    title: "Rozmowa diagnostyczna",
    time: "45 min",
    desc: "Zaczynamy od bezpłatnej rozmowy. Sprawdzam jak działa Twój obecny proces sprzedaży, gdzie tracisz klientów, jakie masz cele. Wychodzisz z konkretnymi wnioskami — niezależnie od tego, czy podejmiemy współpracę.",
  },
  {
    nr: "02",
    title: "Audyt i plan działania",
    time: "5–7 dni",
    desc: "Analizuję Twoje treści, reklamy, wiadomości, sprzedaż. Przygotowuję plan — co zmieniamy, w jakiej kolejności, i jakie wyniki ma to przynieść w ciągu pierwszych 60 i 180 dni.",
  },
  {
    nr: "03",
    title: "Wdrożenie systemu",
    time: "30–60 dni",
    desc: "Budujemy lejek, ustawiamy kampanie, piszemy treści i skrypty, automatyzujemy wiadomości. Pracujemy razem — Ty cały czas wiesz dlaczego robimy to, co robimy.",
  },
  {
    nr: "04",
    title: "Optymalizacja i skalowanie",
    time: "stała współpraca",
    desc: "Po wdrożeniu pracujemy nad tym, co działa najlepiej. Testujemy, podkręcamy, skalujemy. Spotkania robocze raz w tygodniu, raportowanie wyników, decyzje na liczbach.",
  },
  {
    nr: "05",
    title: "Rozliczenie od wyników",
    time: "co miesiąc",
    desc: "Mój udział to procent od dodatkowego przychodu, który wygenerujemy razem. Jeśli nie zarabiasz więcej niż przed naszą współpracą — nie zarabiam ja. Tak to widzę.",
  },
];

export default function Proces() {
  return (
    <section id="proces" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-20 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-ink-500">
              03 — Proces
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tightest leading-[1.05]">
              Jak to wygląda{" "}
              <span className="italic text-ink-400">krok po kroku</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ink-200 to-transparent md:-translate-x-px" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <Reveal key={step.nr} delay={i * 0.08}>
                <div
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-[20px] md:left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-ink-900 ring-4 ring-white z-10"
                  />

                  <div
                    className={`pl-16 md:pl-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="font-mono text-ink-400">{step.nr}</span>
                      <span className="h-px w-6 bg-ink-300" />
                      <span className="text-ink-500">{step.time}</span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-ink-600 leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
