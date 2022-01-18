const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], ["1", 2, 3]);
// assertArraysEqual([], []);
// assertArraysEqual([1, 2], [1, 2, 3]);

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for [1, 2, 3] and ['1', 2, 3]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], ["1", 2, 3]));
  });
  it("returns true for [] and []", () => {
    assert.isTrue(assertArraysEqual([], []));
  });
  it("returns false for [1, 2] and [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual([1, 2], [1, 2, 3]));
  });
});