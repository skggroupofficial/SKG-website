import * as React from 'react';

/**
 * The SKG identity mark — wordmark, lockup or monogram.
 */
export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  /** `wordmark` = type (self-contained); `lockup`/`monogram` = gold artwork via <img>. */
  variant?: 'wordmark' | 'lockup' | 'monogram';
  /** Wordmark font-size, or image height, in px. */
  size?: number;
  /** Show "The Power of Trust" tagline under the wordmark. */
  tagline?: boolean;
  /** Wordmark colour. `auto` inherits currentColor. */
  tone?: 'auto' | 'tobacco' | 'bone' | 'brass';
  /** Override the image source (lockup/monogram) — pass the correct relative path for your page. */
  src?: string;
  alt?: string;
  className?: string;
}

/**
 * The SKG identity mark.
 */
export function Logo(props: LogoProps): JSX.Element;
