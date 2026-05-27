import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubpageCta from "@/components/SubpageCta";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "Proces — Adam | Growth Partner",
  description:
    "Jak wygląda współpraca: od pierwszej rozmowy, przez audyt i 90-dniowy plan, aż po skalowanie. Tydzień po tygodniu.",
};

const phases = [
  {
    range: "Dni 1–7",
    title: "Diagnoza",
    body:
      "Audyt biznesu od piwnicy po dach: oferta, marketing, sprzedaż, finanse, klient. Robię to sam, nie wysyłam Ci 30 ankiet do wypełnienia. Wyjście: raport co działa, co przeszkadza, gdzie jest największa dźwignia.",
    deliverables: [
      "30+ stronicowy audyt PDF",
      "Mapa lejka „as-is\" i „to-be\"",
      "Lista 10 hipotez wzrostu",
    ],
  },
  {
    range: "Dni 8–21",
    title: "Strategia + plan 90 dni",
    body:
      "Wspólnie wybieramy 3 najważniejsze dźwignie. Każda ma cel, taktyki, KPI i tydzień startu. Plan ląduje w jednym dokumencie — Ty i ja czytamy go w ten sam sposób.",
    deliverables: [
      "Roadmap 90 dni (Gantt)",
      "Cele kwartalne (przychód, leady, ROAS)",
      "Lista narzędzi i integracji",
    ],
  },
  {
    range: "Dni 22–45",
    title: "Wdrożenie fundamentu",
    body:
      "Stawiamy infrastrukturę: pozycjonowanie, oferta, landing, lejek, kalendarz, piksele, pierwsze kampanie. To miesiąc realnej roboty — nie slajdów. Pracujemy w sprintach tygodniowych.",
    deliverables: [
      "Landing + kalendarz live",
      "5 sztuk core content (rolki/long)",
      "Pierwsze kampanie Meta + Google",
    ],
  },
  {
    range: "Dni 46–90",
    title: "Optymalizacja i skalowanie",
    body:
      "Co tydzień: analiza, hipoteza, test, wnioski. Co miesiąc: review strategiczne i decyzja budżetowa. Skalujemy to, co działa; ucinamy to, co nie. Bez przywiązań i bez „intuicji\".",
    deliverables: [
      "Tygodniowe loomy + raport",
      "Miesięczny strategy call",
      "Kwartalna prezentacja wyników",
    ],
  },
  {
    range: "Po 90 dniach",
    title: "Partnerstwo długoterminowe",
    body:
      "Albo zamykamy współpracę z czystym sumieniem (system działa, Ty masz dokumenty), albo wchodzimy w długi cykl: 6–12 miesięcy, focus na skalę i nowe produkty.",
    deliverables: [
      "Dokumentacja i SOPs",
      "Plan na kolejny kwartał",
      "Decyzja: scale / sunset",
    ],
  },
];

const principles = [
  {
    title: "Decyzje na bazie danych, nie na bazie wibracji.",
    body: "Każda hipoteza ma metrykę i deadline. Nie wierzymy „w gut feel\" — wierzymy w cykle test-measure-decide.",
  },
  {
    title: "Twój czas jest święty.",
    body: "Maksymalnie 1 godzina calli tygodniowo. Cała reszta async: Loomy, dokumenty, krótkie wiadomości.",
  },
  {
    title: "Bez korpo-bełkotu.",
    body: "Raporty po ludzku. Wnioski najpierw, dane potem. Nigdy odwrotnie.",
  },
  {
    title: "Wynagrodzenie powiązane z wynikiem.",
    body: "Duża część stawki to procent od wzrostu, który razem wygenerujemy. Skin in the game po obu stronach.",
  },
];

export default function ProcesPage() {
  return (
    <>
      <PageHero
        eyebrow="02 — Proces"
        title={
          <>
            Tydzień po tygodniu.{" "}
            <span className="italic font-light text-ink/70">Bez slajdów, bez ściemy.</span>
          </>
        }
        subtitle="Jeden flow od pierwszej rozmowy do skalowania. Wiesz dokładnie co robimy, dlaczego, i jaki jest deadline."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2400&q=80&auto=format&fit=crop"
      />

      {/* Timeline */}
      <ScrollFade as="section" className="bg-paper px-5 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-32">
        <div className="mx-auto max-w-[1100px]">
          <div className="relative flex flex-col gap-12 sm:gap-16 md:gap-24">
            {/* Vertical line */}
            <div className="absolute left-[24px] md:left-[24px] top-3 bottom-3 w-px bg-ink/15 hidden md:block" />

            {phases.map((p, i) => (
              <div
                key={p.range}
                className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 sm:gap-6 md:gap-12"
              >
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                  <span className="relative z-10 inline-flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-ink text-paper font-mono text-[13px] sm:text-[14px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-ink/55 md:mt-2">
                    {p.range}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-[clamp(26px,5.4vw,52px)] text-ink leading-[1.04] tracking-[-0.035em] [text-wrap:balance]">
                    {p.title}
                  </h2>
                  <p className="mt-4 sm:mt-5 max-w-[640px] text-[14.5px] sm:text-[15px] md:text-base leading-[1.6] sm:leading-[1.65] text-ink/75 [text-wrap:pretty]">
                    {p.body}
                  </p>
                  <div className="mt-6 sm:mt-7 inline-flex flex-col gap-2 rounded-2xl bg-ink/[0.04] border border-ink/[0.06] p-4 sm:p-5 w-full sm:w-auto">
                    <span className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink/55">
                      Co dostajesz
                    </span>
                    <ul className="flex flex-col gap-1.5">
                      {p.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-[13.5px] sm:text-[14px] text-ink/85 leading-[1.5]"
                        >
                          <span className="mt-[7px] sm:mt-[8px] inline-block h-[4px] w-[4px] rounded-full bg-ink/60 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollFade>

      {/* Principles */}
      <ScrollFade as="section" className="bg-[#0a0a0a] px-5 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-paper/55">
              03 — Zasady
            </span>
            <h2 className="mt-3 sm:mt-4 font-display text-[clamp(28px,5.4vw,56px)] text-paper leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">
              Jak naprawdę pracujemy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/[0.08] rounded-2xl overflow-hidden">
            {principles.map((pr, i) => (
              <div
                key={pr.title}
                className="bg-[#0a0a0a] p-6 sm:p-8 md:p-10 flex flex-col gap-3"
              >
                <span className="font-mono text-[11.5px] sm:text-[12px] text-paper/45">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[20px] sm:text-[24px] md:text-[28px] tracking-[-0.02em] text-paper leading-[1.15] [text-wrap:balance]">
                  {pr.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] leading-[1.55] sm:leading-[1.6] text-paper/65 max-w-md">
                  {pr.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollFade>

      <ScrollFade>
        <SubpageCta
          title={
            <>
              Gotowy ruszyć?{" "}
              <span className="italic font-light text-ink/70">Pierwsze 7 dni jest najtrudniejsze.</span>
            </>
          }
          subtitle="Po 45-minutowej konsultacji wiesz, czy startujemy. Większości klientów wystarcza jeden call."
        />
      </ScrollFade>
    </>
  );
}
