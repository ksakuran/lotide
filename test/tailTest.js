const tail = require("../tail");
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual")
const assert = require('chai').assert;


// assertArraysEqual(tail([1,2,3,4]), [2,3,4]);

// //console.log(tail([1,2,3,4]))
// assertArraysEqual(tail(['Julie', 'Tyra', 'Matt', 'Landry']),['Tyra', 'Matt', 'Landry'])

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  }); 

  it("returns ['Tyra', 'Matt', 'Landry'] for ['Julie', 'Tyra', 'Matt', 'Landry']", () => {
    assert.deepEqual(tail(['Julie', 'Tyra', 'Matt', 'Landry']),['Tyra', 'Matt', 'Landry']);
  });

});