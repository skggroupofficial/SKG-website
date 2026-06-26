import * as React from 'react';
import { cn } from '../../lib/cn';

export interface SparkleProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** CSS size (font-size). */
  size?: string | number;
  /** CSS colour. */
  color?: string;
  className?: string;
}

/**
 * The SKG four-point star (✦ U+2726). A small brand atom used in rules,
 * lockups and as a list/section marker.
 */
export function Sparkle({
  size = '1em',
  color = 'var(--accent)',
  className = '',
  ...rest
}: SparkleProps) {
  return (
    <span
      className={cn('skg-sparkle', className)}
      aria-hidden="true"
      style={{ fontSize: size, color, lineHeight: 1, display: 'inline-block' }}
      {...rest}
    >
      ✦
    </span>
  );
}
