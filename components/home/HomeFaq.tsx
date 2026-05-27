"use client";

import { useState } from "react";

const items = [
  {
    q: "Jak wygląda model rozliczeń?",
    a: "Niska podstawowa stawka miesięczna + procent od wygenerowanego przychodu. Im więcej Ty zarabiasz, tym więcej zarabiam ja. Konkretne warunki ustalamy po pierwszej rozmowie i audycie.",
  },
  {
    q: "Na jak długo wiążemy się umową?",
    a: "Minimalny okres to 3 miesiące — krócej nie ma sensu, system po prostu nie zdąży zadziałać. Po tym czasie współpracujemy miesiąc po miesiącu, bez okresu wypowiedzenia.",
  },
  {
    q: "Czy biorę każdego trenera?",
    a: "Nie. Przyjmuję 2 nowych klientów na kwartał. Zależy mi na trenerach, którzy mają już pierwsze przychody (od 5 tys. zł/mies.) i chcą realnie zbudować biznes — nie tylko zarobić więcej w tym miesiącu.",
  },
  {
    q: "Co jeśli nie mam jeszcze marki, treści, nic?",
    a: "To często najlepszy moment. Czysta karta = mniej do przebudowywania. Zaczynamy od pozycjonowania, oferty i podstawowej infrastruktury (landing, lejek, kalendarz). Pierwsze leady zwykle w 4-6 tyg.",
  },
  {
    q: "Czy pracujesz z trenerami offline i online?",
    a: "Tak, z obydwoma. Różni się stack i taktyki, ale logika jest ta sama: spójne pozycjonowanie, dobry lejek, treści, które przyciągają właściwego klienta, i reklamy, które się zwracają.",
  },
  {
    q: "Czy musisz prowadzić moje social media?",
    a: "Nie — pracujemy w trybie, w którym jest Ci wygodnie. Mogę zarządzać contentem 1:1, mogę być Twoim strategiem i edytorem, mogę tylko trenować Twój zespół. Trzy modele, jeden cel.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="flex flex-col items-center gap-12 px-6 py-28 md:py-40"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
          07 — Pytania
        </span>
        <h2 className="text-center font-display text-[clamp(36px,5.5vw,56px)] text-ink">
          FAQ
        </h2>
      </div>

      <div className="flex w-full max-w-[960px] flex-col gap-1">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div
              key={it.q}
              className={`overflow-hidden rounded-3xl transition-[background-color] duration-300 ${
                isOpen ? "bg-ink/[0.04]" : "bg-transparent hover:bg-ink/[0.02]"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className="text-[17px] md:text-[18px] font-medium leading-[1.4] text-ink">
                  {it.q}
                </span>
                <span aria-hidden className="relative block size-6 shrink-0 text-ink/70">
                  <span className="absolute left-1/2 top-1/2 block h-[1.5px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                  <span
                    className={`absolute left-1/2 top-1/2 block h-[14px] w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-300 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[15px] leading-[1.6] text-ink/75 max-w-[640px]">
                    {it.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
