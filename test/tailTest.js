const tail = require("../tail.js");
const assertEqual = require("../assertEqual");

// Test Case Variables
const origin = ["Hello", "Lighthouse", "Labs"];
const result = tail(origin);

// Test Case 1: Check the returned array elements
assertEqual(result.length,2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array elements
assertEqual(origin.length,3); // ensure we get back three elements
assertEqual(origin[0], "Hello"); // ensure first element is "Hello"
assertEqual(origin[1], "Lighthouse"); // ensure second element is "Lighthouse"
assertEqual(origin[2], "Labs"); // ensure third element is "Labs"

// Test Case 3: Edge cases
const edge1 = tail(["Hello"]);
assertEqual(edge1.length, 0); // ensure we get back an empty array
const edge2 = tail([]);
assertEqual(edge2.length, 0); // ensure we get back an empty array