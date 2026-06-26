import type { Metadata } from "next";
import { Eyebrow } from "@/components/ds";
import { Container, Figure, EnquiryForm } from "@/components/site";
import { MapPin, Phone, EnvelopeSimple, Clock } from "@/components/site/icons";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { brand } from "@/content/brand";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Talk to Shri Kuber Group about land, capital, partnership or a stay. Office on S.G. Highway, Ahmedabad.",
  path: "/contact",
});

function ContactRow({
  icon: IconCmp,
  label,
  children,
}: {
  icon: Icon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
      <IconCmp
        size={20}
        weight="regular"
        style={{ color: "var(--accent)", marginTop: "0.15rem", flexShrink: 0 }}
        aria-hidden="true"
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </span>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "var(--text-primary)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0 0" }}>
        <Container size="xl">
          <Eyebrow dash>Contact</Eyebrow>
          <h1
            className="skg-display"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)", margin: "1rem 0 0", maxWidth: "18ch" }}
          >
            Let&rsquo;s talk about your ground.
          </h1>
        </Container>
      </section>

      <section style={{ padding: "clamp(2.5rem, 5vw, 4rem) 0 var(--section-pad-y)" }}>
        <Container size="xl">
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "clamp(2.5rem, 5vw, 5rem)",
              alignItems: "start",
            }}
          >
            <Reveal>
              <EnquiryForm />
            </Reveal>

            <Reveal delay={80}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                <Figure tone="dark" ratio="16 / 10" caption="Shri Kuber House · S.G. Highway" />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                  <ContactRow icon={MapPin} label="Office">
                    {brand.address.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </ContactRow>
                  <ContactRow icon={Phone} label="Phone">
                    <a
                      href={`tel:${brand.phoneHref}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {brand.phone}
                    </a>
                  </ContactRow>
                  <ContactRow icon={EnvelopeSimple} label="Email">
                    <a
                      href={`mailto:${brand.email}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {brand.email}
                    </a>
                  </ContactRow>
                  <ContactRow icon={Clock} label="Hours">
                    {brand.hoursText}
                  </ContactRow>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
