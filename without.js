const eqArrays = function(array1,array2) {
  let x = 0;
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        x++;
      }
    }
  } if (x === array1.length) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`💸️💸️💸️Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(source,itemsToRemove) {
  let finalArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      finalArray.push(source[i]);      
    } 
  }
  return console.log(finalArray);
}

//inputs are two arrays
// source array must remain unmodified
//compare elements of both arrays if they match
//must be removed from source array
//must return a new array

//TEST CODE;
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

//TEST CODE make sure original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);