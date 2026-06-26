import * as React from 'react';

/**
 * Key metric / proof-point figure.
 */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure, e.g. "1.4" or "120". */
  value: React.ReactNode;
  /** Small accent unit/suffix, e.g. "M ft²", "+", "yr". */
  unit?: React.ReactNode;
  /** Mono caption under the figure. */
  label?: React.ReactNode;
  /** Show the short brass rule above the value. */
  rule?: boolean;
  className?: string;
}

/**
 * Key metric / proof-point figure.
 */
export function Stat(props: StatProps): JSX.Element;
