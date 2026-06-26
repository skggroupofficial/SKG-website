// ============================================================
// SKG Website — layout helpers (load after the DS bundle)
// ============================================================
const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
const { Eyebrow } = SKG;

const MONOGRAM = '../../assets/logo/skg-monogram-gold.png';

// Constrained content column
function Container({ size = 'lg', className = '', style, children }) {
  const max = { md: 'var(--container-md)', lg: 'var(--container-lg)', xl: 'var(--container-xl)', prose: 'var(--container-xs)' }[size];
  return (
    <div className={className} style={{ width: '100%', maxWidth: max, marginInline: 'auto', paddingInline: 'var(--gutter)', ...style }}>
      {children}
    </div>
  );
}

// Section eyebrow + display heading + optional intro
function SectionHeading({ eyebrow, title, intro, align = 'left', tone = 'light', max = '20ch', introMax = '52ch' }) {
  const onDark = tone === 'dark';
  return (
    <div style={{ textAlign: align, display: 'flex', flexDirection: 'column', gap: '1.1rem', alignItems: align === 'center' ? 'center' : 'flex-start' }}>
      {eyebrow && <Eyebrow dash tone={onDark ? 'on-dark' : 'accent'}>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="skg-display" style={{ maxWidth: max, fontSize: 'clamp(2rem, 4.4vw, 3.4rem)', color: onDark ? 'var(--bone-200)' : 'var(--text-primary)' }}>{title}</h2>
      )}
      {intro && (
        <p className="skg-body skg-body--lead" style={{ maxWidth: introMax, color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)' }}>{intro}</p>
      )}
    </div>
  );
}

// Art-directed image slot — branded placeholder until photography drops in.
// Pass `src` to show a real image; otherwise renders the SKG treatment + caption.
function Figure({ src, alt = '', caption, tone = 'dark', ratio = '4 / 3', watermark = true, className = '', style }) {
  const onDark = tone === 'dark';
  const bg = onDark
    ? 'linear-gradient(150deg, var(--tobacco-700) 0%, var(--tobacco-900) 100%)'
    : 'linear-gradient(150deg, var(--bone-300) 0%, var(--bone-500) 100%)';
  return (
    <figure className={className} style={{ position: 'relative', margin: 0, overflow: 'hidden', aspectRatio: ratio, background: bg, borderRadius: 'var(--radius-card)', ...style }}>
      {src ? (
        <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'var(--img-grade)' }} />
      ) : (
        <>
          <div className={onDark ? 'skg-lattice--dark' : 'skg-lattice'} style={{ position: 'absolute', inset: 0 }} />
          {watermark && (
            <img src={MONOGRAM} alt="" aria-hidden="true"
              style={{ position: 'absolute', top: '50%', left: '50%', width: '46%', transform: 'translate(-50%, -54%)', opacity: onDark ? 0.14 : 0.16, filter: onDark ? 'none' : 'grayscale(0.2)' }} />
          )}
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: onDark ? 'radial-gradient(120% 90% at 50% 0%, transparent 50%, rgba(20,12,6,0.5) 100%)' : 'none' }} />
        </>
      )}
      {caption && (
        <figcaption style={{ position: 'absolute', left: '1rem', bottom: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: '0.12em', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark-faint)' : 'var(--tobacco-500)' }}>
          <i className="ph ph-aperture" style={{ fontSize: '1.1em' }} /> {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Subtle, calm reveal on first view (no bounce). Falls back to visible.
function Reveal({ children, delay = 0, as = 'div', className = '', style }) {
  const Tag = as;
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={className}
      style={{ opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(18px)', transition: `opacity var(--duration-reveal) var(--ease-out) ${delay}ms, transform var(--duration-reveal) var(--ease-out) ${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

Object.assign(window, { Container, SectionHeading, Figure, Reveal });
