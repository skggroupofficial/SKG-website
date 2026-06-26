import React from 'react';

const TONE = {
  auto: 'currentColor',
  tobacco: 'var(--tobacco-800)',
  bone: 'var(--bone-200)',
  brass: 'var(--brass-500)',
};

const IMG = {
  lockup: 'assets/logo/skg-logo-gold.png',
  monogram: 'assets/logo/skg-monogram-gold.png',
};

/**
 * SKG logo. `wordmark` renders type (fully self-contained, scales infinitely);
 * `lockup` / `monogram` render the gold artwork via <img> (pass `src` with the
 * correct relative path for your page).
 */
export function Logo({
  variant = 'wordmark',
  size = 40,
  tagline = false,
  tone = 'auto',
  src,
  alt = 'SKG — Shri Kuber Group',
  className = '',
  ...rest
}) {
  if (variant === 'lockup' || variant === 'monogram') {
    return (
      <img
        src={src || IMG[variant]}
        alt={alt}
        className={`skg-logo skg-logo--${variant} ${className}`}
        style={{ height: size, width: 'auto' }}
        {...rest}
      />
    );
  }

  // Wordmark (type)
  const color = TONE[tone] || 'currentColor';
  return (
    <span
      className={`skg-logo skg-logo--wordmark ${className}`}
      role="img"
      aria-label={alt}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.32em', color, lineHeight: 1 }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: size,
          letterSpacing: '-0.01em',
          lineHeight: 0.9,
        }}
      >
        SKG
      </span>
      {tagline && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: Math.max(8, size * 0.13),
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: tone === 'auto' ? 'var(--brass-500)' : color,
            opacity: 0.92,
          }}
        >
          The Power of Trust
        </span>
      )}
    </span>
  );
}
