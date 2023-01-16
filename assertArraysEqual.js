const eqArrays = require('./eqArrays')


const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`💸️💸️💸️Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${array1} !== ${array2}`);
  }
};

// assertArraysEqual([1,2,3],[1,2,3]);
// assertArraysEqual([1,3,5],[2,3]);
// assertArraysEqual()

module.exports = assertArraysEqual