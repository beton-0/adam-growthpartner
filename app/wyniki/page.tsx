import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubpageCta from "@/components/SubpageCta";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wyniki — Adam | Growth Partner",
  description:
    "Konkretne liczby z prawdziwych projektów: trenerzy personalni, coachowie online, studia. Każdy case z metrykami i kontekstem.",
};

const cases = [
  {
    eyebrow: "Case 01 — Trener online",
    title: "Coaching kobiet, siłownia",
    summary:
      "Trenerka z 11 tys. obserwujących na IG, sprzedaż chaotyczna, MRR ok. 9 tys. zł. Po 4 mies. spójny lejek, evergreen webinar i kampanie Meta.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=2000&q=80&auto=format&fit=crop",
    metrics: [
      { value: "+312%", label: "wzrost MRR" },
      { value: "9k → 37k zł", label: "miesięczny przychód" },
      { value: "2.4×", label: "CLV vs. start" },
    ],
    quote:
      "„Pierwszy raz od 3 lat mam stabilny dochód. I wiem dlaczego — bo wiem co działa.\"",
    by: "Olivia D., coach online",
  },
  {
    eyebrow: "Case 02 — Studio personalne",
    title: "Premium PT studio, Wrocław",
    summary:
      "Studio z 3 trenerami, problem z zapełnianiem grafików. Praca głównie z poleceń. Po 6 mies. lokalny lejek + system poleceń = 87 nowych klientów netto.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=2000&q=80&auto=format&fit=crop",
    metrics: [
      { value: "+87", label: "nowych klientów / 6 mies." },
      { value: "98%", label: "obłożenie grafiku" },
      { value: "4.1×", label: "ROAS na Meta" },
    ],
    quote:
      "„Przestałem oglądać wykresy w Excelu w niedzielę. Adam to przejął.\"",
    by: "Marcin Z., właściciel studia",
  },
  {
    eyebrow: "Case 03 — Trener niche",
    title: "Strongman coaching, kanał online",
    summary:
      "Trener z mocnymi wynikami zawodników, ale słabą sprzedażą online. Repozycjonowanie marki, content engine na YT + IG, kurs premium. 0 → 84 tys. zł sprzedaży kursu w 3 mies.",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=2000&q=80&auto=format&fit=crop",
    metrics: [
      { value: "84 tys. zł", label: "sprzedaż kursu w 3 mies." },
      { value: "0 → 8.2k", label: "obserwujący IG" },
      { value: "23%", label: "konwersja na rozmowach" },
    ],
    quote:
      "„Myślałem, że potrzebuję więcej zasięgu. Okazało się, że potrzebowałem strategii.\"",
    by: "Kamil W., strongman coach",
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

      <section className="bg-paper px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] flex flex-col gap-24 md:gap-32">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>.case-img]:order-2" : ""
              }`}
            >
              <div className="case-img md:col-span-7 relative aspect-[16/11] overflow-hidden rounded-[28px] grain">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>
              <div className="md:col-span-5">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
                  {c.eyebrow}
                </span>
                <h2 className="mt-4 font-display text-[clamp(32px,4.6vw,52px)] text-ink leading-[1.04]">
                  {c.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.65] text-ink/75 max-w-md">
                  {c.summary}
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 border-y border-ink/[0.1] py-6">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <span className="font-display text-[clamp(20px,2.4vw,28px)] text-ink leading-none">
                        {m.value}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.16em] text-ink/55 leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <blockquote className="mt-7">
                  <p className="font-display text-[18px] md:text-[20px] leading-[1.45] text-ink/85 italic">
                    {c.quote}
                  </p>
                  <cite className="mt-3 block text-sm not-italic text-ink/60">
                    {c.by}
                  </cite>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom stats strip */}
      <section className="bg-paper-100 border-y border-ink/[0.08]">
        <div className="mx-auto max-w-[1440px] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-ink/[0.08]">
          {[
            { v: "30+", l: "Trenerów" },
            { v: "4.2M zł", l: "Wygenerowanego przychodu" },
            { v: "3.7×", l: "Średni wzrost ROAS" },
            { v: "92%", l: "Klientów przedłuża współpracę" },
          ].map((s) => (
            <div
              key={s.l}
              className="flex flex-col items-center justify-center gap-1 px-6 py-10 text-center"
            >
              <span className="font-display text-[32px] md:text-[40px] tracking-[-0.02em] text-ink leading-none">
                {s.v}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55 mt-2">
                {s.l}
              </span>
            </div>
          ))}
        </div>
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
    </>
  );
}
