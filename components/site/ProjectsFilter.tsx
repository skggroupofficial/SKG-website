"use client";

import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "../motion/Reveal";
import type { Project, DivisionName } from "../../content/types";

const FILTERS: ("All" | DivisionName)[] = ["All", "Develop", "Build", "Host"];

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = React.useState<(typeof FILTERS)[number]>("All");
  const items = filter === "All" ? projects : projects.filter((p) => p.division === filter);

  return (
    <>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "clamp(2rem, 3.5vw, 3rem)" }}>
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              style={{
                cursor: "pointer",
                padding: "0.55rem 1.1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                borderRadius: "var(--radius-pill)",
                border: "1px solid " + (active ? "var(--accent)" : "var(--border-default)"),
                background: active ? "var(--accent)" : "transparent",
                color: active ? "var(--tobacco-900)" : "var(--text-secondary)",
                transition: "var(--transition-color)",
              }}
            >
              {f}
            </button>
          );
        })}
        <span
          style={{
            marginLeft: "auto",
            alignSelf: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {items.length} {items.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
        {items.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
