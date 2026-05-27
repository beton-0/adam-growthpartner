import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubpageCta from "@/components/SubpageCta";
import ScrollFade from "@/components/ScrollFade";
import PageJump from "@/components/PageJump";
import GrowthChart from "@/components/GrowthChart";

export const metadata: Metadata = {
  title: "Wyniki — Adam | Growth Partner",
  description:
    "Konkretne liczby z prawdziwych projektów: trenerzy personalni, coachowie online, studia. Każdy case z metrykami i kontekstem.",
};

const cases = [
  {
    no: "01",
    tag: "Coach online · trening kobiet",
    title: "9 → 37 tys. zł",
    titleSuffix: "MRR / 4 mies.",
    summary:
      "Spójny lejek, evergreen webinar, kampanie Meta i system poleceń. Bez zwiększania budżetu reklamowego.",
    chartPoints: [9, 11, 14, 18, 23, 30, 37],
    chartColor: "#1ea1ff",
    metrics: [
      { v: "+312%", l: "MRR" },
      { v: "2.4×", l: "CLV" },
      { v: "78%", l: "Show-up" },
    ],
    quote: "Pierwszy raz od 3 lat mam stabilny dochód.",
    by: "Olivia D.",
  },
  {
    no: "02",
    tag: "Studio personalne · Wrocław",
    title: "+87 klientów",
    titleSuffix: "netto / 6 mies.",
    summary:
      "Lokalny lejek + system poleceń. 3 trenerów z pełnym grafikiem, 98% obłożenia, koniec luźnych okienek.",
    chartPoints: [12, 23, 38, 54, 67, 78, 87],
    chartColor: "#16ad36",
    metrics: [
      { v: "98%", l: "Obłożenie" },
      { v: "4.1×", l: "ROAS" },
      { v: "+87", l: "Klientów" },
    ],
    quote: "Przestałem oglądać Excel w niedzielę wieczorem.",
    by: "Marcin Z.",
  },
  {
    no: "03",
    tag: "Strongman coach · kurs online",
    title: "0 → 84 tys. zł",
    titleSuffix: "sprzedaży / 3 mies.",
    summary:
      "Repozycjonowanie marki, content engine YT + IG, sprzedaż kursu premium. Od zera do 84k w pierwszym kwartale.",
    chartPoints: [0, 4, 12, 24, 42, 62, 84],
    chartColor: "#ff5a1f",
    metrics: [
      { v: "84k zł", l: "Sprzedaż" },
      { v: "8.2k", l: "Followers" },
      { v: "23%", l: "Konwersja" },
    ],
    quote: "Potrzebowałem strategii, nie zasięgu.",
    by: "Kamil W.",
  },
];

export default function WynikiPage() {
  return (
    <>
      <PageHero
        eyebrow="03 — Wyniki"
        title={
          <>
            Liczby z prawdziwych projektów.{" "}
            <span className="italic font-light text-ink/70">Nie ze szkolenia.</span>
          </>
        }
        subtitle="Każdy case ma kontekst: punkt startu, taktyki i to, co naprawdę poruszyło igłę. Bez wybiórczych zrzutów ekranu."
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=2400&q=80&auto=format&fit=crop"
      />

      <section className="bg-paper px-5 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-32">
        <ScrollFade>
          <div className="mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {cases.map((c) => (
                <article
                  key={c.no}
                  className="group relative flex flex-col gap-5 sm:gap-6 rounded-2xl sm:rounded-3xl bg-paper border border-ink/[0.08] p-6 sm:p-7 lg:p-8 hover:border-ink/30 transition-colors duration-300"
                >
                  {/* Header */}
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                      / Case {c.no}
                    </span>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/35">
                      live
                    </span>
                  </div>

                  {/* Tag */}
                  <div className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.16em] text-ink/65 leading-[1.4]">
                    {c.tag}
                  </div>

                  {/* Title */}
                  <div>
                    <div className="font-display text-[clamp(26px,3.2vw,38px)] leading-[1.02] tracking-[-0.035em] text-ink [text-wrap:balance]">
                      {c.title}
                    </div>
                    <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink/55">
                      {c.titleSuffix}
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="relative h-[90px] -mx-1" style={{ color: c.chartColor }}>
                    <GrowthChart points={c.chartPoints} color={c.chartColor} />
                    <span className="absolute top-0 right-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                      ↗
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.55] text-ink/70 [text-wrap:pretty]">
                    {c.summary}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 border-y border-ink/[0.08] divide-x divide-ink/[0.06] -mx-1">
                    {c.metrics.map((m) => (
                      <div
                        key={m.l}
                        className="flex flex-col items-start gap-0.5 px-3 py-3 first:pl-1"
                      >
                        <span className="font-display text-[16px] sm:text-[18px] leading-none tracking-[-0.02em] text-ink tabular-nums">
                          {m.v}
                        </span>
                        <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/55">
                          {m.l}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-auto">
                    <p className="text-[13px] leading-[1.5] text-ink/80 italic">
                      „{c.quote}"
                    </p>
                    <cite className="mt-2 block text-[11px] text-ink/55 not-italic font-mono uppercase tracking-[0.14em]">
                      — {c.by}
                    </cite>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* Bottom stats strip */}
      <section className="bg-paper-100 border-y border-ink/[0.08]">
        <ScrollFade>
          <div className="mx-auto max-w-[1440px] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-ink/[0.08]">
            {[
              { v: "30+", l: "Trenerów" },
              { v: "4.2M zł", l: "Przychodu" },
              { v: "3.7×", l: "Średni ROAS" },
              { v: "92%", l: "Przedłuża współpracę" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex flex-col items-center justify-center gap-1 px-4 sm:px-6 py-7 sm:py-10 text-center"
              >
                <span className="font-display text-[24px] sm:text-[32px] md:text-[40px] tracking-[-0.02em] text-ink leading-none">
                  {s.v}
                </span>
                <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-ink/55 mt-1.5 sm:mt-2 [text-wrap:balance]">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </ScrollFade>
      </section>

      <SubpageCta
        title={
          <>
            Twój case może być{" "}
            <span className="italic font-light text-ink/70">następny</span>.
          </>
        }
        subtitle="Sprawdźmy 45 minut, czy to ma sens. Bez ciśnienia, bez kombinowania."
      />

      <PageJump
        number="05"
        label="Kontakt"
        href="/kontakt"
        subtitle="45 minut, bezpłatnie. Formularz kwalifikujący, potem wybór terminu. Konkretne wnioski na wyjściu."
        variant="dark"
      />
    </>
  );
}
