import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brass' | 'jade' | 'neutral' | 'outline' | 'solid';
  /** Optional leading icon element. */
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Mono uppercase pill — project phase, category or status.
 */
export function Tag(props: TagProps): JSX.Element;
