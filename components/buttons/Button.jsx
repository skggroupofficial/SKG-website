import React from 'react';

const VARIANT = {
  primary: '',
  accent: 'skg-btn--accent',
  secondary: 'skg-btn--secondary',
  ghost: 'skg-btn--ghost',
  inverse: 'skg-btn--inverse',
  link: 'skg-btn--link',
};
const SIZE = { sm: 'skg-btn--sm', md: '', lg: 'skg-btn--lg' };

/**
 * Primary action control. DM Mono uppercase label, near-square corners.
 * Renders <button> by default, or <a> when `href` is given.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  href,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'skg-btn', VARIANT[variant] || '', SIZE[size] || '',
    block ? 'skg-btn--block' : '', className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {iconLeft && <span className="skg-btn__icon">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="skg-btn__icon">{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return <a href={href} className={cls} {...rest}>{content}</a>;
  }
  return (
    <button type={type} className={cls} disabled={disabled} {...rest}>{content}</button>
  );
}
