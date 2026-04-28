# @philiprehberger/ts-invariant

[![CI](https://github.com/philiprehberger/ts-invariant/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-invariant/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/ts-invariant.svg)](https://www.npmjs.com/package/@philiprehberger/ts-invariant)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-invariant)](https://github.com/philiprehberger/ts-invariant/commits/main)

Tiny runtime assertion with TypeScript narrowing

## Installation

```bash
npm install @philiprehberger/ts-invariant
```

## Usage

```ts
import { invariant, assertNever, unreachable } from '@philiprehberger/ts-invariant';

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

### Defined / Typed Assertions

```ts
import { assertDefined, assertType } from '@philiprehberger/invariant-ts';

function findUser(id: string): User | undefined { /* ... */ }

const user: User | undefined = findUser(id);
assertDefined(user, 'User must exist');
user.name; // narrowed to User

const isUser = (v: unknown): v is User =>
  !!v && typeof v === 'object' && 'id' in v;

assertType(payload, isUser, 'Invalid user payload');
payload.name; // narrowed to User
```

### Custom Error Classes

```ts
import { invariantAs } from '@philiprehberger/ts-invariant';

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
| `assertDefined(value, message?)` | Narrow `T \| null \| undefined` to `T` |
| `assertType(value, guard, message?)` | Narrow via a custom type guard |
| `assertNever(value)` | Exhaustiveness checking for switch/if chains |
| `unreachable(message?)` | Mark unreachable code paths |
| `InvariantError` | Error class thrown by `invariant()` |

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-invariant)

🐛 [Report issues](https://github.com/philiprehberger/ts-invariant/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-invariant/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
