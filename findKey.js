const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💸️💸️💸️Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${actual} !== ${expected}`);
  }
};

//console.log("property: ", property);
    //console.log("object[property]: ",object[property]);

//should scan the object and return the first key that the callback returns a truthy value for
//if no key is found return undefined
const findKey = (object, callback) => {
  for (let k in object) {
    if (callback) {
    return console.log(k);
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

