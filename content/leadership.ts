// ============================================================
// SKG — leadership / firm narrative
// ============================================================

export const leadership = {
  intro:
    "Shri Kuber Group is led from Hanumangarh, Rajasthan by a partnership that carries a project from the first survey to the fifteen-year guest. We do not hand the building to someone else and the operation to a third party — the people who underwrite the land are accountable to the people who live and stay in what we build.",

  principal: {
    name: "Arvind Soni",
    role: "Managing Director",
    phone: "+91 92610 00007",
    phoneHref: "+919261000007",
    email: "arvind@skggroup.com",
    quote: "We build places that outlast the conversation about them.",
    photo: {
      src: "/images/leadership/arvind-soni.jpg",
      alt: "Arvind Soni, Managing Director of Shri Kuber Group",
    },
    bio: [
      "Arvind Soni has led Shri Kuber Group through more than two decades of real estate development across Rajasthan. Under his direction SKG assembled the land acquisition expertise, the in-house construction capability, and the hospitality operation under one roof — so that no decision is made by someone who will not have to answer for it later.",
      "He keeps the firm grounded in a simple discipline: measure success in a building's tenth year, not its opening week. The partner who approves a structural detail is the same partner who reads the occupant's letter about it two years on.",
    ],
  },

  director: {
    name: "Om Soni",
    role: "Director",
    phone: "+91 92610 00000",
    phoneHref: "+919261000000",
    email: "Omsoni@skggroup.com",
    photo: {
      src: "/images/leadership/om-soni.jpg",
      alt: "Om Soni, Director of Shri Kuber Group",
    },
    bio: "Om Soni represents the next generation at SKG, working alongside the founding leadership on the firm's active sites — from CCM City Walk through to the ground it takes on next. He carries the same discipline forward: walk the site, know the detail, and stay answerable for it long after handover.",
  },

  firm: [
    {
      no: "01",
      title: "One team, one horizon",
      body: "Develop, build and host are not three companies that meet at handover. They are one accountable group with one set of standards, applied from acquisition to operation.",
    },
    {
      no: "02",
      title: "Rooted in Hanumangarh",
      body: "We develop ground we know — across Rajasthan and, where the building deserves it, into Gujarat. Local stone, local trades, local accountability.",
    },
    {
      no: "03",
      title: "Trust as the asset",
      body: "Landowners, capital partners and guests return to us because what we say at the start is what stands a decade later. That is the power of trust.",
    },
  ],
};

export type Leadership = typeof leadership;
