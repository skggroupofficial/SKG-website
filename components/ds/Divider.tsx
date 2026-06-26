import * as React from 'react';
import { cn } from '../../lib/cn';
import { Sparkle } from './Sparkle';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** `subtle` hairline · `gold` brass rule · `sparkle` rule with centred ✦. */
  variant?: 'subtle' | 'gold' | 'sparkle';
  className?: string;
}

/**
 * Horizontal rule. `sparkle` centres the SKG four-point star between two
 * gold hairlines (section breaks, footers).
 */
export function Divider({ variant = 'subtle', className = '', ...rest }: DividerProps) {
  if (variant === 'sparkle') {
    return (
      <div
        className={cn('skg-divider', 'skg-divider--sparkle', className)}
        role="separator"
        {...(rest as React.HTMLAttributes<HTMLDivElement>)}
      >
        <Sparkle />
      </div>
    );
  }
  return (
    <hr
      className={cn('skg-divider', variant === 'gold' && 'skg-divider--gold', className)}
      {...(rest as React.HTMLAttributes<HTMLHRElement>)}
    />
  );
}
