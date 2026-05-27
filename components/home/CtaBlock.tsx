import Image from "next/image";
import Link from "next/link";

export default function CtaBlock() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="relative mx-auto flex aspect-[16/10] md:aspect-[16/8] w-full max-w-[1440px] items-center justify-center overflow-hidden rounded-[32px]">
        <Image
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=2400&q=80&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center md:gap-10 md:px-12 max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.22em] text-paper/80">
            08 — Rozmowa
          </span>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] text-paper">
            Zobaczmy,{" "}
            <span className="italic font-light text-paper/85">czy to ma sens</span>.
          </h2>
          <p className="max-w-[520px] text-[15px] md:text-base leading-[1.6] text-paper/80">
            45 minut, bezpłatnie. Wyjdziesz z konkretnymi wnioskami niezależnie od
            tego, czy podejmiemy współpracę.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-paper px-7 py-4 text-sm font-medium leading-none text-ink hover:opacity-90 active:scale-[0.97] transition-[opacity,scale]"
          >
            Umów bezpłatną rozmowę →
          </Link>
        </div>
      </div>
    </section>
  );
}
