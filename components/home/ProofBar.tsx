export default function ProofBar() {
  const stats = [
    { value: "+312%", label: "Średni wzrost MRR" },
    { value: "14 dni", label: "Od startu do pierwszych leadów" },
    { value: "30+", label: "Wdrożonych systemów" },
  ];

  return (
    <section className="border-y border-ink/[0.08] bg-paper">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/[0.08]">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-baseline justify-between sm:justify-start sm:flex-col sm:items-start gap-2 sm:gap-1 px-6 md:px-10 py-7"
          >
            <span className="font-display text-[32px] md:text-[40px] leading-none tracking-[-0.02em] text-ink">
              {s.value}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55 sm:mt-2">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
