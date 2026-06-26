import React from 'react';

/**
 * A headline figure (Playfair) over a mono label. Optional unit + accent rule.
 */
export function Stat({ value, unit, label, rule = true, className = '', ...rest }) {
  return (
    <div className={`skg-stat ${className}`.trim()} {...rest}>
      {rule && <span className="skg-stat__rule" aria-hidden="true" />}
      <span className="skg-stat__value">
        {value}{unit && <span className="skg-stat__unit">{unit}</span>}
      </span>
      {label && <span className="skg-stat__label">{label}</span>}
    </div>
  );
}
