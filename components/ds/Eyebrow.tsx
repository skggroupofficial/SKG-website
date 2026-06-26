import * as React from 'react';
import { cn } from '../../lib/cn';

export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Element to render as. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Prepend a "—" marker (brand board "— DEVELOP"). */
  dash?: boolean;
  tone?: 'accent' | 'muted' | 'on-dark';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Mono uppercase eyebrow / wayfinding label. Optional leading dash marker.
 */
export function Eyebrow({
  children,
  as: Tag = 'span',
  dash = false,
  tone = 'accent',
  size = 'md',
  className = '',
  ...rest
}: EyebrowProps) {
  const cls = cn(
    'skg-eyebrow',
    dash && 'skg-eyebrow--dash',
    tone === 'muted' && 'skg-label--muted',
    tone === 'on-dark' && 'skg-label--on-dark',
    size === 'sm' && 'skg-label--sm',
    className,
  );
  return (
    // @ts-expect-error — dynamic intrinsic tag with spread props
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
