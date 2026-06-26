// ============================================================
// SKG Website — Site Footer
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const { Logo, Divider } = SKG;
  const D = window.SKGData;

  function FootCol({ title, children }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brass-300)' }}>{title}</span>
        {children}
      </div>
    );
  }
  function FootLink({ children, onClick }) {
    return (
      <button onClick={onClick} style={{ appearance: 'none', background: 'none', border: 0, textAlign: 'left', padding: 0, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-on-dark-muted)', transition: 'color var(--duration-fast) var(--ease-standard)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--bone-100)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}>
        {children}
      </button>
    );
  }

  function SiteFooter({ onNav }) {
    return (
      <footer className="skg-on-dark" style={{ background: 'var(--tobacco-900)', color: 'var(--text-on-dark)', position: 'relative', overflow: 'hidden' }}>
        <div className="skg-lattice--dark" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-xl)', margin: '0 auto', padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter) 2.5rem' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem', maxWidth: '30ch' }}>
              <Logo variant="wordmark" size={30} tagline tone="bone" />
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1.4, color: 'var(--text-on-dark-muted)' }}>
                We build places that outlast the conversation about them.
              </p>
            </div>

            <FootCol title="Navigate">
              {D.nav.map((n) => <FootLink key={n.id} onClick={() => onNav(n.id)}>{n.label}</FootLink>)}
            </FootCol>

            <FootCol title="Divisions">
              {D.divisions.map((d) => <FootLink key={d.id} onClick={() => onNav('about')}>{d.name}</FootLink>)}
            </FootCol>

            <FootCol title="Office">
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-on-dark-muted)' }}>
                {D.brand.address.map((l, i) => <div key={i}>{l}</div>)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.04em', color: 'var(--brass-300)' }}>
                <span>{D.brand.phone}</span>
                <span>{D.brand.email}</span>
              </div>
            </FootCol>
          </div>

          <div style={{ margin: '3rem 0 1.6rem' }}><Divider variant="sparkle" /></div>

          <div className="footer-legal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)' }}>
            <span>© 2026 {D.brand.name}</span>
            <span>Real Estate Development · Construction · Hospitality</span>
            <span>{D.brand.tagline}</span>
          </div>
        </div>
      </footer>
    );
  }

  window.SiteFooter = SiteFooter;
})();
