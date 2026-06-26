import React from 'react';

const VARIANT = {
  brass: '',
  jade: 'skg-tag--jade',
  neutral: 'skg-tag--neutral',
  outline: 'skg-tag--outline',
  solid: 'skg-tag--solid',
};

/**
 * Small mono uppercase tag for status, category or phase.
 */
export function Tag({ variant = 'brass', icon, className = '', children, ...rest }) {
  return (
    <span className={`skg-tag ${VARIANT[variant] || ''} ${className}`.trim()} {...rest}>
      {icon && <span className="skg-tag__icon" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
