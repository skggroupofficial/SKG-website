import type { Division } from "./types";

export const divisions: Division[] = [
  {
    id: "develop",
    no: "01",
    name: "Develop",
    icon: "ph-compass-tool",
    lead: "Land, capital, masterplan.",
    body: "We acquire ground others overlook and underwrite it for the long horizon — assembling parcels, securing approvals, and shaping the masterplan before a single line is built.",
    points: [
      "Site acquisition & assembly",
      "Feasibility & underwriting",
      "Masterplanning & approvals",
    ],
  },
  {
    id: "build",
    no: "02",
    name: "Build",
    icon: "ph-buildings",
    lead: "Structure and material lead.",
    body: "We build to last beyond the current cycle. Construction is managed in-house, with a material language chosen to age — limestone, oiled timber, unlacquered brass.",
    points: [
      "Construction management",
      "Material & finish governance",
      "Delivery & handover",
    ],
  },
  {
    id: "host",
    no: "03",
    name: "Host",
    icon: "ph-bell",
    lead: "We operate what we build.",
    body: "Permanence demands accountability. We run the hospitality experiences inside our developments ourselves, so a decision made at the design stage reaches the guest fifteen years later.",
    points: [
      "Hospitality operations",
      "Asset & estate management",
      "Guest & resident experience",
    ],
  },
];
