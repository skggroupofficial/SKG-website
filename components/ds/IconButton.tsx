'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

const VARIANT = {
  ghost: '',
  outline: 'skg-icon-btn--outline',
  solid: 'skg-icon-btn--solid',
} as const;
const SIZE = { sm: 'skg-icon-btn--sm', md: '', lg: 'skg-icon-btn--lg' } as const;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (required — icon-only control). */
  label: string;
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Square icon-only button. `label` becomes the aria-label (required for a11y).
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  href,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}: IconButtonProps) {
  const cls = cn('skg-icon-btn', VARIANT[variant], SIZE[size], className);
  if (href && !disabled) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={label}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} aria-label={label} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
