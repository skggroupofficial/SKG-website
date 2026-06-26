import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** `subtle` hairline · `gold` brass rule · `sparkle` rule with centred ✦. */
  variant?: 'subtle' | 'gold' | 'sparkle';
  className?: string;
}

/**
 * Horizontal divider, including the brand sparkle rule.
 */
export function Divider(props: DividerProps): JSX.Element;
