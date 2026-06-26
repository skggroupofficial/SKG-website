import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ds";
import { Container } from "@/components/site";
import { JsonLd } from "@/components/site/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { articles } from "@/content/journal";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Journal",
  description:
    "Essays from Shri Kuber Group on long-horizon development, material honesty, and operating what we build.",
  path: "/journal",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function JournalPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
        ])}
      />

      {/* Page head — light */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem)" }}>
        <Container size="xl">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", maxWidth: "60ch" }}>
            <Eyebrow dash>Journal</Eyebrow>
            <h1 className="skg-display" style={{ fontSize: "clamp(2.4rem, 5.2vw, 4.2rem)", lineHeight: 1.02 }}>
              On building for the long horizon.
            </h1>
            <p className="skg-body skg-body--lead" style={{ maxWidth: "52ch", color: "var(--text-secondary)" }}>
              Essays on long-horizon development, material honesty, and what changes when a firm operates what it
              builds. Written in the first person plural, because we mean it.
            </p>
          </div>
        </Container>
      </section>

      {/* Article grid */}
      <section style={{ padding: "0 0 var(--section-pad-y)" }}>
        <Container size="xl">
          <div
            className="journal-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          >
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link
                  href={`/journal/${a.slug}`}
                  className="lift"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.9rem",
                    padding: "1.6rem",
                    height: "100%",
                    background: "var(--bone-100)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10.5px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    {a.category}
                  </span>
                  <h3 className="skg-subheading" style={{ fontSize: "1.45rem" }}>
                    {a.title}
                  </h3>
                  <p className="skg-body" style={{ fontSize: "0.92rem", flex: 1 }}>
                    {a.excerpt}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {a.readingTime} read · {formatDate(a.date)}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
