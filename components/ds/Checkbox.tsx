'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** `checkbox` (default) or `radio`. */
  type?: 'checkbox' | 'radio';
  className?: string;
}

/**
 * Custom checkbox or radio (set `type="radio"`). Brass fill when checked.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, type = 'checkbox', id, className = '', ...rest },
  ref,
) {
  const auto = React.useId();
  const inputId = id || auto;
  const isRadio = type === 'radio';
  return (
    <label className={cn('skg-check', isRadio && 'skg-check--radio', className)} htmlFor={inputId}>
      <input id={inputId} ref={ref} type={type} className="skg-check__input" {...rest} />
      <span className="skg-check__box" aria-hidden="true">
        {isRadio ? '' : '✓'}
      </span>
      {label && <span className="skg-check__label">{label}</span>}
    </label>
  );
});
