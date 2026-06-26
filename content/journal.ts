import type { Article } from "./types";

// ============================================================
// SKG — Journal / Insights (launch content; CMS/MDX-upgradeable)
// ============================================================

export const articles: Article[] = [
  {
    slug: "we-operate-what-we-build",
    title: "We operate what we build",
    excerpt:
      "Why a developer should answer for the guest fifteen years on — and what changes when it does.",
    category: "Approach",
    date: "2026-03-18",
    readingTime: "4 min",
    author: "Shri Kuber Group",
    body: [
      {
        type: "paragraph",
        text: "Most developers hand the building to a contractor and the operation to a third party. The result is a place where no one is fully responsible — where the person who chose the door handle never meets the person who has to repair it.",
      },
      {
        type: "paragraph",
        text: "We keep all three disciplines under one roof. We acquire the ground, build the structure in-house, and run the hospitality ourselves. It is not the efficient choice. It is the accountable one.",
      },
      { type: "heading", text: "The decision that travels" },
      {
        type: "paragraph",
        text: "When the team that approves a joinery detail is the same team that reads the guest's letter about it two years later, the decision changes. You specify for the tenth year, not the opening week. You choose the material that ages, not the one that photographs.",
      },
      {
        type: "quote",
        text: "A decision made at the design stage should reach the guest fifteen years later, and still be the right one.",
        cite: "Shri Kuber Group",
      },
      {
        type: "paragraph",
        text: "That is what integration buys: not speed, but a chain of accountability that does not break at handover.",
      },
    ],
  },
  {
    slug: "materials-chosen-to-age",
    title: "Materials chosen to age",
    excerpt:
      "Limestone, oiled timber, unlacquered brass, natural linen — and the rule that holds them together.",
    category: "Materials",
    date: "2026-02-02",
    readingTime: "3 min",
    author: "Shri Kuber Group",
    body: [
      {
        type: "paragraph",
        text: "We do not use materials to simulate other materials. Every surface across an SKG development is chosen for its ability to age — not just to perform on day one.",
      },
      { type: "heading", text: "A short material language" },
      {
        type: "paragraph",
        text: "Limestone for cladding, plinths and courtyard paving. Aged timber for millwork and soffits, oil-finished and never lacquered. Brass for hardware and signage, left unlacquered so it patinas. Natural linen for furnishings and acoustic panels.",
      },
      {
        type: "paragraph",
        text: "The rule is simple: we resist anything that must be replaced within a decade. A material that has to be torn out in year eight was the wrong material in year one.",
      },
      {
        type: "quote",
        text: "Every material has a reason to be here.",
        cite: "Shri Kuber Group",
      },
    ],
  },
  {
    slug: "measured-in-year-ten",
    title: "Measured in year ten",
    excerpt:
      "Our long-horizon test for every project — and why an 18-year average hold is a feature, not a constraint.",
    category: "Long horizon",
    date: "2025-12-09",
    readingTime: "4 min",
    author: "Shri Kuber Group",
    body: [
      {
        type: "paragraph",
        text: "A project that performs in year one and degrades in year ten is not a success. We measure on a long horizon because the people who trust us — landowners, capital partners, guests — live with the result long after the opening.",
      },
      { type: "heading", text: "What the long horizon changes" },
      {
        type: "paragraph",
        text: "It changes what you underwrite, what you build, and what you keep. We hold for an average of eighteen years. That is not patience for its own sake; it is the only honest way to be accountable for how a place ages.",
      },
      {
        type: "paragraph",
        text: "Considered. Not cautious. The long horizon is a discipline, not a hesitation — it lets us develop ground others overlook and continue the story already in the land.",
      },
    ],
  },
];

export const articleSlugs = articles.map((a) => a.slug);

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
