const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should PASS
assertEqual(eqArrays([1,2,3],["a", "b", "c"]), false); // should pass
assertEqual(eqArrays([],[]), true); //true  pass
assertEqual(eqArrays([1,2,3],[4,5,6,7,8]), false); //false pass