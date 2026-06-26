import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ds";
import { Container, SectionHeading } from "@/components/site";
import { divisionIcon, ArrowRight } from "@/components/site/icons";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { principles } from "@/content/principles";
import { divisions } from "@/content/divisions";
import { materials } from "@/content/materials";

export const metadata: Metadata = buildMetadata({
  title: "Approach",
  description:
    "Ground, Form, Experience. How SKG works — vertically integrated, long-horizon and material-honest: we develop, build and host under one accountable roof.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Approach", path: "/approach" },
        ])}
      />

      {/* Page head */}
      <section
        className="skg-on-dark"
        style={{ background: "var(--tobacco-800)", color: "var(--text-on-dark)", position: "relative", overflow: "hidden" }}
      >
        <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
        <Container size="lg" style={{ position: "relative", padding: "clamp(3.5rem, 7vw, 6rem) var(--gutter)" }}>
          <Eyebrow dash tone="on-dark">
            Our approach
          </Eyebrow>
          <h1
            className="skg-display"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "var(--bone-100)", margin: "1.2rem 0", maxWidth: "16ch" }}
          >
            Ground. Form. Experience.
          </h1>
          <p className="skg-body skg-body--lead" style={{ maxWidth: "54ch", color: "var(--text-on-dark-muted)" }}>
            SKG is a vertically integrated firm &mdash; not because integration is efficient, but because the alternative
            produces places where no one is fully accountable.
          </p>
        </Container>
      </section>

      {/* Principles */}
      <section style={{ padding: "var(--section-pad-y) 0" }}>
        <Container size="lg">
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {principles.map((pr, i) => (
              <Reveal key={pr.no}>
                <div
                  className="principle-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "0.16fr 0.34fr 1fr",
                    gap: "1.5rem",
                    alignItems: "baseline",
                    padding: "clamp(1.6rem, 3vw, 2.4rem) 0",
                    borderTop: i === 0 ? "1px solid var(--border-default)" : "1px solid var(--border-subtle)",
                    borderBottom: i === principles.length - 1 ? "1px solid var(--border-default)" : "none",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "0.16em", color: "var(--accent)" }}>
                    {pr.no}
                  </span>
                  <h2 className="skg-display" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}>
                    {pr.name}
                  </h2>
                  <p className="skg-body" style={{ fontSize: "var(--text-md)", maxWidth: "52ch" }}>
                    {pr.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Vertical integration */}
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
            eyebrow="One roof"
            title="Develop, build, host — decisions that carry through."
            intro="When you develop, build and operate under one roof, a choice made at the design stage carries through to the guest who sleeps in the room fifteen years later."
            introMax="58ch"
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
            {divisions.map((d, i) => {
              const Icon = divisionIcon[d.icon];
              return (
                <Reveal key={d.id} delay={i * 90}>
                  <div
                    style={{
                      background: "var(--bone-100)",
                      border: "1px solid var(--border-subtle)",
                      padding: "clamp(1.5rem, 2.2vw, 2rem)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.9rem",
                      height: "100%",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                      {Icon && <Icon size={26} weight="light" color="var(--accent)" />}
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.18em", color: "var(--text-muted)" }}>
                        {d.no}
                      </span>
                    </div>
                    <h3 className="skg-subheading" style={{ fontSize: "1.4rem" }}>
                      {d.name}
                    </h3>
                    <p className="skg-body" style={{ fontSize: "0.92rem", margin: 0 }}>
                      {d.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Material philosophy */}
      <section style={{ padding: "var(--section-pad-y) 0" }}>
        <Container size="xl">
          <div
            className="material-grid"
            style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "center" }}
          >
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                <Eyebrow dash>Material honesty</Eyebrow>
                <p className="skg-display-italic" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  We do not use materials to simulate other materials.
                </p>
                <p className="skg-body" style={{ maxWidth: "54ch" }}>
                  Every material used across SKG developments is chosen for its ability to age &mdash; not just to perform.
                  We resist anything that must be replaced within a decade. The brand&rsquo;s material language is a direct
                  extension of the built work.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="materials-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
                {materials.map((m) => (
                  <div key={m.name} style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    <div style={{ height: "84px", background: m.token, border: "1px solid var(--border-subtle)" }} aria-hidden="true" />
                    <span className="skg-subheading" style={{ fontSize: "1.05rem" }}>
                      {m.name}
                    </span>
                    <span className="skg-body" style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                      {m.use}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Closing quote */}
      <section
        className="skg-on-dark"
        style={{
          background: "var(--tobacco-900)",
          color: "var(--text-on-dark)",
          padding: "clamp(4rem, 8vw, 6.5rem) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0, opacity: 0.5 }} aria-hidden="true" />
        <Container size="md" style={{ position: "relative", textAlign: "center" }}>
          <Reveal>
            <span style={{ color: "var(--brass-300)", fontSize: "1.3rem" }}>✦</span>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3.4vw, 2.5rem)",
                lineHeight: 1.3,
                color: "var(--bone-100)",
                margin: "1.2rem auto 1.8rem",
                maxWidth: "26ch",
              }}
            >
              We measure success on a long horizon. A project that performs in year one and degrades in year ten is not a
              success.
            </p>
            <Link href="/contact" className="skg-btn skg-btn--accent">
              Work with us <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
