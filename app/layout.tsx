import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Design-system source of truth — imported verbatim (tokens + base + components).
import "../tokens/colors.css";
import "../tokens/typography.css";
import "../tokens/spacing.css";
import "../tokens/effects.css";
import "../tokens/base.css";
import "../css/components.css";
// Production layer (font bridge, responsive grids, interactions) — must load last.
import "./globals.css";

import { fontVariables } from "./fonts";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { JsonLd } from "../components/site/JsonLd";
import { SmoothScroll } from "../components/motion/SmoothScroll";
import { brand } from "../content/brand";
import { siteUrl, defaultTitle, defaultDescription } from "../lib/seo";
import { organizationLd, websiteLd } from "../lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: `%s — ${brand.short}` },
  description: defaultDescription,
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  category: "Real Estate",
  keywords: [
    "Shri Kuber Group",
    "SKG",
    "real estate developer Ahmedabad",
    "luxury developer Gujarat",
    "vertically integrated developer",
    "develop build host",
    "hospitality Ahmedabad",
    "Kuber Riverfront",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: brand.name,
    locale: "en_IN",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: defaultDescription },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#2C1C10",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={fontVariables}>
      <body>
        {/* Enable the reveal system pre-paint; no-JS users keep everything visible. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
