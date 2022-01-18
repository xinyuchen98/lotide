const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// // MY OWN TESTS
// assertEqual("Work", "Work");
// assertEqual("Work", "Walk");
// assertEqual(17, 17);
// assertEqual(17, 71);

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("returns true for 1 and 1", () => {
    assert.isTrue(assertEqual(1, 1));
  });
  it("returns true for 'Work' and 'Work'", () => {
    assert.isTrue(assertEqual("Work", "Work"));
  });
  it("returns false for 'Work' and 'Walk'", () => {
    assert.isFalse(assertEqual("Work", "Walk"));
  });
  it("returns true for 17 and 17", () => {
    assert.isTrue(assertEqual(17, 17));
  });
  it("returns false for 17 and 71", () => {
    assert.isFalse(assertEqual(17, 71));
  });
});