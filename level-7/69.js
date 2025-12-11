// let arr = [1, 1, 1, 1, 1, 2, 3, 78, 99];
// let max = 0;
// let smax = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > smax && arr[i] < max) {
//     smax = arr[i];
//   }
// }

// console.log(smax);


let arr = [1, 79, 1, 1, 2, 3, 78, 99];

let max = -Infinity;
let smax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    smax = max;
    max = arr[i];
  } else if (arr[i] > smax && arr[i] < max) {
    smax = arr[i];
  }
}

console.log(smax);