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
    }
  } if (x === array1.length) {
    return true;
  } else {
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object
  let arrayOfKeys1 = Object.keys(object1); // returns an array of the keys in object 1
  let arrayOfKeys2 = Object.keys(object2); // returns an array of the keys in object 2
  if (arrayOfKeys1.length !== arrayOfKeys2.length) {
    return false;
  }
  for (let properties of arrayOfKeys1) {
    if (object1[properties].isArray && object2 [properties].isArray) {
      if(eqArrays(object1[properties],object2 [properties]) === true) {
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
//console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false


//assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
//assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false

// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),true);
// assertEqual(eqObjects(multiColorShirtObject,longSleeveMultiColorShirtObject), false);