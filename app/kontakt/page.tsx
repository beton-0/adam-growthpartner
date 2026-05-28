import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KontaktForm from "@/components/KontaktForm";
import ScrollFade from "@/components/ScrollFade";
import PageJump from "@/components/PageJump";

export const metadata: Metadata = {
  title: "Kontakt — Adam | Growth Partner",
  description:
    "Bezpłatna 45-minutowa rozmowa. Krótki formularz kwalifikujący, potem wybór terminu. Wychodzisz z konkretnymi wnioskami niezależnie od decyzji.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="04 — Rozmowa"
        title={
          <>
            Zobaczmy,{" "}
            <span className="italic font-light text-ink/70">czy to ma sens</span>.
          </>
        }
        subtitle="45 minut, bezpłatnie. Krótki formularz (2 minuty), potem wybór terminu. Wychodzisz z konkretnymi wnioskami niezależnie od decyzji."
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=2400&q=80&auto=format&fit=crop"
      />

      <section className="bg-paper px-5 sm:px-6 md:px-12 lg:px-16 py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-[1000px]">
          <KontaktForm />
        </div>
      </section>

      <section className="bg-paper-100 border-t border-ink/[0.08] px-5 sm:px-6 md:px-12 lg:px-16 py-14 sm:py-20 md:py-24">
        <ScrollFade>
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {[
            {
              t: "Krótko",
              d: "45 minut, bez ciśnienia, bez slajdów sprzedażowych.",
            },
            {
              t: "Konkretnie",
              d: "Wychodzisz z 2-3 hipotezami wzrostu, których możesz użyć od razu.",
            },
            {
              t: "Bez zobowiązań",
              d: "Jeśli nie pasujemy — polecę kogoś, kto może pasować lepiej.",
            },
          ].map((b) => (
            <div key={b.t} className="flex flex-col gap-1.5 sm:gap-2">
              <span className="font-display text-[20px] sm:text-[22px] tracking-[-0.02em] text-ink leading-[1.15]">
                {b.t}
              </span>
              <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-ink/70 max-w-xs">
                {b.d}
              </p>
            </div>
          ))}
        </div>
        </ScrollFade>
      </section>

      <PageJump
        number="01"
        label="Strona główna"
        href="/"
        variant="dark"
        subtitle="Wróć do startu. Zobacz cały system w 30 sekund — od hero przez moduły po wyniki."
      />
    </>
  );
}
