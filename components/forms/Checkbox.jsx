import React from 'react';

/**
 * Custom checkbox or radio (set `type="radio"`). Brass fill when checked.
 */
export function Checkbox({
  label,
  type = 'checkbox',
  id,
  className = '',
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || auto;
  const isRadio = type === 'radio';
  return (
    <label className={`skg-check ${isRadio ? 'skg-check--radio' : ''} ${className}`.trim()} htmlFor={inputId}>
      <input id={inputId} type={type} className="skg-check__input" {...rest} />
      <span className="skg-check__box" aria-hidden="true">{isRadio ? '' : '✓'}</span>
      {label && <span className="skg-check__label">{label}</span>}
    </label>
  );
}
