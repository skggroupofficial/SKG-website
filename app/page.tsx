import Link from "next/link";
import { Eyebrow, Tag, Divider } from "../components/ds";
import { Container, SectionHeading, Figure, PhotoMosaic } from "../components/site";
import { JsonLd } from "../components/site/JsonLd";
import { divisionIcon, ArrowRight, ArrowUpRight } from "../components/site/icons";
import { Reveal } from "../components/motion/Reveal";
import { KineticHeading } from "../components/motion/KineticHeading";
import { CountUp } from "../components/motion/CountUp";
import { divisions } from "../content/divisions";
import { stats } from "../content/stats";
import { projects } from "../content/projects";
import { articles } from "../content/journal";
import { faqLd } from "../lib/jsonld";

const FAQ = [
  {
    q: "What does Shri Kuber Group do?",
    a: "Shri Kuber Group (SKG) is a vertically integrated real estate developer based in Hanumangarh, Rajasthan. We develop the land and build the structure in-house, and we intend to operate the hospitality within our developments ourselves as that side of the firm grows — three disciplines under one accountable roof.",
  },
  {
    q: "Where does SKG operate?",
    a: "We develop from Hanumangarh, Rajasthan, and, where a building deserves it, into neighbouring regions. Our office is at #27 City Center Market, Hanumangarh.",
  },
  {
    q: "What does 'develop, build, host' mean?",
    a: "Develop is land acquisition, feasibility and masterplanning. Build is in-house construction and material governance. Host is operating the hospitality and estates ourselves — so a decision made at design reaches the guest fifteen years later.",
  },
  {
    q: "What has SKG built so far?",
    a: "CCM City Walk, our stone-colonnaded retail arcade in Hanumangarh, is underway now — the first units are open, glass-fronted and trading, with the rest of the arcade completing bay by bay. It is the standard the rest of our work is held to.",
  },
];

function Hero() {
  const p = projects[0];
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
        style={{
          position: "relative",
          paddingTop: "clamp(3.5rem, 7vw, 6.5rem)",
          paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            <Reveal delay={80}>
              <Eyebrow dash tone="on-dark">
                Develop · Build · Host
              </Eyebrow>
            </Reveal>
            <KineticHeading
              as="h1"
              className="skg-display"
              style={{ fontSize: "clamp(2.8rem, 6.4vw, 5.4rem)", lineHeight: 0.98, color: "var(--bone-100)" }}
              lines={["Built to last beyond", "the current cycle."]}
            />
            <Reveal delay={500}>
              <p className="skg-body skg-body--lead" style={{ maxWidth: "46ch", color: "var(--text-on-dark-muted)" }}>
                Shri Kuber Group is a vertically integrated real estate firm — we acquire the ground, build the
                structure, and operate the hospitality within it. One team, accountable from the first survey to the
                fifteen-year guest.
              </p>
            </Reveal>
            <Reveal delay={620}>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "0.4rem" }}>
                <Link href="/projects" className="skg-btn skg-btn--accent">
                  View projects <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
                </Link>
                <Link href="/approach" className="skg-btn skg-btn--inverse">
                  Our approach
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div style={{ position: "relative" }}>
              <Figure
                tone={p.tone}
                ratio="4 / 5"
                src={p.image?.src}
                alt={p.image?.alt ?? p.name}
                caption={p.caption}
                priority
              />
              <Link
                href={`/projects/${p.slug}`}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "1rem",
                  background: "rgba(28,18,10,0.55)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  padding: "0.5rem 0.7rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                }}
              >
                <Tag variant="outline">{p.status}</Tag>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10.5px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--bone-200)",
                  }}
                >
                  {p.name} →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <div style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
          <div style={{ height: "1px", background: "var(--border-on-dark)", marginBottom: "2rem" }} />
          <div className="hero-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
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
                  {s.unit && <span style={{ fontSize: "0.46em", color: "var(--brass-300)", marginLeft: "0.12em" }}>{s.unit}</span>}
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
          className="manifesto-grid"
          style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}
        >
          <Reveal>
            <Eyebrow dash>Vertically Integrated · Long-Horizon · Place-Led</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="skg-display-italic" style={{ fontSize: "clamp(1.5rem, 3vw, 2.3rem)", color: "var(--text-primary)", marginBottom: "1.8rem" }}>
              We are not merely builders — we are shapers of place.
            </p>
            <p className="skg-body" style={{ maxWidth: "60ch", fontSize: "var(--text-md)" }}>
              From land acquisition through construction to the operation of hospitality experiences within our
              developments, SKG exercises considered judgment at every phase. Our projects are designed to endure, to
              age with grace, and to generate long-term value for all who inhabit them.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Divisions() {
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
        <SectionHeading
          eyebrow="What we do"
          title="Three disciplines, one accountable firm."
          intro="Most developers hand the building to someone else and the operation to a third party. We keep all three under one roof — because the alternative produces places where no one is fully responsible."
          introMax="56ch"
        />
        <div
          className="divisions-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "clamp(2.5rem, 4vw, 3.5rem)" }}
        >
          {divisions.map((d, i) => {
            const Icon = divisionIcon[d.icon];
            return (
              <Reveal key={d.id} delay={i * 90}>
                <div
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
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {Icon && <Icon size={32} weight="light" color="var(--accent)" />}
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "var(--text-faint)" }}>{d.no}</span>
                  </div>
                  <h3 className="skg-display" style={{ fontSize: "1.9rem" }}>{d.name}</h3>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.05rem", color: "var(--text-accent)", margin: 0 }}>{d.lead}</p>
                  <p className="skg-body" style={{ fontSize: "0.95rem", margin: 0 }}>{d.body}</p>
                  <ul style={{ listStyle: "none", margin: "0.4rem 0 0", padding: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {d.points.map((p) => (
                      <li key={p} style={{ display: "flex", gap: "0.6rem", alignItems: "baseline", fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
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

function Featured() {
  const p = projects[0];
  return (
    <section style={{ padding: "var(--section-pad-y) 0" }}>
      <Container size="xl">
        <div
          className="featured-grid"
          style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "clamp(2rem, 4vw, 4rem)", alignItems: "center" }}
        >
          <Reveal>
            <Figure
              tone={p.tone}
              ratio="16 / 11"
              src={p.gallery?.[1]?.src ?? p.image?.src}
              alt={p.gallery?.[1]?.alt ?? p.name}
              caption={p.gallery?.[1]?.caption ?? p.caption}
            />
          </Reveal>
          <Reveal delay={90}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              <Eyebrow dash>Featured · {p.phase}</Eyebrow>
              <h2 className="skg-display" style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)" }}>{p.name}</h2>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <Tag variant="outline">{p.type}</Tag>
                <Tag variant="neutral">{p.location}</Tag>
                <Tag>{p.status}</Tag>
              </div>
              <p className="skg-body" style={{ fontSize: "var(--text-md)" }}>{p.narrative}</p>
              <div>
                <Link href={`/projects/${p.slug}`} className="skg-btn skg-btn--secondary">
                  View project <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function QuoteBand() {
  return (
    <section
      className="skg-on-dark"
      style={{ background: "var(--tobacco-800)", color: "var(--text-on-dark)", padding: "clamp(4rem, 8vw, 7rem) 0", position: "relative", overflow: "hidden" }}
    >
      <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0, opacity: 0.5 }} aria-hidden="true" />
      <Container size="md" style={{ position: "relative", textAlign: "center" }}>
        <Reveal>
          <span style={{ color: "var(--brass-300)", fontSize: "1.4rem" }}>✦</span>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.6rem, 3.6vw, 2.7rem)",
              lineHeight: 1.25,
              color: "var(--bone-100)",
              margin: "1.2rem auto 1.6rem",
              maxWidth: "22ch",
            }}
          >
            &ldquo;We build places that outlast the conversation about them.&rdquo;
          </p>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-on-dark-faint)" }}>
            Om Soni · Managing Director
          </span>
        </Reveal>
      </Container>
    </section>
  );
}

function SiteGallery() {
  const p = projects[0];
  const shots = (p.gallery ?? []).slice(2, 5);
  if (shots.length === 0) return null;
  return (
    <section style={{ padding: "var(--section-pad-y) 0" }}>
      <Container size="xl">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap", marginBottom: "clamp(2rem, 3.5vw, 3rem)" }}>
          <SectionHeading eyebrow="On site" title="Ground we are continuing." max="18ch" />
          <Link href={`/projects/${p.slug}`} className="skg-btn skg-btn--link">
            The full gallery <ArrowUpRight size={15} className="skg-btn__icon" />
          </Link>
        </div>
        <Reveal>
          <PhotoMosaic images={shots} tone={p.tone} />
        </Reveal>
      </Container>
    </section>
  );
}

function JournalTeaser() {
  const items = articles.slice(0, 3);
  return (
    <section style={{ padding: "0 0 var(--section-pad-y)" }}>
      <Container size="xl">
        <Divider variant="gold" />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap", margin: "clamp(2rem, 3.5vw, 3rem) 0" }}>
          <SectionHeading eyebrow="Journal" title="On building for the long horizon." max="20ch" />
          <Link href="/journal" className="skg-btn skg-btn--link">
            Read the journal <ArrowUpRight size={15} className="skg-btn__icon" />
          </Link>
        </div>
        <div className="journal-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {items.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <Link
                href={`/journal/${a.slug}`}
                className="lift"
                style={{ display: "flex", flexDirection: "column", gap: "0.9rem", padding: "1.6rem", height: "100%", background: "var(--bone-100)", border: "1px solid var(--border-subtle)" }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}>{a.category}</span>
                <h3 className="skg-subheading" style={{ fontSize: "1.4rem" }}>{a.title}</h3>
                <p className="skg-body" style={{ fontSize: "0.9rem", flex: 1 }}>{a.excerpt}</p>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>{a.readingTime} read</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FaqAndCta() {
  return (
    <section style={{ padding: "var(--section-pad-y-tight) 0 var(--section-pad-y)", background: "var(--bone-300)", borderTop: "1px solid var(--border-subtle)" }}>
      <Container size="lg">
        <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "clamp(2rem, 5vw, 4.5rem)", alignItems: "start" }}>
          <SectionHeading eyebrow="In short" title="Considered. Not cautious." max="14ch" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FAQ.map((f, i) => (
              <div key={f.q} style={{ padding: "1.3rem 0", borderTop: i === 0 ? "1px solid var(--border-default)" : "1px solid var(--border-subtle)" }}>
                <h3 className="skg-subheading" style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{f.q}</h3>
                <p className="skg-body" style={{ fontSize: "0.95rem", maxWidth: "58ch" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-grid" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem", flexWrap: "wrap", marginTop: "clamp(2.5rem, 5vw, 4rem)", paddingTop: "clamp(2rem, 4vw, 3rem)", borderTop: "1px solid var(--border-default)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <Eyebrow dash>Land · Capital · Partnership</Eyebrow>
            <h2 className="skg-display" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}>Let&rsquo;s talk about your ground.</h2>
          </div>
          <Link href="/contact" className="skg-btn skg-btn--accent skg-btn--lg">
            Start a conversation <ArrowRight size={16} weight="bold" className="skg-btn__icon" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd(FAQ)} />
      <Hero />
      <Manifesto />
      <Divisions />
      <Featured />
      <QuoteBand />
      <SiteGallery />
      <JournalTeaser />
      <FaqAndCta />
    </>
  );
}
