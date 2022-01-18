const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;