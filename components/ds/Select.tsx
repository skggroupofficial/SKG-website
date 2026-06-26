'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  invalid?: boolean;
  /** Options as objects or plain strings. Alternatively pass <option> children. */
  options?: Array<SelectOption | string>;
  /** Disabled first option shown when nothing is selected. */
  placeholder?: string;
  className?: string;
}

/**
 * Labelled native select with a custom chevron. Provide `options`
 * (array of {value,label} or strings) or pass <option> children.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    label,
    hint,
    error,
    required = false,
    invalid = false,
    id,
    options,
    placeholder,
    className = '',
    children,
    ...rest
  },
  ref,
) {
  const auto = React.useId();
  const inputId = id || auto;
  const isInvalid = invalid || !!error;
  return (
    <div className="skg-field">
      {label && (
        <label className="skg-field__label" htmlFor={inputId}>
          {label}
          {required && <span className="skg-req">*</span>}
        </label>
      )}
      <span className="skg-select-wrap">
        <select
          id={inputId}
          ref={ref}
          className={cn('skg-select', isInvalid && 'skg-select--invalid', className)}
          aria-invalid={isInvalid || undefined}
          defaultValue={placeholder && !rest.value && !rest.defaultValue ? '' : undefined}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options
            ? options.map((o) => {
                const opt = typeof o === 'string' ? { value: o, label: o } : o;
                return (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                );
              })
            : children}
        </select>
        <span className="skg-select-wrap__chevron" aria-hidden="true">
          ▾
        </span>
      </span>
      {error ? (
        <span className="skg-field__error">{error}</span>
      ) : hint ? (
        <span className="skg-field__hint">{hint}</span>
      ) : null}
    </div>
  );
});
