// ============================================================
// SKG Website — Site Header
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const { Logo, Button, IconButton } = SKG;
  const D = window.SKGData;

  function NavLink({ item, active, onNav }) {
    return (
      <button
        onClick={() => onNav(item.id)}
        style={{
          appearance: 'none', background: 'none', border: 0, cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: '0.16em',
          textTransform: 'uppercase', padding: '0.4rem 0', position: 'relative',
          color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
          transition: 'color var(--duration-fast) var(--ease-standard)',
        }}
        onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--accent)'; }}
        onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-secondary)'; }}
      >
        {item.label}
        <span style={{ position: 'absolute', left: 0, bottom: '-2px', height: '1px', width: active ? '100%' : '0%', background: 'var(--accent)', transition: 'width var(--duration-base) var(--ease-out)' }} />
      </button>
    );
  }

  function SiteHeader({ page, onNav }) {
    const [open, setOpen] = React.useState(false);
    const go = (id) => { onNav(id); setOpen(false); };
    return (
      <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        {/* Utility strip */}
        <div style={{ background: 'var(--tobacco-800)', color: 'var(--text-on-dark-muted)' }}>
          <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '0 var(--gutter)', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}><i className="ph ph-map-pin" style={{ color: 'var(--brass-300)' }} /> Ahmedabad · Gujarat</span>
            <span className="util-contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.4rem' }}>
              <span>{D.brand.phone}</span>
              <span style={{ color: 'var(--brass-300)' }}>{D.brand.email}</span>
            </span>
          </div>
        </div>

        {/* Main bar */}
        <div style={{ background: 'rgba(244,239,228,0.92)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '0 var(--gutter)', height: '74px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <button onClick={() => go('home')} aria-label="SKG home" style={{ appearance: 'none', background: 'none', border: 0, cursor: 'pointer', padding: 0, display: 'inline-flex' }}>
              <Logo variant="wordmark" size={26} tone="tobacco" />
            </button>

            <nav className="site-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.4rem' }}>
              {D.nav.map((item) => <NavLink key={item.id} item={item} active={page === item.id} onNav={onNav} />)}
            </nav>

            <div className="header-cta" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Button variant="accent" size="sm" onClick={() => go('contact')} iconRight={<i className="ph ph-arrow-right" />}>Enquire</Button>
            </div>

            <span className="header-menu" style={{ display: 'none' }}>
              <IconButton variant="outline" label="Menu" onClick={() => setOpen((o) => !o)}>
                <i className={open ? 'ph ph-x' : 'ph ph-list'} />
              </IconButton>
            </span>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="mobile-menu" style={{ borderTop: '1px solid var(--border-subtle)', padding: '1rem var(--gutter) 1.6rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {D.nav.map((item) => (
                <button key={item.id} onClick={() => go(item.id)} style={{ appearance: 'none', background: 'none', border: 0, textAlign: 'left', padding: '0.85rem 0', borderBottom: '1px solid var(--border-subtle)', fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: page === item.id ? 'var(--accent)' : 'var(--text-primary)', cursor: 'pointer' }}>
                  {item.label}
                </button>
              ))}
              <div style={{ marginTop: '1rem' }}>
                <Button variant="accent" block onClick={() => go('contact')} iconRight={<i className="ph ph-arrow-right" />}>Enquire</Button>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }

  window.SiteHeader = SiteHeader;
})();
