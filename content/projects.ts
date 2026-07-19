import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ccm-city-walk",
    name: "CCM City Walk",
    division: "Develop",
    type: "Retail Arcade",
    location: "Hanumangarh, Rajasthan",
    phase: "Phase 01",
    status: "Under construction",
    year: "2026",
    size: "Retail arcade · multiple units",
    tone: "dark",
    summary:
      "A stone-colonnaded retail arcade taking shape on a palm-lined boulevard in Hanumangarh — ground-floor shops opening in phases as each unit completes.",
    caption: "CCM City Walk · retail colonnade · golden hour",
    specs: [
      { k: "Programme", v: "Ground-floor retail" },
      { k: "Materials", v: "Stone colonnade · brick paving" },
      { k: "Landscape", v: "Palm-lined boulevard" },
      { k: "Status", v: "Phase 1 · units ready" },
    ],
    narrative:
      "CCM City Walk is the first ground we are seeing through from survey to shutter. A continuous stone colonnade runs the length of the site, each bay opening onto a brick-paved boulevard planted with palms and dressed in cast-iron street lamps. The first units — glass-fronted, signed, ready to trade — are already open; the rest of the arcade is being finished bay by bay, in the same order the shops will fill. It is small enough that we can still walk every metre of it ourselves, which is exactly the point.",
    image: {
      src: "/images/projects/ccm-city-walk/ccm-city-walk-hero.jpg",
      alt: "CCM City Walk retail colonnade at golden hour, Hanumangarh",
    },
    gallery: [
      {
        src: "/images/projects/ccm-city-walk/ccm-city-walk-hero.jpg",
        alt: "The retail colonnade at golden hour, with the MR Residency tower beyond",
        caption: "The colonnade · golden hour",
      },
      {
        src: "/images/projects/ccm-city-walk/ccm-city-walk-storefront.jpg",
        alt: "CCM City Walk storefront with glass frontage, ready to trade",
        caption: "First units · glass-fronted & signed",
      },
      {
        src: "/images/projects/ccm-city-walk/ccm-city-walk-boulevard.jpg",
        alt: "Brick-paved boulevard with street lamps outside the arcade",
        caption: "The boulevard · brick paving & cast-iron lamps",
      },
      {
        src: "/images/projects/ccm-city-walk/ccm-city-walk-palm-court.jpg",
        alt: "Palm tree and forecourt outside the arcade at dusk",
        caption: "The forecourt · palm-lined",
      },
      {
        src: "/images/projects/ccm-city-walk/ccm-city-walk-arcade-walk.jpg",
        alt: "View along the arcade walkway toward the colonnade",
        caption: "Along the arcade",
      },
      {
        src: "/images/projects/ccm-city-walk/ccm-city-walk-column-detail.jpg",
        alt: "Detail of a stone column base and steps",
        caption: "Materiality · stone column detail",
      },
    ],
  },
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1 || projects.length < 2) return undefined;
  return projects[(i + 1) % projects.length];
}

export const hospitalityProjects = projects.filter((p) => p.hospitality);
