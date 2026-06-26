import * as React from 'react';
import { cn } from '../../lib/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent';
  /** Render as a bare status dot (no content). */
  dot?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Compact count / status badge. Use `dot` for a bare status indicator.
 */
export function Badge({
  variant = 'default',
  dot = false,
  className = '',
  children,
  ...rest
}: BadgeProps) {
  const cls = cn(
    'skg-badge',
    variant === 'accent' && 'skg-badge--accent',
    dot && 'skg-badge--dot',
    className,
  );
  return (
    <span className={cls} {...rest}>
      {!dot && children}
    </span>
  );
}
