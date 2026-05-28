"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  number: string; // "02"
  label: string; // "Usługi"
  subtitle?: string;
  href: string;
  variant?: "paper" | "dark";
};

/**
 * Full-width clickable banner at the bottom of each page that hands
 * the user off to the next page in the natural reading order.
 *
 * Subtle continuous arrow motion + "Przejdź dalej" label, with
 * stronger hover state.
 */
export default function PageJump({
  number,
  label,
  subtitle,
  href,
  variant = "paper",
}: Props) {
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden ${
        isDark
          ? "bg-[#0a0a0a] text-paper"
          : "bg-paper-100 text-ink border-t border-ink/[0.08]"
      } px-5 sm:px-6 md:px-12 lg:px-16 py-14 sm:py-20 md:py-24 transition-colors`}
    >
      {/* faint moving accent line on hover */}
      <span
        aria-hidden
        className={`absolute inset-x-0 top-0 h-px ${
          isDark ? "bg-paper/15" : "bg-ink/15"
        } scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out`}
      />

      {/* Background dot pattern on dark variant for ambient depth */}
      {isDark && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      )}

      <div className="relative mx-auto max-w-[1440px]">
        {/* Top row: meta + "przejdź dalej" hint */}
        <div className="flex items-center justify-between mb-7 sm:mb-9">
          <div className="flex items-center gap-3">
            <span
              className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] ${
                isDark ? "text-paper/55" : "text-ink/55"
              }`}
            >
              / Dalej
            </span>
            <span
              className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] ${
                isDark ? "text-paper/35" : "text-ink/35"
              }`}
            >
              · {number}
            </span>
          </div>

          {/* Animated "Przejdź dalej" hint */}
          <motion.span
            className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 ${
              isDark ? "text-paper/65" : "text-ink/65"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${
                  isDark ? "bg-paper" : "bg-ink"
                }`}
              />
              <span
                className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                  isDark ? "bg-paper" : "bg-ink"
                }`}
              />
            </span>
            Przejdź dalej
          </motion.span>
        </div>

        {/* Big label + animated arrow */}
        <div className="flex items-baseline gap-3 sm:gap-5">
          <h2 className="font-display text-[clamp(40px,10vw,128px)] leading-[0.92] tracking-[-0.04em] transition-transform duration-500 ease-out group-hover:-translate-x-1 [text-wrap:balance]">
            {label}
          </h2>
          <motion.span
            aria-hidden
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
            className={`flex-shrink-0 inline-flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 ${
              isDark ? "text-paper" : "text-ink"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[36px] h-[36px] sm:w-[56px] sm:h-[56px] md:w-[84px] md:h-[84px]"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </motion.span>
        </div>

        {subtitle && (
          <p
            className={`mt-6 sm:mt-8 max-w-md text-[14px] sm:text-[15px] leading-[1.6] ${
              isDark ? "text-paper/65" : "text-ink/65"
            } [text-wrap:pretty]`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
