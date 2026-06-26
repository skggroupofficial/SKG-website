import type { Metadata } from "next";
import { Container } from "../../components/site";
import { Eyebrow } from "../../components/ds";
import { ProjectsFilter } from "../../components/site/ProjectsFilter";
import { JsonLd } from "../../components/site/JsonLd";
import { projects } from "../../content/projects";
import { buildMetadata } from "../../lib/seo";
import { breadcrumbLd } from "../../lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Six sites across Gujarat and Rajasthan — developed, built and, where we host, operated by Shri Kuber Group. Mixed-use, residential, commercial and hospitality.",
  path: "/projects",
});

export default function ProjectsPage() {
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
          <p className="skg-body skg-body--lead" style={{ maxWidth: "50ch", color: "var(--text-on-dark-muted)" }}>
            Six sites across Gujarat and Rajasthan — developed, built and, where we host, operated by SKG.
          </p>
        </Container>
      </section>

      <section style={{ padding: "clamp(2.5rem, 5vw, 4rem) 0 var(--section-pad-y)" }}>
        <Container size="xl">
          <ProjectsFilter projects={projects} />
        </Container>
      </section>
    </>
  );
}
