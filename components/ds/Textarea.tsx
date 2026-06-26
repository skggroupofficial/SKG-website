'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  invalid?: boolean;
  className?: string;
}

/**
 * Labelled multi-line text field with optional hint / error.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, required = false, invalid = false, id, rows = 4, className = '', ...rest },
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
      <textarea
        id={inputId}
        ref={ref}
        rows={rows}
        className={cn('skg-textarea', isInvalid && 'skg-textarea--invalid', className)}
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
