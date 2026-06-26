import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent';
  /** Render as a bare status dot (no content). */
  dot?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Small count or status badge.
 */
export function Badge(props: BadgeProps): JSX.Element;
