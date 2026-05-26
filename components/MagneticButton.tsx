"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost";
  strength?: number;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  strength = 0.3,
  type = "button",
  disabled = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const innerX = useTransform(springX, (v) => v * 0.4);
  const innerY = useTransform(springY, (v) => v * 0.4);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const baseStyles =
    variant === "primary"
      ? "bg-ink-900 text-white hover:bg-ink-800"
      : "bg-transparent text-ink-900 border border-ink-300 hover:border-ink-900";

  const inner = (
    <motion.span style={{ x: innerX, y: innerY }} className="inline-block">
      {children}
    </motion.span>
  );

  const wrapperClass = `inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-sm tracking-tight transition-colors ${baseStyles} ${className}`;

  if (href) {
    return (
      <motion.div
        ref={ref}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="inline-block"
      >
        <a href={href} className={wrapperClass}>
          {inner}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${wrapperClass} ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
      >
        {inner}
      </button>
    </motion.div>
  );
}
