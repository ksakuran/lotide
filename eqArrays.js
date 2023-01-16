const assertEqual = require('./assertEqual');


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

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should PASS

// //console.log(eqArrays([1,2,3], [1,2,4]))

// assertEqual(eqArrays([1,2,3],["a", "b", "c"]), true);  // should fail
// assertEqual(eqArrays([1,2,3],[1,2,3]), true); //true  pass
// assertEqual(eqArrays([1,2,3],[4,5,6,7,8]), false); //false pass

module.exports = eqArrays