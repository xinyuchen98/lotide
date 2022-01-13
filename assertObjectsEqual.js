const eqObjects = function(object1, object2) {
  const obj1Length = Object.keys(object1).length;
  const obj2Length = Object.keys(object2).length;
  if (obj1Length !== obj2Length) {
    return false;
  } else {
    for (const key1 in object1) {
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])){
        if (!eqArrays(object1[key1], object2[key1])) {
          return false;
        }
      } else if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({"a": "c", "b": "d"}, {"a": "c", "b": "d"});
assertObjectsEqual({"a": "b", "c": "d"}, {"a": "c", "b": "d"});
assertObjectsEqual({"a": "1", "b": "2"}, {"a": 1, "b": 2});
assertObjectsEqual({}, {});