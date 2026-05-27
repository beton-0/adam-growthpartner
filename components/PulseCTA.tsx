"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "ink" | "paper";
  size?: "md" | "lg";
  className?: string;
  pulse?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function PulseCTA({
  href,
  children,
  variant = "ink",
  size = "md",
  className = "",
  pulse = true,
  onClick,
  type = "button",
  disabled = false,
}: Props) {
  const palette =
    variant === "ink"
      ? "bg-ink text-paper hover:bg-ink/90"
      : "bg-paper text-ink hover:bg-paper/90";

  const sizing =
    size === "lg"
      ? "min-h-[56px] px-7 py-4 text-[15px]"
      : "min-h-[48px] px-6 py-3.5 text-[14.5px] sm:text-sm";

  const pulseClass = pulse
    ? variant === "ink"
      ? "pulse-cta"
      : "pulse-cta-light"
    : "";

  const base = `relative inline-flex items-center justify-center gap-2 rounded-full font-medium leading-none transition-[opacity,transform,background-color] duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:pulse-cta-none ${palette} ${sizing} ${pulseClass} ${className}`;

  const content = (
    <>
      <span className="relative inline-flex items-center gap-2">
        <SparkIcon className="w-4 h-4 opacity-90" />
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {content}
    </button>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 3L13.5 9.5L20 11L13.5 12.5L12 19L10.5 12.5L4 11L10.5 9.5L12 3Z"
        fill="currentColor"
      />
      <path
        d="M19 3L19.6 5.4L22 6L19.6 6.6L19 9L18.4 6.6L16 6L18.4 5.4L19 3Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
