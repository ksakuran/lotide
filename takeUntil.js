
const takeUntil = (array, callback) => {
  //array.forEach((element,index, array)callback);
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0,i);
    }
  }
};
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// //assertArraysEqual(data1, takeUntil(data1, x => x < 0));

// const data3 = ["duck", "duck","duck","goose"];
// const results3 = takeUntil(data3, x => x === "goose");
// console.log(results3);

// assertArraysEqual(["duck","duck","duck"],results3);

module.exports = takeUntil;