// ============================================================
// SKG — brand facts (single source for copy, contact, SEO)
// NOTE: launch content. Swap real values when confirmed.
// ============================================================

export const brand = {
  name: "Shri Kuber Group",
  short: "SKG",
  legalName: "Shri Kuber Group",
  tagline: "The Power of Trust",
  statement: "Ground. Form. Experience.",
  description:
    "Shri Kuber Group is a vertically integrated real estate developer in Ahmedabad — we develop the land, build the structure in-house, and operate the hospitality within our developments. One team, accountable from the first survey to the fifteen-year guest.",
  shortDescription:
    "A vertically integrated real estate developer in Ahmedabad — develop, build and host under one accountable roof.",

  // Contact (launch placeholder — confirm before go-live)
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  email: "info@shrikubergroup.com",
  web: "www.shrikubergroup.com",
  url: "https://www.shrikubergroup.com",

  address: {
    lines: [
      "Shri Kuber House, 5th Floor",
      "Nr. Pakwan Cross Road",
      "S.G. Highway, Ahmedabad — 380051",
      "Gujarat, India",
    ],
    street: "Shri Kuber House, 5th Floor, Nr. Pakwan Cross Road, S.G. Highway",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "380051",
    country: "IN",
    geo: { lat: 23.03, lng: 72.51 },
  },

  hoursText: "Mon–Sat · 10:00–18:30 IST",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "18:30",
  },

  founder: "Rahul Kuber",
  foundingYear: "2008",

  // Social / sameAs (add real handles when available)
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],

  sectors: ["Real Estate Development", "Construction", "Hospitality"],
};

export type Brand = typeof brand;
