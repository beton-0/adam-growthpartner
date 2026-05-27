import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    tag: "Trener online — kobiety / siłownia",
    metric: "+312%",
    metricLabel: "wzrost MRR w 4 mies.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80&auto=format&fit=crop",
  },
  {
    tag: "Studio personalne — Wrocław",
    metric: "+87",
    metricLabel: "klientów netto / 6 mies.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80&auto=format&fit=crop",
  },
];

export default function WynikiTeaser() {
  return (
    <section className="bg-paper px-6 md:px-12 lg:px-16 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
              05 — Wyniki
            </span>
            <h2 className="mt-4 font-display text-[clamp(36px,5.5vw,64px)] text-ink">
              Liczby z prawdziwych projektów.{" "}
              <span className="italic font-light text-ink/70">Nie ze szkolenia.</span>
            </h2>
          </div>
          <Link
            href="/wyniki"
            className="self-start md:self-auto inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium leading-none text-paper hover:opacity-90 active:scale-[0.97] transition-[opacity,scale]"
          >
            Wszystkie case studies →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((f) => (
            <article
              key={f.tag}
              className="group relative aspect-[592/440] overflow-hidden rounded-[24px]"
            >
              <Image
                src={f.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
                <span className="text-[11px] uppercase tracking-[0.22em] text-paper/80">
                  {f.tag}
                </span>
                <div>
                  <div className="font-display text-[clamp(48px,7vw,80px)] leading-none text-paper">
                    {f.metric}
                  </div>
                  <div className="mt-2 text-[14px] text-paper/80">
                    {f.metricLabel}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
