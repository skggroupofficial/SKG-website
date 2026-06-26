import React from 'react';

const VARIANT = {
  default: '',
  flat: 'skg-card--flat',
  raised: 'skg-card--raised',
  dark: 'skg-card--dark',
};
const PAD = { sm: 'skg-card--pad-sm', md: '', lg: 'skg-card--pad-lg' };

/**
 * Square content panel. Renders <a> when `href` is set (and becomes
 * interactive — brass border + lift on hover).
 */
export function Card({
  variant = 'default',
  pad = 'md',
  interactive = false,
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'skg-card', VARIANT[variant] || '', PAD[pad] || '',
    interactive ? 'skg-card--interactive' : '', className,
  ].filter(Boolean).join(' ');
  if (href) {
    return <a href={href} className={cls} {...rest}>{children}</a>;
  }
  return <div className={cls} {...rest}>{children}</div>;
}
