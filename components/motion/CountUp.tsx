"use client";

import * as React from "react";

export interface CountUpProps {
  /** Target value as it should finally read, e.g. "1.4", "06", "100". */
  value: string;
  durationMs?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Parse the formatting (decimals, zero-padding) from the target string. */
function shape(value: string) {
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  const decimals = value.includes(".") ? (value.split(".")[1]?.length ?? 0) : 0;
  const intDigits = value.split(".")[0]?.replace(/[^0-9]/g, "").length ?? 0;
  const pad = /^0\d/.test(value.trim()) ? intDigits : 0;
  return { num: Number.isFinite(num) ? num : 0, decimals, pad };
}

function format(n: number, decimals: number, pad: number) {
  let s = n.toFixed(decimals);
  if (pad > 0) {
    const [int, frac] = s.split(".");
    s = int.padStart(pad, "0") + (frac ? "." + frac : "");
  }
  return s;
}

/** Animates a number from 0 to its target the first time it scrolls into view. */
export function CountUp({ value, durationMs = 1400, className, style }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const { num, decimals, pad } = React.useMemo(() => shape(value), [value]);
  const [display, setDisplay] = React.useState(() => format(0, decimals, pad));
  const done = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!el || reduce || typeof IntersectionObserver === "undefined") {
      setDisplay(format(num, decimals, pad));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            io.disconnect();
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(format(num * eased, decimals, pad));
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(format(num, decimals, pad));
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num, decimals, pad, durationMs]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
