// ============================================================
// SKG Website — Home
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const { Button, Eyebrow, Stat, Tag, Divider, Quote } = SKG;
  const { Container, SectionHeading, Figure, Reveal } = window;
  const D = window.SKGData;

  // ---- Hero ----
  function Hero({ onNav, onProject }) {
    return (
      <section className="skg-on-dark" style={{ position: 'relative', background: 'var(--tobacco-800)', color: 'var(--text-on-dark)', overflow: 'hidden' }}>
        <div className="skg-lattice--dark" style={{ position: 'absolute', inset: 0 }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50%', height: '140%', background: 'radial-gradient(closest-side, rgba(160,120,48,0.16), transparent 70%)' }} />
        <Container size="xl" style={{ position: 'relative', paddingTop: 'clamp(3.5rem, 7vw, 6.5rem)', paddingBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
              <Eyebrow dash tone="on-dark">Develop · Build · Host</Eyebrow>
              <h1 className="skg-display" style={{ fontSize: 'clamp(2.8rem, 6.4vw, 5.4rem)', lineHeight: 0.98, color: 'var(--bone-100)' }}>
                Built to last beyond the current&nbsp;cycle.
              </h1>
              <p className="skg-body skg-body--lead" style={{ maxWidth: '46ch', color: 'var(--text-on-dark-muted)' }}>
                Shri Kuber Group is a vertically integrated real estate firm — we acquire the ground, build the structure, and operate the hospitality within it. One team, accountable from the first survey to the fifteen-year guest.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
                <Button variant="accent" onClick={() => onNav('projects')} iconRight={<i className="ph ph-arrow-right" />}>View projects</Button>
                <Button variant="inverse" onClick={() => onNav('about')}>Our approach</Button>
              </div>
            </div>

            <Reveal delay={120}>
              <div style={{ position: 'relative' }}>
                <Figure tone="dark" ratio="4 / 5" caption="Architectural detail · dawn · stone & brass" />
                <button onClick={() => onProject('the-kuber')} style={{ position: 'absolute', left: '1rem', top: '1rem', appearance: 'none', border: 0, background: 'rgba(28,18,10,0.55)', backdropFilter: 'blur(4px)', padding: '0.5rem 0.5rem 0.5rem 0.7rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.7rem' }}>
                  <Tag variant="jade">Now open</Tag>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bone-200)' }}>The Kuber →</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Stats strip */}
          <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={{ height: '1px', background: 'var(--border-on-dark)', marginBottom: '2rem' }} />
            <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {D.stats.map((s) => (
                <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--bone-100)' }}>
                    {s.value}<span style={{ fontSize: '0.46em', color: 'var(--brass-300)', marginLeft: '0.12em' }}>{s.unit}</span>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // ---- Manifesto ----
  function Manifesto() {
    return (
      <section style={{ padding: 'var(--section-pad-y) 0' }}>
        <Container size="lg">
          <div className="manifesto-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'start' }}>
            <Reveal><Eyebrow dash>Vertically Integrated · Long-Horizon · Place-Led</Eyebrow></Reveal>
            <Reveal delay={80}>
              <p className="skg-display-italic" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.3rem)', color: 'var(--text-primary)', marginBottom: '1.8rem' }}>
                We are not merely builders — we are shapers of place.
              </p>
              <p className="skg-body" style={{ maxWidth: '60ch', fontSize: 'var(--text-md)' }}>
                From land acquisition through construction to the operation of hospitality experiences within our developments, SKG exercises considered judgment at every phase. Our projects are designed to endure, to age with grace, and to generate long-term value for all who inhabit them.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    );
  }

  // ---- Divisions ----
  function Divisions() {
    return (
      <section className="skg-lattice" style={{ background: 'var(--bone-300)', padding: 'var(--section-pad-y) 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <Container size="xl">
          <SectionHeading eyebrow="What we do" title="Three disciplines, one accountable firm." intro="Most developers hand the building to someone else and the operation to a third party. We keep all three under one roof — because the alternative produces places where no one is fully responsible." introMax="56ch" />
          <div className="divisions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            {D.divisions.map((d, i) => (
              <Reveal key={d.id} delay={i * 90}>
                <div style={{ background: 'var(--bone-100)', border: '1px solid var(--border-subtle)', padding: 'clamp(1.6rem, 2.4vw, 2.2rem)', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <i className={`ph ${d.icon}`} style={{ fontSize: '2rem', color: 'var(--accent)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', color: 'var(--text-faint)' }}>{d.no}</span>
                  </div>
                  <h3 className="skg-display" style={{ fontSize: '1.9rem' }}>{d.name}</h3>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.05rem', color: 'var(--text-accent)', margin: 0 }}>{d.lead}</p>
                  <p className="skg-body" style={{ fontSize: '0.95rem', margin: 0 }}>{d.body}</p>
                  <ul style={{ listStyle: 'none', margin: '0.4rem 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {d.points.map((p) => (
                      <li key={p} style={{ display: 'flex', gap: '0.6rem', alignItems: 'baseline', fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent)', fontSize: '0.7em' }}>✦</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // ---- Featured project ----
  function Featured({ onProject }) {
    const p = D.projects[0];
    return (
      <section style={{ padding: 'var(--section-pad-y) 0' }}>
        <Container size="xl">
          <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
            <Reveal>
              <Figure tone="dark" ratio="16 / 11" caption={p.caption} />
            </Reveal>
            <Reveal delay={90}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                <Eyebrow dash>Featured · {p.phase}</Eyebrow>
                <h2 className="skg-display" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>{p.name}</h2>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <Tag variant="outline">{p.type}</Tag>
                  <Tag variant="neutral" icon={<i className="ph ph-map-pin" />}>{p.location}</Tag>
                  <Tag>{p.status}</Tag>
                </div>
                <p className="skg-body" style={{ fontSize: 'var(--text-md)' }}>{p.narrative}</p>
                <div>
                  <Button variant="secondary" onClick={() => onProject(p.id)} iconRight={<i className="ph ph-arrow-right" />}>View project</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    );
  }

  // ---- Quote band ----
  function QuoteBand() {
    return (
      <section className="skg-on-dark" style={{ background: 'var(--tobacco-800)', color: 'var(--text-on-dark)', padding: 'clamp(4rem, 8vw, 7rem) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="skg-lattice--dark" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <Container size="md" style={{ position: 'relative', textAlign: 'center' }}>
          <Reveal>
            <span style={{ color: 'var(--brass-300)', fontSize: '1.4rem' }}>✦</span>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1.6rem, 3.6vw, 2.7rem)', lineHeight: 1.25, color: 'var(--bone-100)', margin: '1.2rem auto 1.6rem', maxWidth: '22ch' }}>
              "We build places that outlast the conversation about them."
            </p>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)' }}>
              Rahul Kuber · Managing Director
            </span>
          </Reveal>
        </Container>
      </section>
    );
  }

  // ---- Selected projects ----
  function SelectedProjects({ onNav, onProject }) {
    const items = D.projects.slice(0, 3);
    return (
      <section style={{ padding: 'var(--section-pad-y) 0' }}>
        <Container size="xl">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', flexWrap: 'wrap', marginBottom: 'clamp(2rem, 3.5vw, 3rem)' }}>
            <SectionHeading eyebrow="Selected work" title="Ground we are continuing." max="18ch" />
            <Button variant="link" onClick={() => onNav('projects')} iconRight={<i className="ph ph-arrow-up-right" />}>All projects</Button>
          </div>
          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {items.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <window.ProjectCard p={p} onProject={onProject} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // ---- CTA ----
  function CtaBand({ onNav }) {
    return (
      <section style={{ padding: 'var(--section-pad-y-tight) 0', background: 'var(--bone-300)', borderTop: '1px solid var(--border-subtle)' }}>
        <Container size="lg">
          <div className="cta-grid" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Eyebrow dash>Land · Capital · Partnership</Eyebrow>
              <h2 className="skg-display" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)' }}>Let's talk about your ground.</h2>
            </div>
            <Button variant="accent" size="lg" onClick={() => onNav('contact')} iconRight={<i className="ph ph-arrow-right" />}>Start a conversation</Button>
          </div>
        </Container>
      </section>
    );
  }

  function Home({ onNav, onProject }) {
    return (
      <main>
        <Hero onNav={onNav} onProject={onProject} />
        <Manifesto />
        <Divisions />
        <Featured onProject={onProject} />
        <QuoteBand />
        <SelectedProjects onNav={onNav} onProject={onProject} />
        <CtaBand onNav={onNav} />
      </main>
    );
  }

  window.Home = Home;
})();
