// ============================================================
// SKG Website — Project Detail
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const { Button, Eyebrow, Tag, Divider } = SKG;
  const { Container, Figure, Reveal } = window;
  const D = window.SKGData;

  function ProjectDetail({ id, onNav, onProject }) {
    const idx = D.projects.findIndex((p) => p.id === id);
    const p = D.projects[idx] || D.projects[0];
    const next = D.projects[(idx + 1) % D.projects.length];

    return (
      <main>
        <Container size="xl" style={{ paddingTop: '2rem' }}>
          <button onClick={() => onNav('projects')} style={{ appearance: 'none', background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            <i className="ph ph-arrow-left" /> All projects
          </button>
        </Container>

        {/* Hero */}
        <section style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem) 0 var(--section-pad-y-tight)' }}>
          <Container size="xl">
            <div className="detail-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                <Eyebrow dash>{p.division} · {p.type}</Eyebrow>
                <h1 className="skg-display" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1 }}>{p.name}</h1>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <Tag variant="neutral" icon={<i className="ph ph-map-pin" />}>{p.location}</Tag>
                  <Tag variant={p.status.startsWith('Now') ? 'jade' : 'outline'}>{p.status}</Tag>
                  <Tag>{p.phase}</Tag>
                </div>
                <p className="skg-body skg-body--lead" style={{ maxWidth: '46ch' }}>{p.summary}</p>
                <div><Button variant="accent" onClick={() => onNav('contact')} iconRight={<i className="ph ph-arrow-right" />}>Enquire about {p.name}</Button></div>
              </div>
              <Reveal delay={80}><Figure tone={p.tone} ratio="4 / 3" caption={p.caption} /></Reveal>
            </div>
          </Container>
        </section>

        {/* Spec band */}
        <section className="skg-on-dark" style={{ background: 'var(--tobacco-800)', color: 'var(--text-on-dark)', position: 'relative', overflow: 'hidden' }}>
          <div className="skg-lattice--dark" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
          <Container size="xl" style={{ position: 'relative', padding: 'clamp(2.5rem, 4vw, 3.5rem) var(--gutter)' }}>
            <div className="spec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {p.specs.map((s) => (
                <div key={s.k} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brass-300)' }}>{s.k}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color: 'var(--bone-100)' }}>{s.v}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Narrative + gallery */}
        <section style={{ padding: 'var(--section-pad-y) 0' }}>
          <Container size="lg">
            <div className="narrative-grid" style={{ display: 'grid', gridTemplateColumns: '0.5fr 1fr', gap: 'clamp(1.5rem, 4vw, 4rem)', alignItems: 'start' }}>
              <Eyebrow dash>The brief</Eyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                <p className="skg-display-italic" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>{p.narrative}</p>
                <p className="skg-body" style={{ maxWidth: '58ch' }}>
                  Every material here is chosen for its ability to age — not just to perform. We resist anything that must be replaced within a decade. As with all SKG work, the brief is written for the building's tenth year, not its opening week.
                </p>
              </div>
            </div>
            <div className="detail-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
              <Reveal><Figure tone="light" ratio="1 / 1" caption="Materiality · limestone & timber" /></Reveal>
              <Reveal delay={90}><Figure tone="dark" ratio="1 / 1" caption="Interior atmosphere · warm grade" /></Reveal>
            </div>
          </Container>
        </section>

        {/* Next project */}
        <section style={{ padding: 'var(--section-pad-y-tight) 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bone-300)' }}>
          <Container size="xl">
            <button onClick={() => onProject(next.id)} style={{ appearance: 'none', background: 'none', border: 0, cursor: 'pointer', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <Eyebrow dash>Next project</Eyebrow>
                <span className="skg-display" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)', color: 'var(--text-primary)' }}>{next.name}</span>
              </span>
              <span style={{ color: 'var(--accent)', fontSize: '2rem', display: 'inline-flex' }}><i className="ph ph-arrow-right" /></span>
            </button>
          </Container>
        </section>
      </main>
    );
  }

  window.ProjectDetail = ProjectDetail;
})();
