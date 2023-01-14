const assertEqual = function(actual, expected) {
    if (actual !== expected) {
    console.log(`🚨️🚨️🚨️Assertion Failed: ${actual} !== ${expected}`);
    return;
  } //happy path
  console.log(`💸️💸️💸️Assertion Passed: ${actual} === ${expected}`)
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Baby","Baby");
assertEqual(31,5);
