function indexOfMin(arr) {
  let min = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }

  return index;
}

const ans = indexOfMin([1, 3, 2, 5, 4]); 
console.log(ans);
