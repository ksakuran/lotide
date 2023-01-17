

const map = (array, callback) => {
  const results = [];
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE : ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  
  return results;
};

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, (word) => word[0]);
// console.log(results1);
// assertArraysEqual(words,results1);

// const numbers = [1,2,3,4,5];
// const results2 = map(numbers,(number) => number * 10);
// console.log(results2);
// assertArraysEqual(numbers, results2);

// const booleans = [true, false, true, false, false];
// const results3 = map(booleans, (boolean) => !boolean);
// console.log(results3);
// assertArraysEqual(booleans, results3)
module.exports = map;

