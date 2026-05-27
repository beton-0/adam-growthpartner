import Link from "next/link";

export default function SubpageCta({
  title,
  subtitle,
  cta = "Umów bezpłatną rozmowę",
}: {
  title: React.ReactNode;
  subtitle?: string;
  cta?: string;
}) {
  return (
    <section className="bg-paper px-5 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-24 md:py-32 border-t border-ink/[0.08]">
      <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row md:items-end md:justify-between gap-8 sm:gap-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(28px,5.4vw,56px)] text-ink leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 sm:mt-5 max-w-md text-[14.5px] sm:text-[15px] md:text-base leading-[1.6] text-ink/70 [text-wrap:pretty]">
              {subtitle}
            </p>
          )}
        </div>
        <Link
          href="/kontakt"
          className="self-start md:self-auto inline-flex items-center justify-center min-h-[52px] rounded-full bg-ink px-6 py-4 text-[15px] sm:text-sm font-medium leading-none text-paper hover:opacity-90 active:scale-[0.97] transition-[opacity,scale]"
        >
          {cta} →
        </Link>
      </div>
    </section>
  );
}
