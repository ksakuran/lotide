const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💸️💸️💸️Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${actual} !== ${expected}`);
  }
};


//should scan the object and return the first key that the callback returns a truthy value for
//if no key is found return undefined
const findKey = (object, callback) => {
  for (let key in object) {
    //console.log("key: ",key);
    //console.log("object[key]: ", object[key]);
    let objectValues = object[key];
    let compareValue = callback(objectValues);
    //console.log(compareValue);
    if (compareValue) {
      return key;
    }
  }
};

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(results, "noma");