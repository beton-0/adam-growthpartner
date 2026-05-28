import Link from "next/link";
import PulseCTA from "@/components/PulseCTA";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-paper px-5 sm:px-6 md:px-12 lg:px-16 pt-14 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20 border-t border-ink/[0.08]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-10 sm:gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-start gap-5 sm:gap-6 max-w-md">
          <Link
            href="/"
            className="inline-flex items-baseline gap-2 text-ink min-h-[44px] py-2 -my-2"
          >
            <span className="font-display text-[24px] sm:text-[26px] leading-none tracking-[-0.035em] font-semibold">
              GrowthOS<span className="tm">™</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
              by Adam
            </span>
          </Link>
          <p className="text-[14px] sm:text-[15px] leading-[1.55] text-ink/70 [text-wrap:pretty]">
            System sprzedaży dla trenerów. Acquisition, content, sales,
            retention — cztery moduły, jeden silnik, mierzalne wyniki.
          </p>
          <div className="mt-1">
            <PulseCTA href="/kontakt" size="md">
              Umów konsultację strategiczną
            </PulseCTA>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-8 sm:gap-12 lg:gap-20">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-mono text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-ink/55">
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
                className="text-[14px] sm:text-sm text-ink/65 hover:text-ink transition-colors min-h-[36px] flex items-center"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-mono text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-ink/55">
              Kontakt
            </h3>
            <a
              href="mailto:hello@adamgrowth.pl"
              className="text-[14px] sm:text-sm text-ink/65 hover:text-ink transition-colors min-h-[36px] flex items-center break-all"
            >
              hello@adamgrowth.pl
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] sm:text-sm text-ink/65 hover:text-ink transition-colors min-h-[36px] flex items-center"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] sm:text-sm text-ink/65 hover:text-ink transition-colors min-h-[36px] flex items-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 sm:mt-16 flex w-full max-w-[1440px] border-t border-ink/[0.08] pt-5 sm:pt-6 text-[10.5px] sm:text-xs text-ink/55">
        <p className="font-mono">
          © {new Date().getFullYear()} GrowthOS<span className="tm">™</span> · Adam Gawrysiak.
        </p>
      </div>
    </footer>
  );
}
