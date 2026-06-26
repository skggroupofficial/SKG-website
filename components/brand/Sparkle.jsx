import React from 'react';

/**
 * The SKG four-point star (✦ U+2726). A small brand atom used in rules,
 * lockups and as a list/section marker.
 */
export function Sparkle({ size = '1em', color = 'var(--accent)', className = '', ...rest }) {
  return (
    <span
      className={`skg-sparkle ${className}`}
      aria-hidden="true"
      style={{ fontSize: size, color, lineHeight: 1, display: 'inline-block' }}
      {...rest}
    >
      ✦
    </span>
  );
}
