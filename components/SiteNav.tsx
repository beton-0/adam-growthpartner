"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/uslugi", label: "Usługi" },
  { href: "/proces", label: "Proces" },
  { href: "/wyniki", label: "Wyniki" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteNav({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = variant === "overlay" && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 h-[60px] sm:h-[64px] transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-paper/90 backdrop-blur-md border-b border-ink/[0.06]"
      }`}
    >
      <Link
        href="/"
        aria-label="GrowthOS — System sprzedaży dla trenerów"
        onClick={() => setOpen(false)}
        className="group inline-flex items-baseline gap-2 text-ink min-h-[44px] py-2 -my-2"
      >
        <span className="font-display text-[18px] sm:text-[20px] leading-none tracking-[-0.035em] font-semibold">
          GrowthOS<span className="tm">™</span>
        </span>
        <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
          by Adam
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-1">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`relative px-3 lg:px-4 py-2 text-sm rounded-lg transition-colors ${
                active
                  ? "text-ink"
                  : "text-ink/70 hover:text-ink hover:bg-ink/[0.04]"
              }`}
            >
              {l.label}
              {active && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-ink/60" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2">
        <Link
          href="/kontakt"
          className="hidden md:inline-flex pulse-cta relative items-center justify-center min-h-[40px] rounded-full bg-ink px-4 py-2 text-sm font-medium leading-none text-paper transition-[opacity,scale] duration-150 hover:opacity-90 active:scale-[0.97]"
        >
          Umów konsultację
        </Link>
        <button
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/[0.06] text-ink hover:bg-ink/[0.1] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — full overlay panel */}
      {open && (
        <div
          className="fixed inset-x-0 top-[60px] bottom-0 md:hidden bg-paper/98 backdrop-blur-xl border-t border-ink/[0.06] overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col px-4 sm:px-6 py-6">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 text-[18px] border-b border-ink/[0.06] last:border-0 ${
                    active ? "text-ink font-medium" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  <span>{l.label}</span>
                  <span className="font-mono text-[11px] text-ink/30">→</span>
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-6 pulse-cta inline-flex items-center justify-center min-h-[52px] rounded-full bg-ink px-6 py-4 text-[15px] font-medium text-paper"
            >
              Umów bezpłatną konsultację →
            </Link>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45 text-center">
              GrowthOS<span className="tm">™</span> · by Adam
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
