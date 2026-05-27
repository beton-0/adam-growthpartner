import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-paper px-6 md:px-12 lg:px-16 pt-20 pb-16 md:pt-28 md:pb-20 border-t border-ink/[0.08]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-start gap-6 max-w-md">
          <Link href="/" className="inline-flex items-end gap-2 text-ink">
            <span className="font-serif text-[28px] leading-none tracking-[-0.03em]">
              Adam
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55 mb-1">
              Growth Partner
            </span>
          </Link>
          <p className="font-serif text-[20px] leading-[1.35] tracking-[-0.01em] text-ink/75">
            Buduję systemy sprzedaży dla trenerów,{" "}
            <span className="italic">którzy chcą skalować</span> — bez chaosu,
            bez przepalania budżetu.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 text-sm text-ink/80 hover:text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          >
            Umów bezpłatną rozmowę →
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-20">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-[16px] font-medium tracking-[-0.01em] text-ink">
              Strony
            </h3>
            {[
              { href: "/", label: "Home" },
              { href: "/uslugi", label: "Usługi" },
              { href: "/proces", label: "Proces" },
              { href: "/wyniki", label: "Wyniki" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink/65 hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-[16px] font-medium tracking-[-0.01em] text-ink">
              Kontakt
            </h3>
            <a
              href="mailto:hello@adamgrowth.pl"
              className="text-sm text-ink/65 hover:text-ink transition-colors"
            >
              hello@adamgrowth.pl
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/65 hover:text-ink transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/65 hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex w-full max-w-[1440px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-ink/[0.08] pt-6 text-xs text-ink/55">
        <p>© {new Date().getFullYear()} Adam — Growth Partner. Wszystkie prawa zastrzeżone.</p>
        <p>
          Strona zbudowana z uwagą — Next.js, Tailwind, Framer Motion.
        </p>
      </div>
    </footer>
  );
}
