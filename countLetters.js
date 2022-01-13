const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters("lighthouse in the house"));