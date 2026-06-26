import type { NavItem } from "./types";

// Primary header navigation
export const primaryNav: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Approach", href: "/approach" },
  { label: "Hospitality", href: "/hospitality" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

// Footer columns
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Navigate",
    items: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Approach", href: "/approach" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Disciplines",
    items: [
      { label: "Develop", href: "/approach" },
      { label: "Build", href: "/approach" },
      { label: "Host — Hospitality", href: "/hospitality" },
      { label: "Land & Partnerships", href: "/partnerships" },
    ],
  },
  {
    title: "Firm",
    items: [
      { label: "Leadership", href: "/leadership" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
