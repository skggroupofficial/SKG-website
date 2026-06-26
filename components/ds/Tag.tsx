import * as React from 'react';
import { cn } from '../../lib/cn';

const VARIANT = {
  brass: '',
  jade: 'skg-tag--jade',
  neutral: 'skg-tag--neutral',
  outline: 'skg-tag--outline',
  solid: 'skg-tag--solid',
} as const;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brass' | 'jade' | 'neutral' | 'outline' | 'solid';
  /** Optional leading icon element. */
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Small mono uppercase tag for status, category or phase.
 */
export function Tag({
  variant = 'brass',
  icon,
  className = '',
  children,
  ...rest
}: TagProps) {
  return (
    <span className={cn('skg-tag', VARIANT[variant], className)} {...rest}>
      {icon && (
        <span className="skg-tag__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}
