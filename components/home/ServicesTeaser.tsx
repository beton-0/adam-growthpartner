import Link from "next/link";

const services = [
  {
    no: "01",
    title: "Pozycjonowanie i oferta",
    body: "Klarowna nisza, mocna obietnica, drabinka cenowa. Bez tego cała reklama spala się na drzwiach.",
  },
  {
    no: "02",
    title: "Content engine (IG / TikTok / YT)",
    body: "Treści, które przyciągają właściwych ludzi i podgrzewają do zakupu — bez tańczenia z trendami.",
  },
  {
    no: "03",
    title: "Lejek i kalendarz rozmów",
    body: "Landing, formularz kwalifikujący, Calendly, sekwencje mailowe i przypomnienia. Spójny, prosty, działający.",
  },
  {
    no: "04",
    title: "Reklamy płatne (Meta + Google)",
    body: "Kampanie nastawione na konkretne dochody, a nie zasięgi. Tygodniowe iteracje i raporty po ludzku.",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="bg-[#14161A] px-6 md:px-12 lg:px-16 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-paper/55">
              03 — Co dostajesz
            </span>
            <h2 className="mt-4 font-display text-[clamp(36px,5.5vw,64px)] text-paper">
              Cztery klocki,{" "}
              <span className="italic font-light text-paper/70">jeden system</span>.
            </h2>
          </div>
          <Link
            href="/uslugi"
            className="self-start md:self-auto inline-flex items-center justify-center rounded-full bg-paper px-5 py-3 text-sm font-medium leading-none text-ink hover:opacity-90 active:scale-[0.97] transition-[opacity,scale]"
          >
            Pełen zakres usług →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/[0.08] rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div
              key={s.no}
              className="bg-[#14161A] p-8 md:p-10 flex flex-col gap-3 hover:bg-[#191b20] transition-colors"
            >
              <span className="font-mono text-[12px] text-paper/45">{s.no}</span>
              <h3 className="font-serif text-[24px] md:text-[28px] tracking-[-0.02em] text-paper">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-paper/65 max-w-md">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
