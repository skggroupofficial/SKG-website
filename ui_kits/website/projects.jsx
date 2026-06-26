// ============================================================
// SKG Website — Projects (listing) + shared ProjectCard
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const { Tag, Eyebrow, Button } = SKG;
  const { Container, SectionHeading, Figure, Reveal } = window;
  const D = window.SKGData;

  function ProjectCard({ p, onProject }) {
    return (
      <button onClick={() => onProject(p.id)}
        className="project-card"
        style={{ appearance: 'none', textAlign: 'left', cursor: 'pointer', padding: 0, background: 'var(--bone-100)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}>
        <Figure tone={p.tone} ratio="4 / 3" caption={null} watermark style={{ borderRadius: 0 }} />
        <div style={{ padding: '1.3rem 1.4rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.type}</span>
            <Tag variant={p.status === 'Now open' || p.status === 'Now leasing' ? 'jade' : 'outline'}>{p.phase}</Tag>
          </div>
          <h3 className="skg-display" style={{ fontSize: '1.5rem' }}>{p.name}</h3>
          <p className="skg-body" style={{ fontSize: '0.9rem', margin: 0, flex: 1 }}>{p.summary}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.3rem', paddingTop: '0.9rem', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              <i className="ph ph-map-pin" style={{ color: 'var(--accent)' }} />{p.location}
            </span>
            <span style={{ color: 'var(--accent)', display: 'inline-flex' }}><i className="ph ph-arrow-right" /></span>
          </div>
        </div>
      </button>
    );
  }
  window.ProjectCard = ProjectCard;

  const FILTERS = ['All', 'Develop', 'Build', 'Host'];

  function Projects({ onProject }) {
    const [filter, setFilter] = React.useState('All');
    const items = filter === 'All' ? D.projects : D.projects.filter((p) => p.division === filter);
    return (
      <main>
        {/* Page head */}
        <section style={{ background: 'var(--tobacco-800)', color: 'var(--text-on-dark)', position: 'relative', overflow: 'hidden' }} className="skg-on-dark">
          <div className="skg-lattice--dark" style={{ position: 'absolute', inset: 0 }} />
          <Container size="xl" style={{ position: 'relative', padding: 'clamp(3rem, 6vw, 5rem) var(--gutter)' }}>
            <SectionHeading tone="dark" eyebrow="Selected work" title="Projects" intro="Six sites across Gujarat and Rajasthan — developed, built and, where we host, operated by SKG." introMax="50ch" />
          </Container>
        </section>

        {/* Filters + grid */}
        <section style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 var(--section-pad-y)' }}>
          <Container size="xl">
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: 'clamp(2rem, 3.5vw, 3rem)' }}>
              {FILTERS.map((f) => {
                const active = filter === f;
                return (
                  <button key={f} onClick={() => setFilter(f)}
                    style={{ appearance: 'none', cursor: 'pointer', padding: '0.55rem 1.1rem', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: 'var(--radius-pill)', border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border-default)'), background: active ? 'var(--accent)' : 'transparent', color: active ? 'var(--tobacco-900)' : 'var(--text-secondary)', transition: 'var(--transition-color)' }}>
                    {f}
                  </button>
                );
              })}
              <span style={{ marginLeft: 'auto', alignSelf: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{items.length} {items.length === 1 ? 'project' : 'projects'}</span>
            </div>
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {items.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}><ProjectCard p={p} onProject={onProject} /></Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
    );
  }

  window.Projects = Projects;
})();
