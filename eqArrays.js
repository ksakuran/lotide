const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💸️💸️💸️Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(eqArrays([1,2,3],[1,2,3]));
console.log(eqArrays([1,2,3],[1,2,4]));

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should PASS