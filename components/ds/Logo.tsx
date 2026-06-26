import * as React from 'react';
import { cn } from '../../lib/cn';

const TONE = {
  auto: 'currentColor',
  tobacco: 'var(--tobacco-800)',
  bone: 'var(--bone-200)',
  brass: 'var(--brass-500)',
} as const;

const IMG: Record<'lockup' | 'monogram', string> = {
  lockup: '/logo/skg-logo-gold.png',
  monogram: '/logo/skg-monogram-gold.png',
};

export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  /** `wordmark` = type (self-contained); `lockup`/`monogram` = gold artwork via <img>. */
  variant?: 'wordmark' | 'lockup' | 'monogram';
  /** Wordmark font-size, or image height, in px. */
  size?: number;
  /** Show "The Power of Trust" tagline under the wordmark. */
  tagline?: boolean;
  /** Wordmark colour. `auto` inherits currentColor. */
  tone?: 'auto' | 'tobacco' | 'bone' | 'brass';
  /** Override the image source (lockup/monogram). */
  src?: string;
  alt?: string;
  className?: string;
}

/**
 * SKG logo. `wordmark` renders type (fully self-contained, scales infinitely);
 * `lockup` / `monogram` render the gold artwork via <img>.
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
}: LogoProps) {
  if (variant === 'lockup' || variant === 'monogram') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src || IMG[variant]}
        alt={alt}
        className={cn('skg-logo', `skg-logo--${variant}`, className)}
        style={{ height: size, width: 'auto' }}
        {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)}
      />
    );
  }

  // Wordmark (type)
  const color = TONE[tone] || 'currentColor';
  return (
    <span
      className={cn('skg-logo', 'skg-logo--wordmark', className)}
      role="img"
      aria-label={alt}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.32em',
        color,
        lineHeight: 1,
      }}
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
