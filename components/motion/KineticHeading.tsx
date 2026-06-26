"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface KineticHeadingProps {
  /** Each string is rendered as its own masked, rising line. */
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
  /** Seconds before the first line rises. */
  startDelay?: number;
}

/**
 * Per-line clip-mask reveal for hero display type — each line rises into a
 * fixed mask. Calm easing, no bounce. Honors prefers-reduced-motion.
 */
export function KineticHeading({
  lines,
  as = "h1",
  className,
  style,
  startDelay = 0.12,
}: KineticHeadingProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag className={className} style={style}>
      {lines.map((line, i) => (
        <span key={i} className="kinetic-line">
          <motion.span
            style={{ display: "block", willChange: "transform" }}
            initial={reduce ? false : { y: "118%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 0.84, 0.3, 1],
              delay: startDelay + i * 0.11,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
