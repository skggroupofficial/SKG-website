import * as React from "react";
import { Figure } from "./Figure";
import type { ProjectImage } from "../../content/types";

/**
 * Editorial photo mosaic — one large tile plus supporting tiles stacked to
 * fill the same height. Used for real-photography galleries (homepage
 * feature band, project-detail gallery preview).
 */
export function PhotoMosaic({ images, tone = "dark" }: { images: ProjectImage[]; tone?: "light" | "dark" }) {
  if (images.length === 0) return null;
  const [lead, ...rest] = images;

  return (
    <div
      className="mosaic-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: "1rem",
        alignItems: "stretch",
      }}
    >
      <Figure
        tone={tone}
        ratio="4 / 5"
        src={lead.src}
        alt={lead.alt}
        caption={lead.caption ?? null}
        sizes="(max-width: 900px) 100vw, 46vw"
      />
      {rest.length > 0 && (
        <div
          className="mosaic-grid__stack"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {rest.map((img) => (
            <Figure
              key={img.src}
              tone={tone}
              className="mosaic-grid__tile"
              src={img.src}
              alt={img.alt}
              caption={img.caption ?? null}
              sizes="(max-width: 900px) 50vw, 24vw"
              style={{ aspectRatio: "auto", flex: "1 1 0", minHeight: 0 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
