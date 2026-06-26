import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (required — icon-only control). */
  label: string;
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Square icon-only button.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
