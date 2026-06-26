// ============================================================
// SKG Website — App shell + simple router
// ============================================================
(function () {
  const NS = 'SKGShriKuberGroupDesignSystem_2a6fdb';

  function Fallback() {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: 'var(--surface-page)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '40px', letterSpacing: '-0.01em', color: 'var(--tobacco-800)' }}>SKG</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Design system loading…</span>
      </div>
    );
  }

  function App() {
    const [ready, setReady] = React.useState(() => !!window[NS]);
    const [page, setPage] = React.useState(() => localStorage.getItem('skg-site-page') || 'home');
    const [projectId, setProjectId] = React.useState(() => localStorage.getItem('skg-site-project') || 'kuber-riverfront');

    React.useEffect(() => {
      if (ready) return;
      let n = 0;
      const t = setInterval(() => {
        if (window[NS] || n++ > 40) { setReady(!!window[NS]); clearInterval(t); }
      }, 150);
      return () => clearInterval(t);
    }, [ready]);

    React.useEffect(() => { localStorage.setItem('skg-site-page', page); }, [page]);
    React.useEffect(() => { localStorage.setItem('skg-site-project', projectId); }, [projectId]);

    if (!ready) return <Fallback />;

    const nav = (id) => { setPage(id); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); };
    const openProject = (id) => { setProjectId(id); setPage('project'); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); };
    const headerPage = page === 'project' ? 'projects' : page;

    let view;
    if (page === 'projects') view = <window.Projects onProject={openProject} />;
    else if (page === 'project') view = <window.ProjectDetail id={projectId} onNav={nav} onProject={openProject} />;
    else if (page === 'about') view = <window.About onNav={nav} />;
    else if (page === 'contact') view = <window.Contact />;
    else view = <window.Home onNav={nav} onProject={openProject} />;

    return (
      <React.Fragment>
        <window.SiteHeader page={headerPage} onNav={nav} />
        {view}
        <window.SiteFooter onNav={nav} />
      </React.Fragment>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
