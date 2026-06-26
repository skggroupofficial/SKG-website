import React from 'react';

/**
 * Labelled text input with optional hint / error. Renders the full field
 * (label + control + helper). Pass any native <input> props through.
 */
export function Input({
  label,
  hint,
  error,
  required = false,
  invalid = false,
  id,
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
      <input
        id={inputId}
        className={`skg-input ${isInvalid ? 'skg-input--invalid' : ''} ${className}`.trim()}
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
