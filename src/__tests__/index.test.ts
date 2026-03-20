import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('invariant-ts', () => {
  it('should export invariant', () => {
    assert.ok(mod.invariant);
  });

  it('should export invariantAs', () => {
    assert.ok(mod.invariantAs);
  });

  it('should export assertNever', () => {
    assert.ok(mod.assertNever);
  });

  it('should export unreachable', () => {
    assert.ok(mod.unreachable);
  });

  it('should export InvariantError', () => {
    assert.ok(mod.InvariantError);
  });
});
