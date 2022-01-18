// const eqArrays = function(array1, array2) {
//   if (array1.length === array2.length) {
//     for (const i in array1) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// }

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let index = 0; index < sentence.length; index ++) {
    let letter = sentence[index];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  }
  return results;
};

// const test1 = letterPositions("hello")
// assertArraysEqual(test1["h"], [0]);
// assertArraysEqual(test1["e"], [1]);
// assertArraysEqual(test1["l"], [2, 3]);
// assertArraysEqual(test1["o"], [4]);

module.exports = letterPositions;