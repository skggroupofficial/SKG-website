'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label (DM Mono uppercase). Omit for a bare input. */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — also flips the field to the invalid style. */
  error?: React.ReactNode;
  required?: boolean;
  invalid?: boolean;
  className?: string;
}

/**
 * Single-line text field with label, hint and error states.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, required = false, invalid = false, id, className = '', ...rest },
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
      <input
        id={inputId}
        ref={ref}
        className={cn('skg-input', isInvalid && 'skg-input--invalid', className)}
        aria-invalid={isInvalid || undefined}
        {...rest}
      />
      {error ? (
        <span className="skg-field__error">{error}</span>
      ) : hint ? (
        <span className="skg-field__hint">{hint}</span>
      ) : null}
    </div>
  );
});
