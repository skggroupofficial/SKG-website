import React from 'react';

/**
 * Labelled native select with a custom chevron. Provide `options`
 * (array of {value,label} or strings) or pass <option> children.
 */
export function Select({
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
      <span className="skg-select-wrap">
        <select
          id={inputId}
          className={`skg-select ${isInvalid ? 'skg-select--invalid' : ''} ${className}`.trim()}
          aria-invalid={isInvalid || undefined}
          defaultValue={placeholder && !rest.value && !rest.defaultValue ? '' : undefined}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options
            ? options.map((o) => {
                const opt = typeof o === 'string' ? { value: o, label: o } : o;
                return <option key={opt.value} value={opt.value}>{opt.label}</option>;
              })
            : children}
        </select>
        <span className="skg-select-wrap__chevron" aria-hidden="true">▾</span>
      </span>
      {error ? (
        <span className="skg-field__error">{error}</span>
      ) : hint ? (
        <span className="skg-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}
