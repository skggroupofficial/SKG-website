import * as React from 'react';

/**
 * The SKG button — mono uppercase label; use `inverse` on Tobacco grounds.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. `accent` (brass) is reserved for the single key action. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'inverse' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Full-width. */
  block?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Render as an anchor. */
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * The SKG button.
 */
export function Button(props: ButtonProps): JSX.Element;
