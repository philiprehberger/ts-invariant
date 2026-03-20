# @philiprehberger/invariant-ts

[![CI](https://github.com/philiprehberger/ts-invariant/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-invariant/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/invariant-ts.svg)](https://www.npmjs.com/package/@philiprehberger/invariant-ts)
[![License](https://img.shields.io/github/license/philiprehberger/ts-invariant)](LICENSE)

Tiny runtime assertion with TypeScript narrowing

## Installation

```bash
npm install @philiprehberger/invariant-ts
```

## Usage

```ts
import { invariant, assertNever, unreachable } from '@philiprehberger/invariant-ts';

const user = getUser(id);
invariant(user, 'User %s not found', id);
user.name; // narrowed to User

// Lazy message
invariant(data, () => `Expected data, got ${typeof data}`);

// Exhaustiveness checking
type Shape = 'circle' | 'square';
switch (shape) {
  case 'circle': return handleCircle();
  case 'square': return handleSquare();
  default: assertNever(shape);
}
```

### Custom Error Classes

```ts
import { invariantAs } from '@philiprehberger/invariant-ts';

class NotFoundError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

invariantAs(NotFoundError, user, 'User not found');
```

## API

| Function | Description |
|----------|-------------|
| `invariant(condition, message?, ...args)` | Assert condition is truthy, narrows type |
| `invariantAs(ErrorClass, condition, message?)` | Assert with custom error type |
| `assertNever(value)` | Exhaustiveness checking for switch/if chains |
| `unreachable(message?)` | Mark unreachable code paths |
| `InvariantError` | Error class thrown by `invariant()` |


## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
