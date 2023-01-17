const eqArrays = require('./eqArrays');
const isArrayLengthEven = require('./isArrayLengthEven');
const assertArraysEqual = require('./assertArraysEqual');

//console.log("isArrayLengthEven(array):",isArrayLengthEven([1,2,3]))

const middle = function(array) {
  let middleArray = [];
  let i = 0;
  if (!array) {
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
    //console.log("middleArray: if even",middleArray);
  } else if (!isArrayLengthEven(array)) {
    //find the middle index value
    i = (array.length - 1) / 2;
    middleArray = array.splice(i,1);
  } return middleArray;
  //console.log("middleArray: if odd",middleArray);
};

//test code

//middle([1]) // => []
//middle([1, 2]) // => []

//middle([1, 2, 3]) // => [2]
//middle([1, 2, 3, 4, 5]) // => [3]

//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// arrayTest = [1,2,3,4,5];

// assertArraysEqual(middle(arrayTest),[3]);

module.exports = middle;