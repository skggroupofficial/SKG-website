// ============================================================
// SKG — brand facts (single source for copy, contact, SEO)
// ============================================================

export const brand = {
  name: "Shri Kuber Group",
  short: "SKG",
  legalName: "Shri Kuber Group (Partnership Firm)",
  tagline: "The Power of Trust",
  statement: "Ground. Form. Experience.",
  description:
    "Shri Kuber Group is a vertically integrated real estate developer based in Hanumangarh, Rajasthan — we develop the land, build the structure in-house, and operate the hospitality within our developments. One team, accountable from the first survey to the fifteen-year guest.",
  shortDescription:
    "A vertically integrated real estate developer in Hanumangarh, Rajasthan — develop, build and host under one accountable roof.",

  phone: "+91 92610 92610",
  phoneHref: "+919261092610",
  email: "contact@skggroup.com",
  web: "www.skggroup.com",
  url: "https://www.skggroup.com",

  address: {
    lines: [
      "#27 City Center Market",
      "Hanumangarh — 335513",
      "Rajasthan, India",
    ],
    street: "#27 City Center Market",
    locality: "Hanumangarh",
    region: "Rajasthan",
    postalCode: "335513",
    country: "IN",
    geo: { lat: 29.5815, lng: 74.3267 },
  },

  hoursText: "Mon–Sat · 10:00–18:30 IST",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "18:30",
  },

  founder: "Arvind Soni",
  foundingYear: "2001",

  // Social / sameAs (add real handles when available)
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],

  sectors: ["Real Estate Development", "Construction", "Hospitality"],
};

export type Brand = typeof brand;
