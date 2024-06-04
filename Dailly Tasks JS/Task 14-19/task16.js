let array = [3, 7, 9, 2, 0, 1, 5, 4, 6];

let pos = 5;
let val = "res";

// array[pos] = val;
// console.log(array);
array.splice(5, 1, "res");
console.log(array);
