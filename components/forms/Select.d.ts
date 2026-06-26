import * as React from 'react';

export interface SelectOption { value: string; label: string; }

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
 * Native select styled to the SKG system, with a custom chevron.
 */
export function Select(props: SelectProps): JSX.Element;
