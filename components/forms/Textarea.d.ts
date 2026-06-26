import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  invalid?: boolean;
  className?: string;
}

/**
 * Multi-line text field with label, hint and error states.
 */
export function Textarea(props: TextareaProps): JSX.Element;
