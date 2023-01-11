const eqArrays = function(array1,array2) {
  //if (array1.length === 0 || array2.length === 0) {
    //return console.log("Error: Do not use an empty array");
  //}
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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`💸️💸️💸️Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${array1} !== ${array2}`);
  }
};

const isArrayLengthEven = function(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//console.log("isArrayLengthEven(array):",isArrayLengthEven([1,2,3]))

const middle = function(array) {
  let middleArray = [];
  let i = 0;
  if (array.length === 0) {
    return console.log("Error: Do not use an empty array");
  }
  if (array.length <= 2) {
    //if the array has 2 elements or less there is no middle
    middleArray = [];
    return middleArray;
    //console.log("middleArray: ",middleArray);
  } else if (isArrayLengthEven(array)) { //if the array.length is even
    //find the 2 index values that are the middle
    i = (array.length - 1) / 2;
    middleArray = array.splice(i,2);
    return middleArray;
    //console.log("middleArray: ifEven",middleArray);
  } else if (!isArrayLengthEven(array)) {
    //find the middle index value
    i = (array.length - 1) / 2;
    middleArray = array.splice(i,1);
  } return middleArray;
  //console.log("middleArray: ifOdd",middleArray);
};

//test code

//middle([1]) // => []
//middle([1, 2]) // => []

//middle([1, 2, 3]) // => [2]
//middle([1, 2, 3, 4, 5]) // => [3]

//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

arrayTest = [1,2,3,4,5];

assertArraysEqual(middle(arrayTest),[3]);