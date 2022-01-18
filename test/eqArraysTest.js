const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], ["1", 2, 3]), false); // => should FAIL
// assertEqual(eqArrays([], []), true); // => should PASS
// assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // => should FAIL

describe("#eqArray", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for [1, 2, 3] and ['1', 2, 3]", () => {
    assert.isFalse(eqArrays([1, 2, 3], ["1", 2, 3]));
  });
  it("returns true for [] and []", () => {
    assert.isTrue(eqArrays([], []));
  });
  it("returns false for [1, 2] and [1, 2, 3]", () => {
    assert.isFalse(eqArrays([1, 2], [1, 2, 3]));
  });
});