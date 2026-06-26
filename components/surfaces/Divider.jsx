import React from 'react';
import { Sparkle } from '../brand/Sparkle.jsx';

/**
 * Horizontal rule. `sparkle` centres the SKG four-point star between two
 * gold hairlines (section breaks, footers).
 */
export function Divider({ variant = 'subtle', className = '', ...rest }) {
  if (variant === 'sparkle') {
    return (
      <div className={`skg-divider skg-divider--sparkle ${className}`.trim()} role="separator" {...rest}>
        <Sparkle />
      </div>
    );
  }
  return (
    <hr className={`skg-divider ${variant === 'gold' ? 'skg-divider--gold' : ''} ${className}`.trim()} {...rest} />
  );
}
