"use client";

import * as React from "react";

export interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Calm fade-and-rise on first view (no bounce). Content is always in the DOM
 * (SSR) — the hiding is purely a CSS enhancement gated by `html.js` and
 * `prefers-reduced-motion`, so no-JS / reduced-motion users see everything.
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  style,
}: RevealProps) {
  const Tag = as as React.ElementType;
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal=""
      data-revealed={shown ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms`, ...style } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
