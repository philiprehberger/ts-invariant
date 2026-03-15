import { InvariantError } from './types';

function formatMessage(template: string, args: unknown[]): string {
  let index = 0;
  return template.replace(/%s/g, () => {
    if (index < args.length) {
      return String(args[index++]);
    }
    return '%s';
  });
}

export function invariant(
  condition: unknown,
  messageOrFactory?: string | (() => string),
  ...args: unknown[]
): asserts condition {
  if (condition) return;

  if (typeof messageOrFactory === 'function') {
    throw new InvariantError(messageOrFactory());
  }

  if (messageOrFactory && args.length > 0) {
    throw new InvariantError(formatMessage(messageOrFactory, args));
  }

  throw new InvariantError(messageOrFactory);
}
