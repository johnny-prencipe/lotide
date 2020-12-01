const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

const a = {a: 1, b: 2, c: 3};
const b = {a: 1, b: 2, c: 3};
const c = {a: 2, c: 33, b: 4};

describe('#assertObjectsEqual', () => {
  it('returns 🛑🛑🛑 Assertion Failed when given { a: 2, c: 33, b: 4 } and { a: 1, b: 2, c: 3 }', () => {
    assert.deepEqual(assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 2, c: 33, b: 4 }), `🛑🛑🛑 Assertion Failed.`)
  });
  it('returns ✅✅✅ Assertion Passed when given { a: 2, c: 33, b: 4 } and { a: 2, c: 33, b: 4 }', () => {
    assert.deepEqual(assertObjectsEqual({ a: 2, c: 33, b: 4 }, { a: 2, c: 33, b: 4 }), `✅✅✅ Assertion Passed.`)
  });
});