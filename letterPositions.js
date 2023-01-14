const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    
    if (arr2[i] !== arr1[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`💸️💸️💸️Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    return console.log(`🚨️🚨️🚨️Assertion Failed: ${array1} !== ${array2}`);
  }
};


const letterPositions = function(sentence) {
  
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter == " ") {
       //if letter is a space do nothing
    } else if (!results[letter]) { // else if results[letter] is falsy
      results[letter] = [i];//initalize array with the value of i
      //console.log(results[letter]);
    } else { //otherwise
      results[letter].push(i); //push the value of i into the array at results[letter]
    }
    //should return key = letter : value = array of indices
  } return results;
};
console.log(letterPositions("hello world"));
//assertArraysEqual(letterPositions("hello").e, [1]);

