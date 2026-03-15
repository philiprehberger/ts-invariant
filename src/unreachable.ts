export function unreachable(message?: string): never {
  throw new Error(message ?? 'Unreachable code reached');
}
