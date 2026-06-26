import React from 'react';

/**
 * Mono uppercase eyebrow / wayfinding label. Optional leading dash marker.
 */
export function Eyebrow({
  children,
  as: Tag = 'span',
  dash = false,
  tone = 'accent',
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = [
    'skg-eyebrow',
    dash ? 'skg-eyebrow--dash' : '',
    tone === 'muted' ? 'skg-label--muted' : '',
    tone === 'on-dark' ? 'skg-label--on-dark' : '',
    size === 'sm' ? 'skg-label--sm' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>{children}</Tag>
  );
}
