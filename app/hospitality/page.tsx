import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Tag, Divider } from "@/components/ds";
import { Container, Figure } from "@/components/site";
import { JsonLd } from "@/components/site/JsonLd";
import { ArrowRight, ArrowUpRight, MapPin } from "@/components/site/icons";
import { Reveal } from "@/components/motion/Reveal";
import { hospitalityProjects } from "@/content/projects";
import { divisions } from "@/content/divisions";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbLd, projectLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Hospitality",
  description:
    "SKG operates what it builds — The Kuber, an 84-key house hotel, and The Linen House, a 36-key haveli retreat in Udaipur. Run in-house.",
  path: "/hospitality",
});

const host = divisions.find((d) => d.id === "host")!;

const HOW_WE_HOST = [
  {
    title: "Operated in-house",
    body: "We do not hand the building to a third party. The team that approved the joinery answers for how the rooms feel after a thousand nights.",
  },
  {
    title: "Materials that age",
    body: "Limestone, linen and unlacquered brass — chosen to soften with use rather than wear out. We host inside what we build to be sure they do.",
  },
  {
    title: "Long-horizon care",
    body: "A decision made at design should reach the guest fifteen years later. We run the estate ourselves so that accountability never changes hands.",
  },
];

function Hero() {
  return (
    <section
      className="skg-on-dark"
      style={{
        position: "relative",
        background: "var(--tobacco-800)",
        color: "var(--text-on-dark)",
        overflow: "hidden",
      }}
    >
      <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
      <div
        className="skg-glow"
        aria-hidden="true"
        style={{ position: "absolute", top: "-25%", right: "-12%", width: "55%", height: "150%" }}
      />
      <Container
        size="xl"
        style={{
          position: "relative",
          paddingTop: "clamp(3.5rem, 7vw, 6.5rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", maxWidth: "60ch" }}>
          <Eyebrow dash tone="on-dark">
            Host — Hospitality
          </Eyebrow>
          <h1
            className="skg-display"
            style={{
              fontSize: "clamp(2.8rem, 6.4vw, 5.4rem)",
              lineHeight: 0.98,
              color: "var(--bone-100)",
            }}
          >
            We operate what we build.
          </h1>
          <p className="skg-body skg-body--lead" style={{ maxWidth: "48ch", color: "var(--text-on-dark-muted)" }}>
            Permanence demands accountability. We run the hospitality inside our developments ourselves — so a
            decision made at the design stage reaches the guest fifteen years later, and never passes through a
            hand that did not build the place.
          </p>
          <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "0.4rem" }}>
            <Link href="/contact" className="skg-btn skg-btn--accent">
              Plan a stay <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
            </Link>
            <Link href="/projects" className="skg-btn skg-btn--inverse">
              See the work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Manifesto() {
  return (
    <section style={{ padding: "var(--section-pad-y) 0" }}>
      <Container size="lg">
        <div
          className="split-grid"
          style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}
        >
          <Reveal>
            <Eyebrow dash>Operated in-house · Materials that age · Long-horizon</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p
              className="skg-display-italic"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.3rem)", color: "var(--text-primary)", marginBottom: "1.8rem" }}
            >
              A decision made at design should reach the guest fifteen years later.
            </p>
            <p className="skg-body" style={{ maxWidth: "60ch", fontSize: "var(--text-md)" }}>
              Most developers build a hotel and hand it to an operator who was never in the room. We keep the
              operation in-house. The same people who chose the limestone, the linen and the unlacquered brass
              are the ones who answer for how a room feels after a thousand nights of use. That is the only way we
              know to be accountable for permanence.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Properties() {
  return (
    <section
      className="skg-lattice"
      style={{
        background: "var(--bone-300)",
        padding: "var(--section-pad-y) 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <Container size="xl">
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 6vw, 5.5rem)" }}>
          {hospitalityProjects.map((p, i) => {
            const figureFirst = i % 2 === 0;
            const figure = (
              <Reveal>
                <Figure tone="dark" ratio="4 / 3" caption={p.caption} />
              </Reveal>
            );
            const detail = (
              <Reveal delay={90}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  <Eyebrow dash>
                    <MapPin size={12} weight="bold" style={{ marginRight: "0.35rem", verticalAlign: "-1px" }} />
                    {p.location}
                  </Eyebrow>
                  <h2 className="skg-display" style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)" }}>
                    {p.name}
                  </h2>
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    <Tag variant="outline">{p.type}</Tag>
                    <Tag variant={p.status.startsWith("Now") ? "jade" : "neutral"}>{p.status}</Tag>
                  </div>
                  <p className="skg-body" style={{ fontSize: "var(--text-md)", maxWidth: "52ch" }}>
                    {p.summary}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: "0.2rem 0 0",
                      padding: "1.2rem 0 0",
                      borderTop: "1px solid var(--border-default)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.7rem",
                    }}
                  >
                    {p.specs.map((s) => (
                      <li
                        key={s.k}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "1.5rem",
                          alignItems: "baseline",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10.5px",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "var(--text-faint)",
                          }}
                        >
                          {s.k}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "12px",
                            letterSpacing: "0.04em",
                            color: "var(--text-secondary)",
                            textAlign: "right",
                          }}
                        >
                          {s.v}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "0.4rem" }}>
                    <Link href={`/projects/${p.slug}`} className="skg-btn skg-btn--secondary">
                      Discover {p.name} <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
            return (
              <div
                key={p.slug}
                className="stay-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: figureFirst ? "1.1fr 0.9fr" : "0.9fr 1.1fr",
                  gap: "clamp(2rem, 5vw, 4.5rem)",
                  alignItems: "center",
                }}
              >
                {figureFirst ? (
                  <>
                    {figure}
                    {detail}
                  </>
                ) : (
                  <>
                    {detail}
                    {figure}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function HowWeHost() {
  return (
    <section style={{ padding: "var(--section-pad-y) 0" }}>
      <Container size="xl">
        <Reveal>
          <Eyebrow dash>How we host</Eyebrow>
        </Reveal>
        <div
          className="flow-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {HOW_WE_HOST.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                  padding: "clamp(1.6rem, 2.4vw, 2.2rem)",
                  height: "100%",
                  background: "var(--bone-100)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: "1.2rem", lineHeight: 1 }}>✦</span>
                <h3 className="skg-subheading" style={{ fontSize: "1.35rem" }}>
                  {v.title}
                </h3>
                <p className="skg-body" style={{ fontSize: "0.95rem", margin: 0 }}>
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClosingCta() {
  return (
    <section
      className="skg-lattice"
      style={{
        background: "var(--bone-300)",
        padding: "var(--section-pad-y-tight) 0 var(--section-pad-y)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <Container size="lg">
        <Divider variant="gold" />
        <div
          className="cta-grid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginTop: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            <Eyebrow dash>A stay, a visit, a conversation</Eyebrow>
            <h2 className="skg-display" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", maxWidth: "18ch" }}>
              Come and feel how it was built.
            </h2>
          </div>
          <Link href="/contact" className="skg-btn skg-btn--accent skg-btn--lg">
            Enquire <ArrowUpRight size={16} weight="bold" className="skg-btn__icon" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function HospitalityPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Hospitality", path: "/hospitality" },
          ]),
          ...hospitalityProjects.map((p) => projectLd(p)),
        ]}
      />
      <Hero />
      <Manifesto />
      <Properties />
      <HowWeHost />
      <ClosingCta />
    </>
  );
}
