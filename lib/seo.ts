import type { Metadata } from "next";
import { brand } from "../content/brand";

export const siteUrl = brand.url;
export const defaultTitle = `${brand.name} — ${brand.tagline}`;
export const defaultDescription = brand.shortDescription;

interface BuildMetaArgs {
  title?: string;
  description?: string;
  /** Absolute path beginning with "/", e.g. "/projects". */
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

/**
 * Per-route metadata. The og:image is supplied automatically by the
 * file-based `app/opengraph-image.tsx` convention, so we don't set it here.
 */
export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  type = "website",
  publishedTime,
  noIndex,
}: BuildMetaArgs = {}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} — ${brand.short}` : defaultTitle,
      description,
      url,
      siteName: brand.name,
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} — ${brand.short}` : defaultTitle,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
