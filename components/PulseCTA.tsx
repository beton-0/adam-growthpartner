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

  const base = `relative inline-flex items-center justify-center rounded-full font-medium leading-none transition-[opacity,transform,background-color] duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed ${palette} ${sizing} ${pulseClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
