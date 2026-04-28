import { InvariantError } from './types';

export function assertDefined<T>(
  value: T,
  message?: string,
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new InvariantError(message ?? 'Expected value to be defined');
  }
}
