import * as React from 'react';

/**
 * Editorial pull quote in Playfair italic.
 */
export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  /** The quote text. */
  children: React.ReactNode;
  /** Attribution name. */
  cite?: React.ReactNode;
  /** Role / company. */
  role?: React.ReactNode;
  className?: string;
}

/**
 * Editorial pull quote in Playfair italic.
 */
export function Quote(props: QuoteProps): JSX.Element;
