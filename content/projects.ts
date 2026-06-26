import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "kuber-riverfront",
    name: "Kuber Riverfront",
    division: "Develop",
    type: "Mixed-Use",
    location: "Ahmedabad",
    phase: "Phase 02",
    status: "Under construction",
    year: "2026",
    size: "640,000 ft²",
    tone: "dark",
    summary:
      "A riverfront quarter of residences, offices and a public colonnade along the Sabarmati.",
    caption: "Architectural detail · dawn light · stone & brass",
    specs: [
      { k: "Programme", v: "Residential · Office · Retail" },
      { k: "Site area", v: "4.2 acres" },
      { k: "Built-up", v: "640,000 ft²" },
      { k: "Status", v: "Superstructure" },
    ],
    narrative:
      "The land was assembled over three years from seven holdings. The masterplan keeps the river edge public — a 320-metre colonnade in limestone and oiled timber — and lifts the residences above a podium of shops we will operate ourselves.",
  },
  {
    slug: "the-kuber",
    name: "The Kuber",
    division: "Host",
    type: "Hospitality",
    location: "Ahmedabad",
    phase: "Operating",
    status: "Now open",
    year: "2024",
    size: "84 keys",
    tone: "dark",
    hospitality: true,
    summary: "An 84-key house hotel above the riverfront, run end-to-end by SKG.",
    caption: "Interior atmosphere · warm grade · diffused texture",
    specs: [
      { k: "Keys", v: "84" },
      { k: "Operated by", v: "SKG, in-house" },
      { k: "Opened", v: "2024" },
      { k: "Materials", v: "Limestone · linen · brass" },
    ],
    narrative:
      "We host what we build. The Kuber is staffed and run by SKG — the same team that approved the joinery details now answers for how the rooms feel after a thousand nights of use.",
  },
  {
    slug: "pakwan-heights",
    name: "Pakwan Heights",
    division: "Develop",
    type: "Residential",
    location: "S.G. Highway, Ahmedabad",
    phase: "Phase 03",
    status: "Now leasing",
    year: "2025",
    size: "210 homes",
    tone: "light",
    summary: "Two slender residential towers set back behind a limestone garden plinth.",
    caption: "Materiality close-up · limestone plinth · courtyard paving",
    specs: [
      { k: "Homes", v: "210" },
      { k: "Towers", v: "2 · 24 floors" },
      { k: "Amenity", v: "Garden plinth" },
      { k: "Status", v: "Leasing" },
    ],
    narrative:
      "The towers sit back from S.G. Highway behind a raised garden the neighbourhood can walk through. Cladding is local limestone; balconies are framed in brass left to patina.",
  },
  {
    slug: "kuber-exchange",
    name: "Kuber Exchange",
    division: "Build",
    type: "Commercial",
    location: "GIFT City, Gandhinagar",
    phase: "Masterplan",
    status: "In design",
    year: "2027",
    size: "480,000 ft²",
    tone: "dark",
    summary: "A grade-A workplace block organised around a shaded central court.",
    caption: "Architectural detail · dusk · no people visible",
    specs: [
      { k: "Programme", v: "Office · F&B" },
      { k: "Built-up", v: "480,000 ft²" },
      { k: "Court", v: "Shaded · 30m span" },
      { k: "Status", v: "Design development" },
    ],
    narrative:
      "A workplace organised around a deep, shaded court — passive cooling first, mechanical second. The structure is exposed and meant to be seen; nothing is added to hide the way it stands up.",
  },
  {
    slug: "saanjh-courtyards",
    name: "Saanjh Courtyards",
    division: "Develop",
    type: "Residential",
    location: "Gandhinagar",
    phase: "Phase 01",
    status: "Site acquisition",
    year: "2028",
    size: "96 homes",
    tone: "light",
    summary: "Low-rise courtyard housing on the city edge, planted before it is built.",
    caption: "Materiality close-up · timber soffit · evening",
    specs: [
      { k: "Homes", v: "96 · low-rise" },
      { k: "Courtyards", v: "6" },
      { k: "Landscape", v: "Planted first" },
      { k: "Status", v: "Acquisition" },
    ],
    narrative:
      "We are planting the landscape a season before construction so the courtyards have shade on the day they open. This land has a story — orchard, then field — and we are continuing it.",
  },
  {
    slug: "the-linen-house",
    name: "The Linen House",
    division: "Host",
    type: "Boutique Hospitality",
    location: "Udaipur",
    phase: "Planning",
    status: "Pre-development",
    year: "2028",
    size: "36 keys",
    tone: "dark",
    hospitality: true,
    summary: "A 36-key retreat in a restored haveli above the lake.",
    caption: "Interior atmosphere · warm grade · linen & stone",
    specs: [
      { k: "Keys", v: "36" },
      { k: "Building", v: "Restored haveli" },
      { k: "Operated by", v: "SKG, in-house" },
      { k: "Status", v: "Planning" },
    ],
    narrative:
      "A restoration, not a rebuild. We keep what has aged well and replace only what must be replaced — then run it ourselves, the way we run everything we host.",
  },
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export const hospitalityProjects = projects.filter((p) => p.hospitality);
