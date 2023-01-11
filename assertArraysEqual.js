const eqArrays = function(array1,array2) {
  let x = 0;
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        x++;
      }
      //console.log("array1[i]:", array1[i]);
      //console.log("array2[i]:", array2[i]);
      //console.log("x: ", x);
      //console.log("array1.length", array1.length);
      //console.log("loop number: ", i)
    }
  } if (x === array1.length) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`💸️💸️💸️Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,3,5],[2,3]);