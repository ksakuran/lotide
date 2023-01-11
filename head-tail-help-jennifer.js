let actual = "";
let expected = "";

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  if (array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }
};
const tail = function (array) {
  if (array.length > 0) {
    return array.slice(1);
  } else {
    return undefined;
  }
};

let array = [1,2,3,4];
console.log(head(array));
console.log(tail(array));

assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const names = ["Julie","Matt","Tyra","Landry"];
tail(names);
assertEqual(names.length, 4);