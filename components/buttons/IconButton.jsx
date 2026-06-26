import React from 'react';

const VARIANT = { ghost: '', outline: 'skg-icon-btn--outline', solid: 'skg-icon-btn--solid' };
const SIZE = { sm: 'skg-icon-btn--sm', md: '', lg: 'skg-icon-btn--lg' };

/**
 * Square icon-only button. `label` becomes the aria-label (required for a11y).
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  href,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['skg-icon-btn', VARIANT[variant] || '', SIZE[size] || '', className].filter(Boolean).join(' ');
  if (href && !disabled) {
    return <a href={href} className={cls} aria-label={label} {...rest}>{children}</a>;
  }
  return (
    <button type={type} className={cls} aria-label={label} disabled={disabled} {...rest}>{children}</button>
  );
}
