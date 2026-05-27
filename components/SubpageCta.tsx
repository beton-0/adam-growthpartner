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
    <section className="bg-paper px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-ink/[0.08]">
      <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(36px,5vw,56px)] text-ink">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 max-w-md text-[15px] md:text-base leading-[1.6] text-ink/70">
              {subtitle}
            </p>
          )}
        </div>
        <Link
          href="/kontakt"
          className="self-start md:self-auto inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-medium leading-none text-paper hover:opacity-90 active:scale-[0.97] transition-[opacity,scale]"
        >
          {cta} →
        </Link>
      </div>
    </section>
  );
}
