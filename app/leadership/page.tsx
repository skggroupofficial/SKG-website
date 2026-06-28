import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ds";
import { Container, SectionHeading, Figure } from "@/components/site";
import { ArrowRight, MapPin, Phone, EnvelopeSimple } from "@/components/site/icons";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { leadership } from "@/content/leadership";
import { brand } from "@/content/brand";

export const metadata: Metadata = buildMetadata({
  title: "Leadership",
  description:
    "Shri Kuber Group is led from Hanumangarh, Rajasthan by one accountable team, under Managing Director Arvind Soni — from the first survey to the fifteen-year guest.",
  path: "/leadership",
});

export default function LeadershipPage() {
  const { intro, principal, director, firm } = leadership;

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Leadership", path: "/leadership" },
        ])}
      />

      {/* Page head */}
      <section
        className="skg-on-dark"
        style={{
          background: "var(--tobacco-900)",
          color: "var(--text-on-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
        <Container size="lg" style={{ position: "relative", padding: "clamp(3.5rem, 7vw, 6rem) var(--gutter)" }}>
          <Eyebrow dash tone="on-dark">
            The firm
          </Eyebrow>
          <h1
            className="skg-display"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "var(--bone-100)", margin: "1.2rem 0", maxWidth: "16ch" }}
          >
            One team. One horizon.
          </h1>
          <p className="skg-body skg-body--lead" style={{ maxWidth: "56ch", color: "var(--text-on-dark-muted)" }}>
            {intro}
          </p>
        </Container>
      </section>

      {/* Managing Director feature */}
      <section style={{ padding: "var(--section-pad-y) 0" }}>
        <Container size="xl">
          <Reveal>
            <div
              className="split-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "0.9fr 1.1fr",
                gap: "clamp(2rem, 5vw, 5rem)",
                alignItems: "center",
              }}
            >
              <Figure tone="dark" ratio="4 / 5" caption="Portrait · warm grade" />

              <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                <Eyebrow dash>{principal.role}</Eyebrow>
                <h2 className="skg-display" style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)" }}>
                  {principal.name}
                </h2>
                <p
                  className="skg-display-italic"
                  style={{
                    fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)",
                    color: "var(--text-accent)",
                    maxWidth: "24ch",
                  }}
                >
                  &ldquo;{principal.quote}&rdquo;
                </p>
                {principal.bio.map((para) => (
                  <p key={para.slice(0, 24)} className="skg-body" style={{ fontSize: "var(--text-md)", maxWidth: "56ch" }}>
                    {para}
                  </p>
                ))}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", marginTop: "0.4rem" }}>
                  <Link
                    href={`tel:${principal.phoneHref}`}
                    style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.82rem", letterSpacing: "0.04em", color: "var(--text-secondary)" }}
                  >
                    <Phone size={15} weight="regular" color="var(--accent)" />
                    {principal.phone}
                  </Link>
                  <Link
                    href={`mailto:${principal.email}`}
                    style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.82rem", letterSpacing: "0.04em", color: "var(--text-secondary)" }}
                  >
                    <EnvelopeSimple size={15} weight="regular" color="var(--accent)" />
                    {principal.email}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Director */}
      <section style={{ padding: "0 0 var(--section-pad-y)", borderTop: "1px solid var(--border-subtle)" }}>
        <Container size="xl">
          <Reveal>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(1.5rem, 3vw, 3rem)",
                padding: "clamp(2rem, 3.5vw, 3rem)",
                background: "var(--bone-300)",
                border: "1px solid var(--border-subtle)",
                marginTop: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              <Figure tone="dark" ratio="1 / 1" caption="" style={{ width: "clamp(80px, 10vw, 120px)", flexShrink: 0 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <Eyebrow dash>{director.role}</Eyebrow>
                <h2 className="skg-display" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", margin: 0 }}>
                  {director.name}
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", marginTop: "0.4rem" }}>
                  <Link
                    href={`tel:${director.phoneHref}`}
                    style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.82rem", letterSpacing: "0.04em", color: "var(--text-secondary)" }}
                  >
                    <Phone size={15} weight="regular" color="var(--accent)" />
                    {director.phone}
                  </Link>
                  <Link
                    href={`mailto:${director.email}`}
                    style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.82rem", letterSpacing: "0.04em", color: "var(--text-secondary)" }}
                  >
                    <EnvelopeSimple size={15} weight="regular" color="var(--accent)" />
                    {director.email}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Firm principles */}
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
          <SectionHeading
            eyebrow="How we are built"
            title="A firm held to one set of standards."
            intro="We keep develop, build and host under one roof so that no decision is made by someone who will not have to answer for it later."
            introMax="56ch"
          />
          <div
            className="flow-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginTop: "clamp(2.5rem, 4vw, 3.5rem)",
            }}
          >
            {firm.map((f, i) => (
              <Reveal key={f.no} delay={i * 90}>
                <div
                  style={{
                    background: "var(--bone-100)",
                    border: "1px solid var(--border-subtle)",
                    padding: "clamp(1.6rem, 2.4vw, 2.2rem)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "var(--accent)" }}>
                    {f.no}
                  </span>
                  <h3 className="skg-subheading" style={{ fontSize: "1.4rem" }}>
                    {f.title}
                  </h3>
                  <p className="skg-body" style={{ fontSize: "0.95rem", margin: 0 }}>
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing band */}
      <section style={{ background: "var(--bone-300)", padding: "var(--section-pad-y) 0", borderTop: "1px solid var(--border-subtle)" }}>
        <Container size="lg">
          <div
            className="cta-grid"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "clamp(2rem, 5vw, 4rem)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", maxWidth: "44ch" }}>
              <Eyebrow dash>Work with us</Eyebrow>
              <h2 className="skg-display" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}>
                Bring us your ground.
              </h2>
              <p className="skg-body" style={{ fontSize: "var(--text-md)" }}>
                Landowners, capital partners and guests return to us because what we say at the start is what stands a
                decade later. Speak to the team that will answer for it.
              </p>
              <div style={{ marginTop: "0.4rem" }}>
                <Link href="/contact" className="skg-btn skg-btn--accent">
                  Work with us <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
              <div style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
                <MapPin size={18} weight="regular" color="var(--accent)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                <address style={{ fontStyle: "normal" }} className="skg-body">
                  {brand.address.lines.map((line) => (
                    <span key={line} style={{ display: "block", fontSize: "0.95rem" }}>
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <Link
                href={`tel:${brand.phoneHref}`}
                style={{ display: "flex", gap: "0.7rem", alignItems: "center", fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-secondary)" }}
              >
                <Phone size={18} weight="regular" color="var(--accent)" style={{ flexShrink: 0 }} />
                {brand.phone}
              </Link>
              <Link
                href={`mailto:${brand.email}`}
                style={{ display: "flex", gap: "0.7rem", alignItems: "center", fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-secondary)" }}
              >
                <EnvelopeSimple size={18} weight="regular" color="var(--accent)" style={{ flexShrink: 0 }} />
                {brand.email}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
