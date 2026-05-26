"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  {
    nr: "01",
    title: "Lejki sprzedażowe",
    desc: "Cały proces od pierwszego kontaktu z treścią do podpisanej umowy. Projektuję ścieżkę tak, by każdy etap miał konkretną rolę i prowadził klienta bliżej decyzji.",
    items: [
      "Strona lub landing dopasowany pod ofertę",
      "Ścieżka klienta od reklamy do rozmowy",
      "Kwalifikacja klienta przed rozmową",
    ],
  },
  {
    nr: "02",
    title: "Reklamy płatne",
    desc: "Kampanie na Meta i Google nastawione na konkretną akcję — nie na lajki. Ustawiam, optymalizuję i raportuję tak, żeby było widać co działa, a co nie.",
    items: [
      "Strategia i ustawienie kampanii",
      "Bieżąca optymalizacja i testy",
      "Raporty z konkretnymi wnioskami",
    ],
  },
  {
    nr: "03",
    title: "Treści budujące zaufanie",
    desc: "Scenariusze rolek, postów i wpisów, które pokazują Twoją wiedzę i podgrzewają klienta do momentu, w którym jest gotowy zapytać o ofertę. Nie content dla contentu.",
    items: [
      "Scenariusze treści pod intencję zakupową",
      "Hooki, struktura, wezwania do akcji",
      "Plan publikacji powiązany z ofertą",
    ],
  },
  {
    nr: "04",
    title: "Automatyzacje w wiadomościach",
    desc: "Wiadomości na Instagramie i innych kanałach przestają być wąskim gardłem. Buduję sekwencje, które kwalifikują, edukują i prowadzą klienta do rozmowy — bez ciebie.",
    items: [
      "Kwalifikacja na pierwszej wiadomości",
      "Sekwencje podgrzewające klienta",
      "Przekazanie do calla we właściwym momencie",
    ],
  },
  {
    nr: "05",
    title: "Materiały sprzedażowe",
    desc: "Skrypty, prezentacje, dokumenty i odpowiedzi na obiekcje — wszystko czego potrzebujesz, by w rozmowie zamknąć klienta. Wiesz dokładnie co powiedzieć i kiedy.",
    items: [
      "Skrypt rozmowy z konkretnymi pytaniami",
      "Prezentacja oferty + cennik",
      "Obsługa obiekcji i odmów",
    ],
  },
  {
    nr: "06",
    title: "Wsparcie strategiczne",
    desc: "Pomagam zrozumieć czego realnie potrzebuje klient, żeby kupić. Tłumaczę mechaniki działania całego systemu — żebyś nie był zależny ode mnie na zawsze.",
    items: [
      "Analiza obecnego procesu sprzedaży",
      "Doradztwo cenowe i ofertowe",
      "Spotkania robocze raz w tygodniu",
    ],
  },
];

export default function Uslugi() {
  return (
    <section id="uslugi" className="relative py-32 px-6 bg-ink-50/60">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-20 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-ink-500">
              02 — Usługi
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tightest leading-[1.05]">
              Co konkretnie{" "}
              <span className="italic text-ink-400">dostajesz</span>
            </h2>
            <p className="mt-6 text-ink-600 leading-relaxed">
              Nie wybierasz pakietu. Wchodzę w cały Twój proces sprzedaży i
              układam to, co wymaga ułożenia. Poniżej obszary, w których
              najczęściej działam.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.nr} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 md:p-10 rounded-3xl bg-white border border-ink-200/70 h-full overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-blue-100/50 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                <div className="relative">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-mono text-xs text-ink-400 tracking-widest">
                      {s.nr}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-ink-200 group-hover:bg-ink-900 transition-colors" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-tight mb-4">
                    {s.title}
                  </h3>
                  <p className="text-ink-600 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2.5">
                    {s.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-ink-700"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-ink-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
