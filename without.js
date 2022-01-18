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

const without = function(source, itemsToRemove) {
  const outputArr = [];
  let ind = 0;
  let remove = false;
  while (ind < source.length) {
    for (const item of itemsToRemove) {
      if (source[ind] === item) {
        remove = true;
        break;
      }
    }
    if (remove === false) {
      outputArr.push(source[ind]);
    } else {
      remove = false;
    }
    ind ++;
  }
  return outputArr;
}

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without([], []), []);
// assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;