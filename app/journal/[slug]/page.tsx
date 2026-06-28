import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, Quote } from "@/components/ds";
import { Container } from "@/components/site";
import { JsonLd } from "@/components/site/JsonLd";
import { ArrowLeft, ArrowRight } from "@/components/site/icons";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { articles, articleSlugs, getArticle } from "@/content/journal";
import { buildMetadata } from "@/lib/seo";
import { articleLd, breadcrumbLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({
    title: a.title,
    description: a.excerpt,
    path: `/journal/${a.slug}`,
    type: "article",
    publishedTime: a.date,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const i = articles.findIndex((x) => x.slug === a.slug);
  const next = articles[(i + 1) % articles.length];

  return (
    <>
      <ScrollProgress />
      <JsonLd
        data={[
          articleLd(a),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
            { name: a.title, path: `/journal/${a.slug}` },
          ]),
        ]}
      />

      <Container size="xl" style={{ paddingTop: "2rem" }}>
        <Link
          href="/journal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          <ArrowLeft size={14} /> The journal
        </Link>
      </Container>

      {/* Article header */}
      <section style={{ padding: "clamp(1.5rem, 3vw, 2.5rem) 0 clamp(1.5rem, 3vw, 2.5rem)" }}>
        <Container size="prose">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
            <Eyebrow dash>{a.category}</Eyebrow>
            <h1 className="skg-display" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.04 }}>
              {a.title}
            </h1>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {formatDate(a.date)} · {a.readingTime} read · {a.author}
            </span>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section style={{ padding: "0 0 var(--section-pad-y)" }}>
        <Container size="prose">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            {a.body.map((block, bi) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={bi}
                    className="skg-subheading"
                    style={{ fontSize: "1.6rem", marginTop: "1.2rem" }}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <Quote key={bi} cite={block.cite} style={{ margin: "0.8rem 0" }}>
                    {block.text}
                  </Quote>
                );
              }
              return (
                <p key={bi} className="skg-body" style={{ fontSize: "var(--text-md)", maxWidth: "62ch" }}>
                  {block.text}
                </p>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Continue reading */}
      <section
        style={{
          padding: "var(--section-pad-y-tight) 0",
          borderTop: "1px solid var(--border-subtle)",
          background: "var(--bone-300)",
        }}
      >
        <Container size="xl">
          <Reveal>
            <Link
              href={`/journal/${next.slug}`}
              className="lift"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1.5rem",
                padding: "clamp(1.4rem, 3vw, 2rem)",
                background: "var(--bone-100)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <Eyebrow dash>Continue reading</Eyebrow>
                <span
                  className="skg-display"
                  style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)", color: "var(--text-primary)" }}
                >
                  {next.title}
                </span>
              </span>
              <span style={{ color: "var(--accent)", display: "inline-flex" }} className="project-card__arrow">
                <ArrowRight size={32} />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
