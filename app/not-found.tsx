import Link from "next/link";
import { Container } from "../components/site";
import { Eyebrow } from "../components/ds";
import { ArrowRight } from "../components/site/icons";

export default function NotFound() {
  return (
    <section
      className="skg-on-dark"
      style={{
        background: "var(--tobacco-800)",
        color: "var(--text-on-dark)",
        position: "relative",
        overflow: "hidden",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
      <Container size="md" style={{ position: "relative", textAlign: "center", paddingBlock: "clamp(4rem, 10vw, 8rem)" }}>
        <Eyebrow dash tone="on-dark">
          Error 404
        </Eyebrow>
        <h1 className="skg-display" style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", color: "var(--bone-100)", margin: "1.2rem 0" }}>
          This ground is not here.
        </h1>
        <p className="skg-body skg-body--lead" style={{ maxWidth: "44ch", margin: "0 auto 2rem", color: "var(--text-on-dark-muted)" }}>
          The page you were looking for has moved or never existed. Let us point you back to firmer ground.
        </p>
        <div style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="skg-btn skg-btn--accent">
            Return home <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
          </Link>
          <Link href="/projects" className="skg-btn skg-btn--inverse">
            View projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
