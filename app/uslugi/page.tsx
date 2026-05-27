import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubpageCta from "@/components/SubpageCta";
import ScrollFade from "@/components/ScrollFade";
import PageJump from "@/components/PageJump";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Usługi — Adam | Growth Partner",
  description:
    "Cztery klocki, jeden system: pozycjonowanie, content engine, lejek sprzedaży i kampanie płatne. Sprawdź, jak buduję sprzedaż dla trenerów.",
};

const services = [
  {
    no: "01",
    title: "Pozycjonowanie & oferta",
    body: "Diagnozuję, gdzie jesteś dzisiaj, i ustawiam Cię w niszy, w której nie konkurujesz ceną. Klarowna obietnica, drabinka cenowa, archetyp marki i język, który mówi do właściwego klienta — nie do „wszystkich, którzy chcą się ruszać\".",
    bullets: [
      "Audyt aktualnej oferty i pozycjonowania",
      "Mapa konkurencji i wyróżników",
      "Drabinka produktów (od leadmagnetu po premium)",
      "Język marki: tagline, manifest, FAQ",
    ],
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80&auto=format&fit=crop",
  },
  {
    no: "02",
    title: "Content engine (IG / TikTok / YT)",
    body: "Treści, które przyciągają właściwego klienta i podgrzewają go do zakupu — bez tańczenia z trendami, bez przepalania się. Stawiam Ci powtarzalny system produkcji: rolki, posty, długie formy, e-maile.",
    bullets: [
      "Strategia treści 90-dniowa",
      "Hooki, struktury, formaty (oparte na danych)",
      "Workflow produkcji (Ty nagrywasz 1 dzień / mies.)",
      "Newsletter i nurture",
    ],
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&q=80&auto=format&fit=crop",
  },
  {
    no: "03",
    title: "Lejek & kalendarz rozmów",
    body: "Spójny lejek od pierwszego dotknięcia (rolka, reklama, polecenie) do podpisanej umowy. Landing page, formularz kwalifikujący, kalendarz, automatyczne potwierdzenia, sekwencje przypomnień — wszystko, żeby leady się nie wykruszały.",
    bullets: [
      "Landing + formularz kwalifikujący",
      "Calendly / Cal.com z workflowami",
      "Sekwencje mailowe + SMS przypomnienia",
      "CRM lite (Notion / Airtable / HubSpot)",
    ],
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80&auto=format&fit=crop",
  },
  {
    no: "04",
    title: "Reklamy płatne (Meta + Google)",
    body: "Kampanie ustawione na konkretny dochód, nie zasięg. Testuję hipotezy tygodniowo, raportuję po ludzku, decyzje budżetowe podejmujemy razem. Bez „dashboardów wstydu\" i agencyjnego bełkotu.",
    bullets: [
      "Setup pikseli, eventów, konwersji",
      "Struktura kampanii (TOF / MOF / BOF)",
      "Iteracje kreacji co tydzień",
      "Tygodniowe loomy + miesięczny review",
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop",
  },
];

const models = [
  {
    name: "Partner",
    price: "Od 4.5 tys. zł / mies.",
    sub: "+ % od przychodu",
    description:
      "Pełna odpowiedzialność za wzrost. Strategia, egzekucja, raporty, decyzje budżetowe — wchodzę w Twój biznes jak współwłaściciel.",
    fits: ["Trener z przychodem 15+ tys. zł/mies.", "Chce skalować do 50–100 tys. zł", "Gotowy delegować marketing"],
  },
  {
    name: "Konsulting",
    price: "Od 2 tys. zł / mies.",
    description:
      "Strategiczny sparing 1:1 i workflow produkcji. Ty wykonujesz, ja prowadzę — co tydzień call + Loom feedback.",
    fits: ["Trener już prowadzi marketing", "Brakuje strategii i kierunku", "Chce zachować kontrolę"],
  },
  {
    name: "Audyt + Plan 90 dni",
    price: "Jednorazowo 6 tys. zł",
    description:
      "Pełen audyt biznesu i 90-dniowy plan działań. Praca w ~10 dni, dokument 30+ stron + 3 sesje wdrożeniowe.",
    fits: ["Trener przed decyzją inwestycyjną", "Chce uporządkować chaos", "Bez długoterminowej współpracy"],
  },
];

export default function UslugiPage() {
  return (
    <>
      <PageHero
        eyebrow="01 — Usługi"
        title={
          <>
            Cztery klocki,{" "}
            <span className="italic font-light text-ink/70">jeden system</span>.
          </>
        }
        subtitle="Każdy element zaprojektowany tak, żeby działał z pozostałymi. Możesz wziąć cały silnik albo wybrane moduły — pod Twój etap biznesu."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2400&q=80&auto=format&fit=crop"
      />

      {/* Services list */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-32 bg-paper">
        <ScrollFade>
          <div className="mx-auto max-w-[1440px] flex flex-col gap-16 sm:gap-20 md:gap-32">
          {services.map((s, i) => (
            <article
              key={s.no}
              className={`grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-6 relative aspect-[16/11] md:aspect-[592/440] overflow-hidden rounded-2xl sm:rounded-[24px]">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center justify-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-paper/95 text-ink text-[10.5px] sm:text-[11px] font-mono">
                  {s.no}
                </div>
              </div>
              <div className="md:col-span-6 max-w-[520px]">
                <h2 className="font-display text-[clamp(26px,5.2vw,52px)] text-ink leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">
                  {s.title}
                </h2>
                <p className="mt-4 sm:mt-5 text-[14.5px] sm:text-[15px] md:text-base leading-[1.6] sm:leading-[1.65] text-ink/75 [text-wrap:pretty]">
                  {s.body}
                </p>
                <ul className="mt-5 sm:mt-7 grid grid-cols-1 gap-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[13.5px] sm:text-[14px] text-ink/80 leading-[1.5]"
                    >
                      <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-ink/60 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        </ScrollFade>
      </section>

      {/* Models / Packages */}
      <section className="bg-paper-100 px-5 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-32 border-y border-ink/[0.08]">
        <ScrollFade>
          <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-ink/55">
              02 — Modele współpracy
            </span>
            <h2 className="mt-3 sm:mt-4 font-display text-[clamp(28px,5.2vw,56px)] text-ink leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">
              Trzy formaty.{" "}
              <span className="text-ink/55">Wybieramy razem.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {models.map((m, i) => (
              <div
                key={m.name}
                className={`flex flex-col gap-5 sm:gap-6 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 ${
                  i === 0
                    ? "bg-ink text-paper"
                    : "bg-paper border border-ink/[0.08]"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] ${
                      i === 0 ? "text-paper/60" : "text-ink/55"
                    }`}
                  >
                    Model {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[24px] sm:text-[28px] tracking-[-0.02em] leading-[1.1]">
                    {m.name}
                  </h3>
                </div>
                <div>
                  <div className="font-display text-[22px] sm:text-[26px] md:text-[28px] leading-[1.05] tracking-[-0.02em] [text-wrap:balance]">
                    {m.price}
                  </div>
                  {m.sub && (
                    <div
                      className={`mt-1 text-sm ${
                        i === 0 ? "text-paper/60" : "text-ink/55"
                      }`}
                    >
                      {m.sub}
                    </div>
                  )}
                </div>
                <p
                  className={`text-[14px] leading-[1.6] ${
                    i === 0 ? "text-paper/80" : "text-ink/75"
                  }`}
                >
                  {m.description}
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {m.fits.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-[13px] ${
                        i === 0 ? "text-paper/85" : "text-ink/80"
                      }`}
                    >
                      <span
                        className={`mt-[7px] inline-block h-[3px] w-[3px] rounded-full shrink-0 ${
                          i === 0 ? "bg-paper/60" : "bg-ink/50"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </div>
        </ScrollFade>
      </section>

      <SubpageCta
        title={
          <>
            Nie wiesz,{" "}
            <span className="italic font-light text-ink/70">który format dla Ciebie?</span>
          </>
        }
        subtitle="Dobierzemy go razem po 45-minutowej konsultacji. Bez ciśnienia, bez slajdów sprzedażowych."
      />

      <PageJump
        number="03"
        label="Proces"
        href="/proces"
        subtitle="Tydzień po tygodniu — od audytu po skalowanie. Pełen flow współpracy, bez slajdów i bez ściemy."
      />
    </>
  );
}
