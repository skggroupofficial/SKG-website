import * as React from "react";
import Image from "next/image";
import { cn } from "../../lib/cn";
import { Aperture } from "@phosphor-icons/react/dist/ssr";

const MONOGRAM = "/logo/skg-monogram-gold.png";

export interface FigureProps {
  /** Real image src. When omitted, renders the branded placeholder treatment. */
  src?: string;
  alt?: string;
  caption?: string | null;
  tone?: "light" | "dark";
  /** CSS aspect-ratio string, e.g. "4 / 5". */
  ratio?: string;
  watermark?: boolean;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** Sizes hint for next/image responsive loading. */
  sizes?: string;
}

/**
 * Art-directed image slot. With `src` it renders an optimised, warm-graded
 * image; otherwise the on-brand placeholder (lattice + monogram + caption)
 * so the layout reads finished before real photography exists.
 */
export function Figure({
  src,
  alt = "",
  caption,
  tone = "dark",
  ratio = "4 / 3",
  watermark = true,
  priority = false,
  className = "",
  style,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: FigureProps) {
  const onDark = tone === "dark";
  const bg = onDark
    ? "linear-gradient(150deg, var(--tobacco-700) 0%, var(--tobacco-900) 100%)"
    : "linear-gradient(150deg, var(--bone-300) 0%, var(--bone-500) 100%)";

  return (
    <figure
      className={cn(className)}
      style={{
        position: "relative",
        margin: 0,
        overflow: "hidden",
        aspectRatio: ratio,
        background: bg,
        borderRadius: "var(--radius-card)",
        ...style,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: "cover", filter: "var(--img-grade)" }}
        />
      ) : (
        <>
          <div
            className={onDark ? "skg-lattice--dark" : "skg-lattice"}
            style={{ position: "absolute", inset: 0 }}
            aria-hidden="true"
          />
          {watermark && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={MONOGRAM}
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "46%",
                transform: "translate(-50%, -54%)",
                opacity: onDark ? 0.14 : 0.16,
                filter: onDark ? "none" : "grayscale(0.2)",
              }}
            />
          )}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: onDark
                ? "radial-gradient(120% 90% at 50% 0%, transparent 50%, rgba(20,12,6,0.5) 100%)"
                : "none",
            }}
          />
        </>
      )}
      {caption && (
        <figcaption
          style={{
            position: "absolute",
            left: "1rem",
            bottom: "0.9rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: onDark ? "var(--text-on-dark-faint)" : "var(--tobacco-500)",
            zIndex: 1,
          }}
        >
          <Aperture size={13} weight="regular" /> {caption}
        </figcaption>
      )}
    </figure>
  );
}
