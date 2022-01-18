const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  const outputArr = [];
  const arrayLength = array.length;
  if (arrayLength > 2) {
    if (arrayLength % 2 === 0) {
      outputArr.push(array[(arrayLength / 2) - 1]);
      outputArr.push(array[(arrayLength / 2)]);
    } else {
      outputArr.push(array[Math.floor(arrayLength / 2)]);
    }
  }
  return outputArr;
}

module.exports = middle;