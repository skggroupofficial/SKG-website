import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, Tag } from "../../../components/ds";
import { Container, Figure } from "../../../components/site";
import { JsonLd } from "../../../components/site/JsonLd";
import { ArrowRight, ArrowLeft, MapPin } from "../../../components/site/icons";
import { Reveal } from "../../../components/motion/Reveal";
import { getProject, getNextProject, projectSlugs } from "../../../content/projects";
import { buildMetadata } from "../../../lib/seo";
import { breadcrumbLd, projectLd } from "../../../lib/jsonld";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.name,
    description: `${p.summary} ${p.type} · ${p.location} · ${p.status}.`,
    path: `/projects/${p.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = getNextProject(slug);
  const live = p.status.startsWith("Now");

  return (
    <>
      <JsonLd
        data={[
          projectLd(p),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: p.name, path: `/projects/${p.slug}` },
          ]),
        ]}
      />

      <Container size="xl" style={{ paddingTop: "2rem" }}>
        <Link
          href="/projects"
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
          <ArrowLeft size={14} /> All projects
        </Link>
      </Container>

      {/* Hero */}
      <section style={{ padding: "clamp(1.5rem, 3vw, 2.5rem) 0 var(--section-pad-y-tight)" }}>
        <Container size="xl">
          <div className="detail-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(2rem, 4vw, 4rem)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              <Eyebrow dash>
                {p.division} · {p.type}
              </Eyebrow>
              <h1 className="skg-display" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1 }}>{p.name}</h1>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <Tag variant="neutral" icon={<MapPin size={13} />}>{p.location}</Tag>
                <Tag variant={live ? "jade" : "outline"}>{p.status}</Tag>
                <Tag>{p.phase}</Tag>
              </div>
              <p className="skg-body skg-body--lead" style={{ maxWidth: "46ch" }}>{p.summary}</p>
              <div>
                <Link href="/contact" className="skg-btn skg-btn--accent">
                  Enquire about {p.name} <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
                </Link>
              </div>
            </div>
            <Reveal delay={80}>
              <Figure tone={p.tone} ratio="4 / 3" caption={p.caption} priority />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Spec band */}
      <section className="skg-on-dark" style={{ background: "var(--tobacco-800)", color: "var(--text-on-dark)", position: "relative", overflow: "hidden" }}>
        <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0, opacity: 0.5 }} aria-hidden="true" />
        <Container size="xl" style={{ position: "relative", padding: "clamp(2.5rem, 4vw, 3.5rem) var(--gutter)" }}>
          <div className="spec-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {p.specs.map((s) => (
              <div key={s.k} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brass-300)" }}>{s.k}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.2rem, 2vw, 1.6rem)", color: "var(--bone-100)" }}>{s.v}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Narrative + gallery */}
      <section style={{ padding: "var(--section-pad-y) 0" }}>
        <Container size="lg">
          <div className="narrative-grid" style={{ display: "grid", gridTemplateColumns: "0.5fr 1fr", gap: "clamp(1.5rem, 4vw, 4rem)", alignItems: "start" }}>
            <Eyebrow dash>The brief</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
              <p className="skg-display-italic" style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}>{p.narrative}</p>
              <p className="skg-body" style={{ maxWidth: "58ch" }}>
                Every material here is chosen for its ability to age — not just to perform. We resist anything that must
                be replaced within a decade. As with all SKG work, the brief is written for the building&rsquo;s tenth year,
                not its opening week.
              </p>
            </div>
          </div>
          <div className="detail-gallery" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "clamp(2.5rem, 4vw, 3.5rem)" }}>
            <Reveal>
              <Figure tone="light" ratio="1 / 1" caption="Materiality · limestone & timber" />
            </Reveal>
            <Reveal delay={90}>
              <Figure tone="dark" ratio="1 / 1" caption="Interior atmosphere · warm grade" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Next project */}
      <section style={{ padding: "var(--section-pad-y-tight) 0", borderTop: "1px solid var(--border-subtle)", background: "var(--bone-300)" }}>
        <Container size="xl">
          <Link href={`/projects/${next.slug}`} className="lift" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1.5rem", padding: "clamp(1.4rem, 3vw, 2rem)", background: "var(--bone-100)", border: "1px solid var(--border-subtle)" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <Eyebrow dash>Next project</Eyebrow>
              <span className="skg-display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "var(--text-primary)" }}>{next.name}</span>
            </span>
            <span style={{ color: "var(--accent)", display: "inline-flex" }} className="project-card__arrow">
              <ArrowRight size={32} />
            </span>
          </Link>
        </Container>
      </section>
    </>
  );
}

// Pre-render all project pages; 404 anything not in generateStaticParams.
export const dynamicParams = false;
