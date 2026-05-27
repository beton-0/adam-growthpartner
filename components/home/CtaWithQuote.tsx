import Link from "next/link";

export default function CtaWithQuote() {
  return (
    <section className="bg-paper px-5 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-24 md:py-32 lg:py-36 border-t border-ink/[0.08]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Quote */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/55">
              / Opinia
            </span>
            <blockquote className="mt-4 sm:mt-5">
              <p className="font-display text-[clamp(20px,4.4vw,36px)] leading-[1.22] text-ink [text-wrap:balance] tracking-[-0.025em]">
                „Adam wszedł i poukładał wszystko: ofertę, lejek, reklamy.
                Cztery miesiące i 3× obrót. Bez ściemy."
              </p>
              <cite className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 not-italic text-[12.5px] sm:text-[13px] text-ink/70">
                <span className="h-px w-6 sm:w-8 bg-ink/30" />
                <strong className="font-medium text-ink">Olivia D.</strong>
                <span className="text-ink/40">·</span>
                <span>Coach online, trening kobiet</span>
              </cite>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="lg:col-span-5 lg:border-l lg:border-ink/[0.08] lg:pl-12 pt-8 lg:pt-0 border-t lg:border-t-0 border-ink/[0.08]">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/55">
              / Następny krok
            </span>
            <h2 className="mt-4 sm:mt-5 font-display text-[clamp(24px,5vw,40px)] text-ink leading-[1.05] tracking-[-0.03em] [text-wrap:balance]">
              Sprawdźmy, czy GrowthOS<span className="tm">™</span> pasuje do Twojego biznesu.
            </h2>
            <p className="mt-4 sm:mt-5 text-[13.5px] sm:text-[14px] leading-[1.6] text-ink/70 max-w-sm">
              45 minut, bezpłatnie. Wychodzisz z 2-3 hipotezami wzrostu —
              niezależnie od tego, czy podejmiemy współpracę.
            </p>
            <Link
              href="/kontakt"
              className="mt-7 sm:mt-8 inline-flex items-center justify-center min-h-[48px] rounded-full bg-ink px-6 py-3.5 text-[15px] sm:text-sm font-medium leading-none text-paper hover:opacity-90 active:scale-[0.97] transition-[opacity,scale]"
            >
              Umów demo systemu →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
