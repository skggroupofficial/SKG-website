import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Tag } from "../../components/ds";
import { Container, Figure, PhotoMosaic } from "../../components/site";
import { JsonLd } from "../../components/site/JsonLd";
import { ArrowRight, MapPin } from "../../components/site/icons";
import { Reveal } from "../../components/motion/Reveal";
import { projects } from "../../content/projects";
import { buildMetadata } from "../../lib/seo";
import { breadcrumbLd } from "../../lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "CCM City Walk — a stone-colonnaded retail arcade underway in Hanumangarh, Rajasthan. The first ground SKG is developing, building and, in time, hosting under one roof.",
  path: "/projects",
});

export default function ProjectsPage() {
  const p = projects[0];
  const preview = (p.gallery ?? []).slice(1, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />

      <section className="skg-on-dark" style={{ background: "var(--tobacco-800)", color: "var(--text-on-dark)", position: "relative", overflow: "hidden" }}>
        <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
        <Container
          size="xl"
          style={{ position: "relative", padding: "clamp(3rem, 6vw, 5rem) var(--gutter)", display: "flex", flexDirection: "column", gap: "1.1rem" }}
        >
          <Eyebrow dash tone="on-dark">
            Selected work
          </Eyebrow>
          <h1 className="skg-display" style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)", color: "var(--bone-200)" }}>
            Projects
          </h1>
          <p className="skg-body skg-body--lead" style={{ maxWidth: "54ch", color: "var(--text-on-dark-muted)" }}>
            One site, right now — the ground we are developing, building and continuing to walk ourselves, bay by
            bay. The portfolio will grow the same way this one did: one accountable project at a time.
          </p>
        </Container>
      </section>

      {/* Spotlight */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0 var(--section-pad-y-tight)" }}>
        <Container size="xl">
          <div
            className="detail-hero"
            style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(2rem, 4vw, 4rem)", alignItems: "center" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              <Eyebrow dash>
                {p.division} · {p.type}
              </Eyebrow>
              <h2 className="skg-display" style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)", lineHeight: 1 }}>
                {p.name}
              </h2>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <Tag variant="neutral" icon={<MapPin size={13} />}>{p.location}</Tag>
                <Tag variant="outline">{p.status}</Tag>
                <Tag>{p.phase}</Tag>
              </div>
              <p className="skg-body skg-body--lead" style={{ maxWidth: "48ch" }}>{p.summary}</p>
              <div>
                <Link href={`/projects/${p.slug}`} className="skg-btn skg-btn--accent">
                  See the full project <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
                </Link>
              </div>
            </div>
            <Reveal delay={80}>
              <Figure
                tone={p.tone}
                ratio="4 / 3"
                src={p.image?.src}
                alt={p.image?.alt ?? p.name}
                caption={p.caption}
                priority
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gallery preview */}
      {preview.length > 0 && (
        <section style={{ padding: "0 0 var(--section-pad-y)" }}>
          <Container size="xl">
            <PhotoMosaic images={preview} tone={p.tone} />
          </Container>
        </section>
      )}
    </>
  );
}
