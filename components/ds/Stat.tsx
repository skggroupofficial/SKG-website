import * as React from 'react';
import { cn } from '../../lib/cn';

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
 * A headline figure (Playfair) over a mono label. Optional unit + accent rule.
 */
export function Stat({
  value,
  unit,
  label,
  rule = true,
  className = '',
  ...rest
}: StatProps) {
  return (
    <div className={cn('skg-stat', className)} {...rest}>
      {rule && <span className="skg-stat__rule" aria-hidden="true" />}
      <span className="skg-stat__value">
        {value}
        {unit && <span className="skg-stat__unit">{unit}</span>}
      </span>
      {label && <span className="skg-stat__label">{label}</span>}
    </div>
  );
}
