import * as React from 'react';

/**
 * Square content panel / surface.
 */
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
 * Square content panel / surface.
 */
export function Card(props: CardProps): JSX.Element;
