const assertEqual = function(actual, expected) {
  if (actual !== expected) {
  console.log(`🚨️🚨️🚨️Assertion Failed: ${actual} !== ${expected}`);
  return;
} //happy path
console.log(`💸️💸️💸️Assertion Passed: ${actual} === ${expected}`)
};
const head = function(array) {
  return array[0];
};

// TEST CODE
assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),undefined);