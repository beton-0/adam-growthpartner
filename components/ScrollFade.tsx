"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** how strong the blur is at viewport edges (px) */
  strength?: number;
};

/**
 * Wraps inner content (NOT the section background) so it blurs in
 * at the bottom of the viewport, is sharp when centered, and blurs
 * out at the top. Use inside a `<section>` so the section's bg-color
 * stays solid — only what's inside this wrapper gets blurred.
 *
 * Respects prefers-reduced-motion.
 */
export default function ScrollFade({
  children,
  className = "",
  strength = 5,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const filterBlur = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    [strength, 0, 0, strength]
  );

  const filter = useTransform(filterBlur, (b) => `blur(${b}px)`);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ filter, willChange: "filter" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
