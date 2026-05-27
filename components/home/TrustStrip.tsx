export default function TrustStrip() {
  const stats = [
    { value: "8+", label: "Lat w marketingu" },
    { value: "30+", label: "Trenerów" },
    { value: "4.2M zł", label: "Wygenerowanego przychodu" },
    { value: "3.7×", label: "Średni wzrost ROAS" },
  ];

  return (
    <section className="border-y border-ink/[0.08] bg-paper-100">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch divide-y divide-ink/[0.08] sm:flex-row sm:divide-y-0 sm:divide-x">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-1 flex-col items-center justify-center gap-1 px-6 py-8 text-center"
          >
            <span className="font-serif text-[28px] md:text-[32px] tracking-[-0.02em] text-ink">
              {s.value}
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-ink/55">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
