import Link from "next/link";

export default function CtaWithQuote() {
  return (
    <section className="bg-paper px-6 md:px-12 lg:px-16 py-24 md:py-36 border-t border-ink/[0.08]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Quote side */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
              / Opinia
            </span>
            <blockquote className="mt-5">
              <p className="font-display text-[clamp(24px,3.2vw,36px)] leading-[1.2] text-ink">
                „Adam wszedł i poukładał wszystko: ofertę, lejek, reklamy.
                Cztery miesiące i 3× obrót. Bez ściemy."
              </p>
              <cite className="mt-6 flex items-center gap-3 not-italic text-[13px] text-ink/70">
                <span className="h-px w-8 bg-ink/30" />
                <strong className="font-medium text-ink">Olivia D.</strong>
                <span className="text-ink/40">·</span>
                <span>Coach online, trening kobiet</span>
              </cite>
            </blockquote>
          </div>

          {/* CTA side */}
          <div className="lg:col-span-5 lg:border-l lg:border-ink/[0.08] lg:pl-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
              / Następny krok
            </span>
            <h2 className="mt-5 font-display text-[clamp(28px,3.6vw,40px)] text-ink leading-[1.05]">
              Sprawdźmy, czy GrowthOS<span className="tm">™</span> pasuje do Twojego biznesu.
            </h2>
            <p className="mt-5 text-[14px] leading-[1.6] text-ink/70 max-w-sm">
              45 minut, bezpłatnie. Wychodzisz z 2-3 hipotezami wzrostu —
              niezależnie od tego, czy podejmiemy współpracę.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-medium leading-none text-paper hover:opacity-90 active:scale-[0.97] transition-[opacity,scale]"
            >
              Umów demo systemu →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
