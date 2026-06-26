import * as React from 'react';

export interface SparkleProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** CSS size (font-size). */
  size?: string | number;
  /** CSS colour. */
  color?: string;
  className?: string;
}

/**
 * The SKG four-point star brand atom (✦).
 */
export function Sparkle(props: SparkleProps): JSX.Element;
