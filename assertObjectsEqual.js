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
      if (eqArrays(object1[properties], object2 [properties]) === true) {
        return true;
      } else {
        return false;
      }
    }
    if (object1[properties] !== object2 [properties]) {
      return false;
    }
    return true;
  }
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  
  if (eqObjects(object1, object2) === true) {
    return console.log(`💸️💸️💸️Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else if (eqObjects(object1, object2) === false) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// const a = {
//   key: "value",
// }
// const b = {
//   key: "valued",
// }

// assertObjectsEqual(a,b);
