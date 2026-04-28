import { InvariantError } from './types';

export function assertType<T>(
  value: unknown,
  guard: (v: unknown) => v is T,
  message?: string,
): asserts value is T {
  if (!guard(value)) {
    throw new InvariantError(message ?? 'Type assertion failed');
  }
}
