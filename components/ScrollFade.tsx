"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** how strong the blur is at the edges of viewport (px) */
  strength?: number;
  /** wrapper tag — section/div */
  as?: "section" | "div";
};

/**
 * Wraps a block so that its visual content blurs at the edges of the viewport
 * and is sharp when centered. Background colors stay fully opaque so adjacent
 * same-colored sections never reveal the body underneath.
 *
 * Respects prefers-reduced-motion — falls back to plain content.
 */
export default function ScrollFade({
  children,
  className = "",
  strength = 8,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Blur curve: high at edges (entering bottom / leaving top), zero in middle.
  const filterBlur = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    [strength, 0, 0, strength]
  );

  const filter = useTransform(filterBlur, (b) => `blur(${b}px)`);

  const Tag = as === "section" ? motion.section : motion.div;

  if (prefersReducedMotion) {
    const StaticTag = as === "section" ? "section" : "div";
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <Tag
      ref={ref}
      style={{
        filter,
        willChange: "filter",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
