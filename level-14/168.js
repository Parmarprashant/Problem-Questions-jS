function indexOfMax(arr) {
  let max = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return index;
}

const ans = indexOfMax([1, 3, 2, 5, 5, 4]); 
console.log(ans);
