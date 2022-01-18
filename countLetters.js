// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function (sentence) {
  const results = {};
  let lettersOnlySentence = sentence.toLowerCase().replace(/[^a-z]/g, '');

  for (const letter of lettersOnlySentence) {
    if (results[letter]) {
      results[letter] ++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

// const test1 = countLetters("lighthouse in the house");
// assertEqual(test1["l"], 1);
// assertEqual(test1["i"], 2);
// assertEqual(test1["g"], 1);
// assertEqual(test1["h"], 4);
// assertEqual(test1["t"], 2);
// assertEqual(test1["o"], 2);
// assertEqual(test1["u"], 2);
// assertEqual(test1["s"], 2);
// assertEqual(test1["e"], 3);
// assertEqual(test1[" "], undefined);
// assertEqual(test1["n"], 1);

module.exports = countLetters;