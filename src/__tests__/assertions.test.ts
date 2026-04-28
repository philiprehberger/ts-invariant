import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { assertDefined, assertType, InvariantError } from '../../dist/index.js';

describe('assertDefined', () => {
  it('passes for non-nullish value', () => {
    const v: string | undefined = 'hi';
    assertDefined(v);
    assert.equal(v.length, 2);
  });

  it('throws InvariantError for null', () => {
    assert.throws(() => assertDefined(null as unknown), InvariantError);
  });

  it('throws InvariantError for undefined', () => {
    assert.throws(() => assertDefined(undefined), InvariantError);
  });

  it('does not throw for falsy-but-defined values', () => {
    assert.doesNotThrow(() => assertDefined(0));
    assert.doesNotThrow(() => assertDefined(''));
    assert.doesNotThrow(() => assertDefined(false));
  });
});

describe('assertType', () => {
  const isString = (v: unknown): v is string => typeof v === 'string';

  it('passes when guard accepts the value', () => {
    const v: unknown = 'hello';
    assertType(v, isString);
    assert.equal(v.toUpperCase(), 'HELLO');
  });

  it('throws InvariantError when guard rejects', () => {
    assert.throws(() => assertType(42, isString, 'must be string'), /must be string/);
  });
});
