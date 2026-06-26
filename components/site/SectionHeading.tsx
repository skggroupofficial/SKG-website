import * as React from "react";
import { Eyebrow } from "../ds";

export interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  max?: string;
  introMax?: string;
}

/** Eyebrow + display heading + optional lead intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  max = "20ch",
  introMax = "52ch",
}: SectionHeadingProps) {
  const onDark = tone === "dark";
  return (
    <div
      style={{
        textAlign: align,
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        alignItems: align === "center" ? "center" : "flex-start",
      }}
    >
      {eyebrow && (
        <Eyebrow dash tone={onDark ? "on-dark" : "accent"}>
          {eyebrow}
        </Eyebrow>
      )}
      {title && (
        <h2
          className="skg-display"
          style={{
            maxWidth: max,
            fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
            color: onDark ? "var(--bone-200)" : "var(--text-primary)",
          }}
        >
          {title}
        </h2>
      )}
      {intro && (
        <p
          className="skg-body skg-body--lead"
          style={{
            maxWidth: introMax,
            color: onDark ? "var(--text-on-dark-muted)" : "var(--text-secondary)",
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
