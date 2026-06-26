import clsx, { type ClassValue } from 'clsx';

/** Tiny class-name helper wrapping clsx. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
