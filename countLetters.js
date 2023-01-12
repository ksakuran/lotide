const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💸️💸️💸️Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  } return result;
};
console.log(countLetters("hello world"));
//console.log(countLetters("katherine sakura"));
//console.log(countLetters("lighthouse labs"));

