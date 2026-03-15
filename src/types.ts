export class InvariantError extends Error {
  constructor(message?: string) {
    super(message ?? 'Invariant violation');
    this.name = 'InvariantError';
  }
}
