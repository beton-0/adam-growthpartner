import Link from "next/link";

const modules = [
  {
    id: "01",
    name: "Acquisition",
    title: "Lejek + reklamy",
    desc: "Landing, formularz kwalifikujący, kalendarz i kampanie Meta + Google ustawione na konkretne zł, nie na lajki.",
    metric: "ROAS 3.7×",
  },
  {
    id: "02",
    name: "Content",
    title: "Content engine",
    desc: "Powtarzalny system produkcji rolek, postów i e-maili. Ty nagrywasz raz w miesiącu — system dystrybuuje codziennie.",
    metric: "30+ assetów / mies.",
  },
  {
    id: "03",
    name: "Sales",
    title: "Rozmowy + zamknięcia",
    desc: "Skrypty, sekwencje, automatyczne przypomnienia. Leady nie wykruszają się między formularzem a podpisem.",
    metric: "show-up 78%",
  },
  {
    id: "04",
    name: "Retention",
    title: "LTV + polecenia",
    desc: "Onboarding, NPS, system poleceń. Każdy klient = potencjalnie 2-3 kolejnych bez wydania złotówki na reklamę.",
    metric: "CLV ×2.4",
  },
];

export default function GrowthOSModules() {
  return (
    <section className="bg-[#0a0a0a] text-paper px-6 md:px-12 lg:px-16 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/55">
              <span className="h-px w-8 bg-paper/30" />
              GrowthOS<span className="tm">™</span> / Architektura
            </span>
            <h2 className="mt-5 font-display text-[clamp(36px,5.4vw,64px)] text-paper">
              Cztery moduły.{" "}
              <span className="text-paper/50">Jeden system.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.6] text-paper/65">
              Każdy moduł działa samodzielnie. Razem tworzą maszynę, która
              pozyskuje, sprzedaje i utrzymuje klientów — bez Ciebie w środku.
            </p>
          </div>
          <Link
            href="/uslugi"
            className="self-start md:self-auto inline-flex items-center gap-2 rounded-full bg-paper text-ink px-5 py-3 text-sm font-medium hover:opacity-90 active:scale-[0.97] transition-[opacity,scale]"
          >
            Architektura całego systemu →
          </Link>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/[0.08] rounded-2xl overflow-hidden">
          {modules.map((m) => (
            <div
              key={m.id}
              className="group relative bg-[#0a0a0a] hover:bg-[#101010] transition-colors p-7 md:p-8 flex flex-col gap-5 min-h-[280px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-paper/40">
                  / {m.id}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">
                  {m.name}
                </span>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-display text-[22px] md:text-[24px] tracking-[-0.02em] text-paper">
                  {m.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-paper/65">
                  {m.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-paper/10">
                <span className="font-mono text-[12px] text-paper/45">
                  metryka
                </span>
                <span className="font-mono text-[13px] text-paper">
                  {m.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
