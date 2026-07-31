import { brand } from "../content/brand";
import type { Article, Project } from "../content/types";
import { siteUrl } from "./seo";

const ORG_ID = `${siteUrl}/#organization`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: brand.address.street,
  addressLocality: brand.address.locality,
  addressRegion: brand.address.region,
  postalCode: brand.address.postalCode,
  addressCountry: brand.address.country,
};

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent"],
    "@id": ORG_ID,
    name: brand.name,
    legalName: brand.legalName,
    alternateName: brand.short,
    url: siteUrl,
    logo: `${siteUrl}/logo/skg-logo-gold.png`,
    image: `${siteUrl}/logo/skg-logo-gold.png`,
    description: brand.shortDescription,
    slogan: brand.tagline,
    foundingDate: brand.foundingYear,
    founder: { "@type": "Person", name: brand.founder },
    telephone: brand.phone,
    email: brand.email,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: brand.address.geo.lat,
      longitude: brand.address.geo.lng,
    },
    areaServed: ["Rajasthan", "Gujarat", "India"],
    knowsAbout: [
      "Real estate development",
      "Construction management",
      "Hospitality operations",
      "Vertically integrated property development",
    ],
    ...(brand.social.length > 0 ? { sameAs: brand.social.map((s) => s.href) } : {}),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: brand.hours.days,
      opens: brand.hours.opens,
      closes: brand.hours.closes,
    },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: brand.name,
    description: brand.shortDescription,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path}`,
    })),
  };
}

export function projectLd(p: Project) {
  const base = {
    "@context": "https://schema.org",
    name: p.name,
    description: p.summary,
    url: `${siteUrl}/projects/${p.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: p.location.split(",")[0].trim(),
      addressRegion: brand.address.region,
      addressCountry: "IN",
    },
  };

  if (p.hospitality) {
    const keys = parseInt(p.specs.find((s) => /key/i.test(s.k))?.v ?? "", 10);
    return {
      ...base,
      "@type": "Hotel",
      ...(Number.isFinite(keys) ? { numberOfRooms: keys } : {}),
      brand: { "@id": ORG_ID },
    };
  }

  const isRetail = /retail|shop|mall|arcade/i.test(p.type);
  const isResidential = /residen|apartment|villa|tower|flat/i.test(p.type);

  if (isRetail) return { ...base, "@type": "ShoppingCenter", brand: { "@id": ORG_ID } };
  if (isResidential) return { ...base, "@type": "ApartmentComplex" };
  return { ...base, "@type": "Place" };
}

export function articleLd(a: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    url: `${siteUrl}/journal/${a.slug}`,
    image: [a.image ?? `${siteUrl}/opengraph-image`],
    datePublished: a.date,
    dateModified: a.dateModified ?? a.date,
    articleSection: a.category,
    author: { "@type": "Organization", name: a.author },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${siteUrl}/journal/${a.slug}`,
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
