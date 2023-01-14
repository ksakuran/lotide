const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    
    if (arr2[i] !== arr1[i]) {
      return false;
    }
  } return true;
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
  if (source.length === 0 || itemsToRemove.length === 0) {
    return console.log("Error: Do not use an empty array");
  }
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      finalArray.push(source[i]);
    }
  }
  return finalArray;
};

//inputs are two arrays
// source array must remain unmodified
//compare elements of both arrays if they match
//must be removed from source array
//must return a new array

//TEST CODE;
//without([1, 2, 3], [1]); // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
//console.log(without ([],[1,2]));

//TEST CODE make sure original array is not modified
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);