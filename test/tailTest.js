const tail = require("../tail.js");
const assert = require('chai').assert;

// const assertEqual = require("../assertEqual");

// // Test Case Variables
// const origin = ["Hello", "Lighthouse", "Labs"];
// const result = tail(origin);

// // Test Case 1: Check the returned array elements
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Check the original array elements
// assertEqual(origin.length, 3); // ensure we get back three elements
// assertEqual(origin[0], "Hello"); // ensure first element is "Hello"
// assertEqual(origin[1], "Lighthouse"); // ensure second element is "Lighthouse"
// assertEqual(origin[2], "Labs"); // ensure third element is "Labs"

// // Test Case 3: Edge cases
// const edge1 = tail(["Hello"]);
// assertEqual(edge1.length, 0); // ensure we get back an empty array
// const edge2 = tail([]);
// assertEqual(edge2.length, 0); // ensure we get back an empty array

describe("#tail", () => {
  const origin = ["Hello", "Lighthouse", "Labs"];
  const result = tail(origin);
  it("return 2 for the length of the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result.length, 2);
  });
  it("return 'Lighthouse' for the first element of the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("return 'Labs' for the second element of the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result[1], "Labs");
  });
  it("return 3 for the length of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(origin.length, 3);
  });
  it("return 'Hello' for the first element of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(origin[0], "Hello");
  });
  it("return 'Lighthouse' for the second element of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(origin[1], "Lighthouse");
  });
  it("return 'Labs' for the third element of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(origin[2], "Labs");
  });
  const edge1 = tail(["Hello"]);
  it("return 0 for the length of the tail of ['Hello']", () => {
    assert.strictEqual(edge1.length, 0);
  });
  const edge2 = tail([]);
  it("return 0 for the length of the tail of []", () => {
    assert.strictEqual(edge2.length, 0);
  });
});