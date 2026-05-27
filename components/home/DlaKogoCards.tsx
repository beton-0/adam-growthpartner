import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    eyebrow: "01",
    title: "Trener personalny / studio",
    description:
      "Klienci 1:1, mała grupa, własne studio. Buduję lokalny lejek, który zapełnia harmonogram bez wyrywania się z treningów.",
    points: [
      "Lokalne reklamy + landing",
      "System poleceń i retencji",
      "Pozycjonowanie premium",
    ],
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&auto=format&fit=crop",
    alt: "Trener pracujący z klientem w studio",
  },
  {
    eyebrow: "02",
    title: "Trener online / coaching",
    description:
      "Plany online, grupy, kursy. Skaluję sprzedaż przez treści, evergreen lejki i prosty stack, który nie wymaga sztabu ludzi.",
    points: [
      "Content engine na IG/TikTok",
      "Evergreen webinar / lejek",
      "Sprzedaż wysokich pakietów",
    ],
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80&auto=format&fit=crop",
    alt: "Trener online przy laptopie",
  },
];

export default function DlaKogoCards() {
  return (
    <section className="relative bg-paper px-6 md:px-12 lg:px-16 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
            02 — Dla kogo
          </span>
          <h2 className="mt-4 font-display text-[clamp(36px,5.5vw,64px)] text-ink">
            Dwa modele biznesu,{" "}
            <span className="italic font-light">jedna mechanika wzrostu</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-[24px] bg-card aspect-[592/720] md:aspect-[592/640]"
            >
              <Image
                src={c.img}
                alt={c.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />
              <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                <span className="text-[11px] uppercase tracking-[0.22em] text-paper/70">
                  {c.eyebrow}
                </span>
                <div>
                  <h3 className="font-serif text-[clamp(28px,3.4vw,40px)] leading-[1.05] tracking-[-0.02em] text-paper">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[14px] leading-[1.55] text-paper/85">
                    {c.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-1.5">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-[13px] text-paper/80"
                      >
                        <span className="mt-[7px] inline-block h-[3px] w-[3px] rounded-full bg-paper/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/uslugi"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-paper underline decoration-paper/40 underline-offset-4 hover:decoration-paper transition-colors"
                  >
                    Zobacz usługi →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
