import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";
import { projectSlugs } from "../content/projects";
import { articleSlugs } from "../content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/projects", priority: 0.9 },
    { path: "/approach", priority: 0.8 },
    { path: "/hospitality", priority: 0.8 },
    { path: "/partnerships", priority: 0.8 },
    { path: "/journal", priority: 0.6 },
    { path: "/leadership", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((s) => ({
    url: `${siteUrl}/projects/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = articleSlugs.map((s) => ({
    url: `${siteUrl}/journal/${s}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...projectEntries, ...articleEntries];
}
