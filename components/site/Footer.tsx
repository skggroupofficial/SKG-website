import * as React from "react";
import Link from "next/link";
import { Logo, Divider } from "../ds";
import { footerNav } from "../../content/navigation";
import { brand } from "../../content/brand";

export function Footer() {
  return (
    <footer
      className="skg-on-dark"
      style={{
        background: "var(--tobacco-900)",
        color: "var(--text-on-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="skg-lattice--dark" style={{ position: "absolute", inset: 0, opacity: 0.6 }} aria-hidden="true" />
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "clamp(3.5rem, 7vw, 6rem) var(--gutter) 2.5rem",
        }}
      >
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.3fr", gap: "2.5rem" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem", maxWidth: "32ch" }}>
            <Logo variant="wordmark" size={30} tagline tone="bone" />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.15rem",
                lineHeight: 1.4,
                color: "var(--text-on-dark-muted)",
              }}
            >
              We build places that outlast the conversation about them.
            </p>
          </div>

          {footerNav.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10.5px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--brass-300)",
                }}
              >
                {col.title}
              </span>
              {col.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="footer-link"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "var(--text-on-dark-muted)",
                    transition: "color var(--duration-fast) var(--ease-standard)",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Office details */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem 3rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            color: "var(--text-on-dark-muted)",
          }}
        >
          <address style={{ fontStyle: "normal" }}>
            {brand.address.lines.map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </address>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
              color: "var(--brass-300)",
            }}
          >
            <a href={`tel:${brand.phoneHref}`} style={{ color: "inherit" }}>
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} style={{ color: "inherit" }}>
              {brand.email}
            </a>
            <span style={{ color: "var(--text-on-dark-faint)" }}>{brand.hoursText}</span>
          </div>
        </div>

        <div style={{ margin: "3rem 0 1.6rem" }}>
          <Divider variant="sparkle" />
        </div>

        <div
          className="footer-legal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "10.5px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-on-dark-faint)",
          }}
        >
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <span>{brand.sectors.join(" · ")}</span>
          <span>{brand.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
