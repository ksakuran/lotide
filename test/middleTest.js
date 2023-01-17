const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const isArrayLengthEven = require('../isArrayLengthEven');
const assert = require('chai').assert;

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);


describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  }); 

  it("returns ['Tyra', 'Matt'] for ['Julie', 'Tyra', 'Matt', 'Landry']", () => {
    assert.deepEqual(middle(['Julie', 'Tyra', 'Matt', 'Landry']),['Tyra', 'Matt']);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  }); 
  
});