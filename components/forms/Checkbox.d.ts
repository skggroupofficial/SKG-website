import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** `checkbox` (default) or `radio`. */
  type?: 'checkbox' | 'radio';
  className?: string;
}

/**
 * Custom checkbox / radio control with a brass checked state.
 */
export function Checkbox(props: CheckboxProps): JSX.Element;
