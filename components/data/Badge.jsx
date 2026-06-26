import React from 'react';

/**
 * Compact count / status badge. Use `dot` for a bare status indicator.
 */
export function Badge({ variant = 'default', dot = false, className = '', children, ...rest }) {
  const cls = [
    'skg-badge',
    variant === 'accent' ? 'skg-badge--accent' : '',
    dot ? 'skg-badge--dot' : '',
    className,
  ].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{!dot && children}</span>;
}
