import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../../components/ds";
import { Container, SectionHeading, Figure } from "../../components/site";
import { JsonLd } from "../../components/site/JsonLd";
import { ArrowRight, HandHeart, Plant, Stack } from "../../components/site/icons";
import { Reveal } from "../../components/motion/Reveal";
import { CountUp } from "../../components/motion/CountUp";
import { stats } from "../../content/stats";
import { brand } from "../../content/brand";
import { buildMetadata } from "../../lib/seo";
import { breadcrumbLd, faqLd } from "../../lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Land & Partnerships",
  description:
    "SKG partners with landowners and capital on a long horizon — underwriting, developing, building and operating, with one accountable team.",
  path: "/partnerships",
});

const OFFERS = [
  {
    icon: Plant,
    title: "For landowners",
    body: "Bring us your ground. We assemble, underwrite and continue the story of the land — securing approvals and shaping a masterplan that earns its place rather than merely filling it.",
    points: [
      "Site assembly & joint development",
      "Feasibility & long-horizon underwriting",
      "A masterplan that respects the parcel",
    ],
  },
  {
    icon: HandHeart,
    title: "For investors",
    body: "We are long-horizon and material-honest. Our average hold is eighteen years, and we operate what we build — so the return is earned from a working asset, not a quick exit.",
    points: [
      "Eighteen-year average hold",
      "In-house operation, not an exit play",
      "Material choices made to age",
    ],
  },
  {
    icon: Stack,
    title: "For JV & institutional partners",
    body: "One accountable team carries the asset from acquisition through construction to operation. There is no hand-off, no diffusion of responsibility — a single party answers for the building’s tenth year.",
    points: [
      "Single accountability, start to finish",
      "Acquisition, build and operation aligned",
      "Governance you can audit",
    ],
  },
];

const FAQ = [
  {
    q: "How does a land joint venture with SKG work?",
    a: "We typically structure a joint development where the landowner contributes the parcel and SKG contributes underwriting, development management, in-house construction and operation. Terms are set against a long-horizon underwriting of the site rather than a quick sale, and a single SKG team stays accountable from the first survey through to operation.",
  },
  {
    q: "What does SKG underwrite for investors?",
    a: "We underwrite the ground for the long horizon — assembling parcels, securing approvals and shaping the masterplan before a line is built. Because we build in-house and operate the hospitality ourselves, the investment case rests on a working asset held for an average of eighteen years, not a rapid exit.",
  },
  {
    q: "Why does single accountability reduce risk?",
    a: "When the same firm develops, builds and operates, a decision made at design reaches the guest fifteen years later — and the team that made it still owns the consequence. There is no hand-off where responsibility is diffused, so quality and material choices are made for the building’s tenth year, not its opening week.",
  },
];

function PageHead() {
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
        style={{ position: "absolute", top: "-20%", right: "-10%", width: "50%", height: "140%" }}
      />
      <Container
        size="xl"
        style={{ position: "relative", padding: "clamp(3.5rem, 7vw, 6rem) var(--gutter) clamp(2.5rem, 5vw, 4rem)" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", maxWidth: "62ch" }}>
          <Eyebrow dash tone="on-dark">
            Land · Capital · Partnership
          </Eyebrow>
          <h1
            className="skg-display"
            style={{ fontSize: "clamp(2.8rem, 6.4vw, 5.4rem)", lineHeight: 0.98, color: "var(--bone-100)" }}
          >
            Bring us your ground.
          </h1>
          <p className="skg-body skg-body--lead" style={{ maxWidth: "52ch", color: "var(--text-on-dark-muted)" }}>
            We partner with landowners and capital on a long horizon. SKG underwrites the site, develops it, builds
            the structure in-house and operates what it builds — one accountable team from the first survey to the
            fifteen-year guest.
          </p>
          <div style={{ marginTop: "0.4rem" }}>
            <Link href="/contact" className="skg-btn skg-btn--accent">
              Start a conversation <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrackRecord() {
  return (
    <section
      className="skg-on-dark"
      style={{
        background: "var(--tobacco-900)",
        color: "var(--text-on-dark)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--border-on-dark)",
      }}
    >
      <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0, opacity: 0.5 }} aria-hidden="true" />
      <Container size="xl" style={{ position: "relative", padding: "clamp(2.5rem, 4vw, 3.5rem) var(--gutter)" }}>
        <div
          className="hero-stats"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 3.4vw, 3rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "var(--bone-100)",
                }}
              >
                <CountUp value={s.value} />
                {s.unit && (
                  <span style={{ fontSize: "0.46em", color: "var(--brass-300)", marginLeft: "0.12em" }}>{s.unit}</span>
                )}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10.5px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-on-dark-faint)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Offer() {
  return (
    <section style={{ padding: "var(--section-pad-y) 0" }}>
      <Container size="xl">
        <SectionHeading
          eyebrow="What we underwrite"
          title="What partnership with us looks like."
          intro="We work with three kinds of partner. In each case, the same firm carries the asset from the ground to the guest — so the people who answer for the building never change."
          introMax="56ch"
        />
        <div
          className="partners-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "clamp(2.5rem, 4vw, 3.5rem)",
          }}
        >
          {OFFERS.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal key={o.title} delay={i * 90}>
                <div
                  className="lift"
                  style={{
                    background: "var(--bone-100)",
                    border: "1px solid var(--border-subtle)",
                    padding: "clamp(1.6rem, 2.4vw, 2.2rem)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.1rem",
                  }}
                >
                  <Icon size={32} weight="light" color="var(--accent)" />
                  <h3 className="skg-subheading" style={{ fontSize: "1.5rem" }}>
                    {o.title}
                  </h3>
                  <p className="skg-body" style={{ fontSize: "0.95rem", margin: 0 }}>
                    {o.body}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: "0.4rem 0 0",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.55rem",
                    }}
                  >
                    {o.points.map((p) => (
                      <li
                        key={p}
                        style={{
                          display: "flex",
                          gap: "0.6rem",
                          alignItems: "baseline",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.88rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span style={{ color: "var(--accent)", fontSize: "0.7em" }}>✦</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Thesis() {
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
      <Container size="lg">
        <div
          className="split-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "clamp(2rem, 5vw, 4.5rem)",
            alignItems: "center",
          }}
        >
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              <Eyebrow dash>Why integration</Eyebrow>
              <p className="skg-display-italic" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)", color: "var(--text-primary)" }}>
                One team, one horizon.
              </p>
              <p className="skg-body" style={{ maxWidth: "52ch" }}>
                Most developers hand the building to a contractor and the operation to a third party. Each hand-off
                diffuses responsibility and dates the asset. We keep all three under one roof, because single
                accountability is what reduces risk for a partner and lets a place age with grace.
              </p>
              <p className="skg-body" style={{ maxWidth: "52ch" }}>
                When the firm that designed a detail still operates it fifteen years on, the incentive is permanence,
                not the opening week. That is the case we make to every partner who brings us their ground or their
                capital.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <Figure tone="dark" ratio="4 / 3" caption="One accountable team · acquisition to operation" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ClosingCta() {
  return (
    <section
      className="skg-lattice"
      style={{ background: "var(--bone-300)", padding: "var(--section-pad-y) 0", borderTop: "1px solid var(--border-subtle)" }}
    >
      <Container size="lg">
        <div
          className="cta-grid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            <Eyebrow dash>Land · Capital · Partnership</Eyebrow>
            <h2 className="skg-display" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}>
              Let&rsquo;s talk about your ground.
            </h2>
            <div
              style={{
                display: "flex",
                gap: "0.5rem 2rem",
                flexWrap: "wrap",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              <a href={`tel:${brand.phoneHref}`} style={{ color: "var(--text-secondary)" }}>
                {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`} style={{ color: "var(--text-secondary)" }}>
                {brand.email}
              </a>
            </div>
          </div>
          <Link href="/contact" className="skg-btn skg-btn--accent skg-btn--lg">
            Start a conversation <ArrowRight size={16} weight="bold" className="skg-btn__icon" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Land & Partnerships", path: "/partnerships" },
          ]),
          faqLd(FAQ),
        ]}
      />
      <PageHead />
      <TrackRecord />
      <Offer />
      <Thesis />
      <ClosingCta />
    </>
  );
}
