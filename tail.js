const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💸️💸️💸️Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};

//test case to make sure tail function returns
// a new array and doesnt modify the old one
const names = ["Julie","Matt","Tyra","Landry"];
tail(names);
assertEqual(names.length, 4);

//test case, an array with only one element
//should yield an empty array for it's tail
const onlyOne = [1];
console.log(tail(onlyOne));
