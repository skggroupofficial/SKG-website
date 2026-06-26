import * as React from 'react';
import { cn } from '../../lib/cn';

const VARIANT = {
  default: '',
  flat: 'skg-card--flat',
  raised: 'skg-card--raised',
  dark: 'skg-card--dark',
} as const;
const PAD = { sm: 'skg-card--pad-sm', md: '', lg: 'skg-card--pad-lg' } as const;

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'flat' | 'raised' | 'dark';
  pad?: 'sm' | 'md' | 'lg';
  /** Adds hover lift + brass border (implied when `href` is set). */
  interactive?: boolean;
  /** Render as an anchor. */
  href?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Square content panel. Renders <a> when `href` is set (and becomes
 * interactive — brass border + lift on hover).
 */
export function Card({
  variant = 'default',
  pad = 'md',
  interactive = false,
  href,
  className = '',
  children,
  ...rest
}: CardProps) {
  const cls = cn(
    'skg-card',
    VARIANT[variant],
    PAD[pad],
    interactive && 'skg-card--interactive',
    className,
  );
  if (href) {
    return (
      <a href={href} className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <div className={cls} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
}
