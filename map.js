const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (const i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => (word + " what")), ["ground what", "control what", "to what", "major what", "tom what"]);
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);