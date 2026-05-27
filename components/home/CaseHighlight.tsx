import Image from "next/image";
import Link from "next/link";

export default function CaseHighlight() {
  return (
    <section className="bg-paper px-5 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-baseline justify-between mb-8 sm:mb-12 gap-4">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/55">
            / Case 01
          </span>
          <Link
            href="/wyniki"
            className="text-[13px] sm:text-sm text-ink/70 hover:text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          >
            Wszystkie case studies →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-2xl sm:rounded-3xl bg-ink/5">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=2000&q=80&auto=format&fit=crop"
              alt="Coach online — wzrost MRR"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-6 max-w-[560px]">
            <div className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/55 mb-3 sm:mb-4">
              Coach online · trening kobiet
            </div>
            <h2 className="font-display text-[clamp(34px,8vw,72px)] text-ink leading-[0.98] tracking-[-0.035em] [text-wrap:balance]">
              9 tys.{" "}
              <span className="text-ink/30">→</span>{" "}
              37 tys. zł{" "}
              <span className="font-mono text-[0.4em] sm:text-[0.5em] uppercase tracking-[0.15em] text-ink/55 align-top">
                MRR
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 max-w-md text-[14.5px] sm:text-[15px] leading-[1.6] sm:leading-[1.65] text-ink/75">
              4 miesiące. Spójny lejek, evergreen webinar, kampanie Meta i
              system poleceń. Bez zwiększania budżetu reklamowego.
            </p>

            {/* Metrics */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 border-y border-ink/[0.1] divide-x divide-ink/[0.08]">
              {[
                { v: "+312%", l: "MRR" },
                { v: "2.4×", l: "CLV" },
                { v: "78%", l: "Show-up" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex flex-col items-start gap-1 py-4 sm:py-5 px-3 sm:px-4 first:pl-0"
                >
                  <span className="font-display text-[18px] sm:text-[22px] md:text-[26px] leading-none tracking-[-0.02em] text-ink">
                    {s.v}
                  </span>
                  <span className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink/55">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
