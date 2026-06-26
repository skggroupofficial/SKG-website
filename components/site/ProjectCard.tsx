import * as React from "react";
import Link from "next/link";
import { Tag } from "../ds";
import { Figure } from "./Figure";
import { MapPin, ArrowRight } from "./icons";
import type { Project } from "../../content/types";

export function ProjectCard({ project: p, image }: { project: Project; image?: string }) {
  const live = p.status === "Now open" || p.status === "Now leasing";
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="project-card"
      style={{
        textAlign: "left",
        background: "var(--bone-100)",
        border: "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        color: "inherit",
      }}
    >
      <Figure
        tone={p.tone}
        ratio="4 / 3"
        caption={null}
        src={image}
        alt={image ? p.name : ""}
        style={{ borderRadius: 0 }}
        sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
      <div
        style={{
          padding: "1.3rem 1.4rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {p.type}
          </span>
          <Tag variant={live ? "jade" : "outline"}>{p.phase}</Tag>
        </div>
        <h3 className="skg-display" style={{ fontSize: "1.5rem" }}>
          {p.name}
        </h3>
        <p className="skg-body" style={{ fontSize: "0.9rem", margin: 0, flex: 1 }}>
          {p.summary}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.3rem",
            paddingTop: "0.9rem",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
            }}
          >
            <MapPin size={13} style={{ color: "var(--accent)" }} />
            {p.location}
          </span>
          <span style={{ color: "var(--accent)", display: "inline-flex" }}>
            <ArrowRight size={16} className="project-card__arrow" />
          </span>
        </div>
      </div>
    </Link>
  );
}
