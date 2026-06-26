import type { Metadata } from "next";
import { Container, SectionHeading } from "../../components/site";
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
        <Container size="xl" style={{ position: "relative", padding: "clamp(3rem, 6vw, 5rem) var(--gutter)" }}>
          <SectionHeading
            tone="dark"
            eyebrow="Selected work"
            title="Projects"
            intro="Six sites across Gujarat and Rajasthan — developed, built and, where we host, operated by SKG."
            introMax="50ch"
          />
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
