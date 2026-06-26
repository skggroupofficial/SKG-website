import * as React from 'react';
import { cn } from '../../lib/cn';

export interface QuoteProps extends Omit<React.HTMLAttributes<HTMLElement>, 'role'> {
  /** The quote text. */
  children: React.ReactNode;
  /** Attribution name. */
  cite?: React.ReactNode;
  /** Role / company. */
  role?: React.ReactNode;
  className?: string;
}

/**
 * Pull quote — Playfair italic with a short brass rule and mono attribution.
 */
export function Quote({ children, cite, role, className = '', ...rest }: QuoteProps) {
  return (
    <figure className={cn('skg-quote', className)} style={{ margin: 0 }} {...rest}>
      <span className="skg-quote__rule" aria-hidden="true" />
      <blockquote className="skg-quote__text" style={{ margin: 0 }}>
        {children}
      </blockquote>
      {(cite || role) && (
        <figcaption className="skg-quote__cite">
          {cite && <strong>{cite}</strong>}
          {cite && role ? ' · ' : ''}
          {role}
        </figcaption>
      )}
    </figure>
  );
}
