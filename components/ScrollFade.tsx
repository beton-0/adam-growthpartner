"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** how strong the blur is at the edges of viewport (px) */
  strength?: number;
  /** fade out also when leaving at top? default true (symmetric) */
  symmetric?: boolean;
  /** wrapper tag — section/div */
  as?: "section" | "div";
};

/**
 * Wraps a block so that:
 *  - When the block is near the BOTTOM of the viewport (entering / exiting on scroll-up):
 *    blur is high, opacity is low.
 *  - When the block is centered in the viewport: blur 0, opacity 1.
 *  - When `symmetric`, the same effect applies at the TOP edge.
 *
 * Respects prefers-reduced-motion — falls back to plain content.
 */
export default function ScrollFade({
  children,
  className = "",
  strength = 8,
  symmetric = true,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // scrollYProgress: 0 = block top just entered viewport bottom
  //                  1 = block bottom just left viewport top
  // Middle (0.4–0.6) is when block is centered.
  const blurIn = symmetric ? strength : strength;
  const blurOut = symmetric ? strength : 0;

  const filterBlur = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [blurIn, 0, 0, blurOut]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0.0, 1, 1, symmetric ? 0.0 : 1]
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
        opacity,
        willChange: "filter, opacity",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
