import React from 'react';

/**
 * Pull quote — Playfair italic with a short brass rule and mono attribution.
 */
export function Quote({ children, cite, role, className = '', ...rest }) {
  return (
    <figure className={`skg-quote ${className}`.trim()} style={{ margin: 0 }} {...rest}>
      <span className="skg-quote__rule" aria-hidden="true" />
      <blockquote className="skg-quote__text" style={{ margin: 0 }}>{children}</blockquote>
      {(cite || role) && (
        <figcaption className="skg-quote__cite">
          {cite && <strong>{cite}</strong>}{cite && role ? ' · ' : ''}{role}
        </figcaption>
      )}
    </figure>
  );
}
