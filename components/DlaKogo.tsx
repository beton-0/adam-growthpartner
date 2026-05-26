"use client";

import Reveal from "./Reveal";

const yes = [
  "Masz już klientów — stacjonarnie lub online — ale brakuje Ci powtarzalnego sposobu na ich pozyskiwanie.",
  "Wiesz, że jesteś dobry w tym co robisz, ale Twój kalendarz nie jest zapełniony tak, jak mógłby być.",
  "Czujesz, że bez ciebie nic się nie dzieje — chcesz przestać być wąskim gardłem własnej sprzedaży.",
  "Chcesz pracować z konkretnym typem klienta, zamiast brać każdego kto się odezwie.",
  "Zarabiasz przyzwoicie, ale wiesz że ceny i lejki są nieoptymalne — i blokuje to skok na wyższy poziom.",
];

const no = [
  "Szukasz cudów w tydzień i nie jesteś gotowy zainwestować czasu w wdrożenie systemu.",
  "Nie chcesz pokazywać się w treściach, nagrywać, rozmawiać z ludźmi.",
  "Nie masz jeszcze pierwszych klientów i nie wiesz, jaki rezultat dostarczasz.",
  "Szukasz wykonawcy do odhaczenia listy zadań — nie partnera, który ma wpływ na decyzje biznesowe.",
];

export default function DlaKogo() {
  return (
    <section id="dla-kogo" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-20 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-ink-500">
              01 — Dla kogo
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tightest leading-[1.05]">
              Nie pracuję z każdym.{" "}
              <span className="italic text-ink-400">Sprawdź czy to dla Ciebie.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <Reveal delay={0.1}>
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-ink-200/70 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-emerald-600"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-medium">To dla Ciebie, jeśli...</span>
              </div>
              <ul className="space-y-4">
                {yes.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-ink-700 leading-relaxed"
                  >
                    <span className="text-ink-300 font-mono text-sm pt-0.5">
                      0{i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 md:p-10 rounded-3xl bg-ink-50 border border-ink-200/70 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-ink-100 border border-ink-200 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-ink-500"
                  >
                    <path
                      d="M6 6l12 12M6 18L18 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="font-medium text-ink-700">
                  To nie dla Ciebie, jeśli...
                </span>
              </div>
              <ul className="space-y-4">
                {no.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-ink-500 leading-relaxed"
                  >
                    <span className="text-ink-300 font-mono text-sm pt-0.5">
                      0{i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
