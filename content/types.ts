// ============================================================
// SKG content — shared types
// ============================================================

export type DivisionName = "Develop" | "Build" | "Host";

export interface Division {
  id: string;
  no: string;
  name: DivisionName;
  icon: string; // Phosphor icon name, e.g. "ph-compass-tool"
  lead: string;
  body: string;
  points: string[];
}

export interface Stat {
  value: string;
  unit: string;
  label: string;
}

export interface Principle {
  no: string;
  name: string;
  body: string;
}

export interface Material {
  name: string;
  token: string; // CSS var reference, e.g. "var(--material-limestone)"
  use: string;
}

export interface ProjectSpec {
  k: string;
  v: string;
}

export interface Project {
  slug: string;
  name: string;
  division: DivisionName;
  type: string;
  location: string;
  phase: string;
  status: string;
  year: string;
  size: string;
  tone: "light" | "dark";
  summary: string;
  caption: string;
  specs: ProjectSpec[];
  narrative: string;
  /** True for hospitality assets SKG operates in-house (Hotel schema, Host page). */
  hospitality?: boolean;
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite?: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  author: string;
  body: ArticleBlock[];
}

export interface NavItem {
  label: string;
  href: string;
}
