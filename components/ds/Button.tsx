'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

const VARIANT = {
  primary: '',
  accent: 'skg-btn--accent',
  secondary: 'skg-btn--secondary',
  ghost: 'skg-btn--ghost',
  inverse: 'skg-btn--inverse',
  link: 'skg-btn--link',
} as const;
const SIZE = { sm: 'skg-btn--sm', md: '', lg: 'skg-btn--lg' } as const;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. `accent` (brass) is reserved for the single key action. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'inverse' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Full-width. */
  block?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Render as an anchor. */
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Primary action control. DM Mono uppercase label, near-square corners.
 * Renders <button> by default, or <a> when `href` is given.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  href,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = cn(
    'skg-btn',
    VARIANT[variant],
    SIZE[size],
    block && 'skg-btn--block',
    className,
  );

  const content = (
    <>
      {iconLeft && <span className="skg-btn__icon">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="skg-btn__icon">{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
