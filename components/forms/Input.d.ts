import * as React from 'react';

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
export function Input(props: InputProps): JSX.Element;
