import React from 'react';

/**
 * Labelled multi-line text field with optional hint / error.
 */
export function Textarea({
  label,
  hint,
  error,
  required = false,
  invalid = false,
  id,
  rows = 4,
  className = '',
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || auto;
  const isInvalid = invalid || !!error;
  return (
    <div className="skg-field">
      {label && (
        <label className="skg-field__label" htmlFor={inputId}>
          {label}{required && <span className="skg-req">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        className={`skg-textarea ${isInvalid ? 'skg-textarea--invalid' : ''} ${className}`.trim()}
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
}
