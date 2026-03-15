export function invariantAs<E extends Error>(
  ErrorClass: new (message?: string) => E,
  condition: unknown,
  message?: string,
): asserts condition {
  if (condition) return;
  throw new ErrorClass(message ?? 'Invariant violation');
}
