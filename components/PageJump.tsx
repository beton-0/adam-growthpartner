import Link from "next/link";

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
 * Hover: arrow translates, label slightly slides.
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
      className={`group relative block overflow-hidden border-t ${
        isDark
          ? "bg-[#0a0a0a] text-paper border-paper/[0.08]"
          : "bg-paper-100 text-ink border-ink/[0.08]"
      } px-5 sm:px-6 md:px-12 lg:px-16 py-14 sm:py-20 md:py-24 transition-colors`}
    >
      {/* faint moving accent line */}
      <span
        aria-hidden
        className={`absolute inset-x-0 top-0 h-px ${
          isDark ? "bg-paper/15" : "bg-ink/15"
        } scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out`}
      />

      <div className="mx-auto max-w-[1440px] flex items-end justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 mb-5 sm:mb-7">
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

          <div className="flex items-baseline gap-3 sm:gap-5">
            <h2 className="font-display text-[clamp(40px,10vw,128px)] leading-[0.92] tracking-[-0.04em] transition-transform duration-500 ease-out group-hover:-translate-x-1 [text-wrap:balance]">
              {label}
            </h2>
            <span
              aria-hidden
              className={`flex-shrink-0 inline-flex items-center justify-center transition-all duration-500 ease-out group-hover:translate-x-2 ${
                isDark ? "text-paper/85" : "text-ink/85"
              }`}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:hidden"
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden sm:block md:hidden"
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
              <svg
                width="84"
                height="84"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden md:block"
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </span>
          </div>

          {subtitle && (
            <p
              className={`mt-5 sm:mt-7 max-w-md text-[14px] sm:text-[15px] leading-[1.6] ${
                isDark ? "text-paper/65" : "text-ink/65"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
