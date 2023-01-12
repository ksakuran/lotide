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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`💸️💸️💸️Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${array1} !== ${array2}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  //let value = [];
  for (let i = 0; i < sentence.length; i++) {
    let value = []; 
    if (sentence[i] !== " ") { //if the letter is not a space
      results[sentence[i]] = [];
      if (results[sentence[i]] = []); {
        results[sentence[i]].push(i);
      }
    }
  }
  return results; //should return key = letter : value = array of indices
};

 console.log(letterPositions("hello"));
//assertArraysEqual(letterPositions("hello").e, [1]);

//results[sentence[i]].push(i);
//      } else if (results[sentence[i]] !== []) { 
//      results[sentence[i]] = [];