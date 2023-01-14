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

const eqObjects = function(object1, object2) {
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object
  let arrayOfKeys1 = Object.keys(object1); // returns an array of the keys in object 1
  let arrayOfKeys2 = Object.keys(object2); // returns an array of the keys in object 2
  if (arrayOfKeys1.length !== arrayOfKeys2.length) {
    return false;
  }
  for (let properties of arrayOfKeys1) {
    if (Array.isArray(object1[properties]) && Array.isArray(object2 [properties])) {
      if (eqArrays(object1[properties], object2 [properties]) === false) {
        return false;
      }
    }
    if (object1[properties] !== object2 [properties]) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  
  if (eqObjects(object1, object2) === true) {
    return console.log(`💸️💸️💸️Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else if (eqObjects(object1, object2) === false) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};



