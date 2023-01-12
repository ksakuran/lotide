const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💸️💸️💸️Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
//findKeyByValue(bestTVShowsByGenre,"Brooklyn Nine-Nine");

const findKeyByValue = function(object, value) {
  
  for (let property in object) {
    //console.log("property: ", property);
    //console.log("object: ", object);
    //console.log("object[property]: ", object[property]);
    if (object[property] === value) {
      return console.log(property);
    }
  }
};


//findKeyByValue(bestTVShowsByGenre,"The Wire");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);