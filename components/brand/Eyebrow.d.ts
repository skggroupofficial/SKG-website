import * as React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Element to render as. */
  as?: keyof JSX.IntrinsicElements;
  /** Prepend a "—" marker (brand board "— DEVELOP"). */
  dash?: boolean;
  tone?: 'accent' | 'muted' | 'on-dark';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * DM Mono uppercase label used as a section eyebrow or wayfinding tag.
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
