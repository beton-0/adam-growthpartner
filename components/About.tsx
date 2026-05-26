"use client";

import Reveal from "./Reveal";
import AnimatedNumber from "./AnimatedNumber";

export default function About() {
  return (
    <section id="o-mnie" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-ink-500">
                06 — O mnie
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tightest leading-[1.05]">
                Dlaczego zająłem się{" "}
                <span className="italic text-ink-400">trenerami</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 sticky top-32 hidden lg:block">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-ink-100 via-ink-50 to-blue-50 border border-ink-200/60 relative overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xs uppercase tracking-widest text-ink-500 mb-2">
                      Adam
                    </div>
                    <div className="font-display text-2xl tracking-tight">
                      Growth Partner dla trenerów personalnych i online
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-ink-700">
            <Reveal delay={0.1}>
              <p>
                Marketingiem i sprzedażą zajmuję się od kilku lat. Zaczynałem
                jak większość — testując wszystko po kolei, ucząc się na
                własnych błędach, czasem ucząc się na cudzych. W pewnym
                momencie zauważyłem, że największą frajdę i największe wyniki
                daje mi praca z konkretną grupą: trenerami.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                Trenerzy są dobrzy w tym, co robią. Mają ekspertyzę, mają
                wyniki, mają klientów, którzy ich kochają. Brakuje im
                najczęściej jednego: systemu, który zamienia tę całą wartość w
                przewidywalne przychody. Większość trenerów liczy na łut
                szczęścia — ja zamieniam ten łut w proces.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                Nie sprzedaję usługi za godziny. Wchodzę w biznes jak partner.
                Biorę procent od wyniku, który razem wygenerujemy. Jeśli
                trener nie zarabia więcej niż przed naszą współpracą — nie
                zarabiam ja. To proste i uczciwe.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p>
                W trakcie pracy tłumaczę wszystko: dlaczego ten lejek wygląda
                tak, a nie inaczej, czemu klient kupuje akurat w tym
                momencie, co realnie blokuje sprzedaż. Chcę, żeby trener po
                naszej współpracy rozumiał własny biznes lepiej niż przedtem
                — a nie był ode mnie zależny.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-ink-200">
                <div>
                  <div className="font-display text-5xl tracking-tightest leading-none text-ink-900">
                    <AnimatedNumber value={30} suffix="+" />
                  </div>
                  <div className="mt-3 text-sm text-ink-500 leading-tight">
                    trenerów we współpracy
                  </div>
                </div>
                <div>
                  <div className="font-display text-5xl tracking-tightest leading-none text-ink-900">
                    <AnimatedNumber value={4} />
                  </div>
                  <div className="mt-3 text-sm text-ink-500 leading-tight">
                    lata w marketingu i sprzedaży
                  </div>
                </div>
                <div>
                  <div className="font-display text-5xl tracking-tightest leading-none text-ink-900">
                    <AnimatedNumber value={100} suffix="%" />
                  </div>
                  <div className="mt-3 text-sm text-ink-500 leading-tight">
                    rozliczenie od wyników
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
