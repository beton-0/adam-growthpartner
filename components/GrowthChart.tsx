"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  points: number[];
  color?: string;
  /** show end-of-line pulsing dot */
  dot?: boolean;
};

/**
 * Compact animated growth chart. SVG line with `pathLength` draw-on,
 * a soft gradient area fill, and a pulsing end-dot. Animates ONCE when
 * scrolled into view.
 */
export default function GrowthChart({ points, color = "#0a0a0a", dot = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const width = 300;
  const height = 90;
  const padX = 4;
  const padY = 8;

  const maxY = Math.max(...points);
  const minY = Math.min(...points);
  const range = maxY - minY || 1;

  const innerW = width - padX * 2;
  const innerH = height - padY * 2;

  const coords = points.map((y, i) => {
    const x = padX + (i / (points.length - 1)) * innerW;
    const ny = padY + innerH - ((y - minY) / range) * innerH;
    return [x, ny] as const;
  });

  // Build smooth path using simple line segments (clean SaaS feel)
  const linePath = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ");

  const last = coords[coords.length - 1];
  const first = coords[0];

  const areaPath = `M ${first[0].toFixed(2)} ${(height - padY).toFixed(2)} ${linePath
    .replace("M", "L")} L ${last[0].toFixed(2)} ${(height - padY).toFixed(2)} Z`;

  const gradId = `grad-${color.replace("#", "")}`;

  return (
    <div ref={ref} className="relative w-full h-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <line
          x1={padX}
          x2={width - padX}
          y1={height - padY}
          y2={height - padY}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        {/* gridline at midpoint */}
        <line
          x1={padX}
          x2={width - padX}
          y1={padY + innerH / 2}
          y2={padY + innerH / 2}
          stroke="currentColor"
          strokeOpacity="0.04"
          strokeWidth="1"
          strokeDasharray="3 4"
        />

        {/* area fill — fades in once line is mostly drawn */}
        <motion.path
          d={areaPath}
          fill={`url(#${gradId})`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
        />

        {/* line — pathLength draws on */}
        <motion.path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* end-of-line dot */}
        {dot && (
          <>
            <motion.circle
              cx={last[0]}
              cy={last[1]}
              r={3}
              fill={color}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: 1.6, ease: "backOut" }}
            />
            <motion.circle
              cx={last[0]}
              cy={last[1]}
              r={3}
              fill={color}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: [0.6, 0, 0.6], scale: [1, 2.2, 1] } : { opacity: 0 }}
              transition={{
                duration: 2.4,
                delay: 1.9,
                ease: "easeOut",
                repeat: Infinity,
              }}
              style={{ transformOrigin: `${last[0]}px ${last[1]}px` }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
