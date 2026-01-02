function countOccurrences(arr, k) {
  let n = arr.length;
  let i = 0, j = n - 1;
  let right = -1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] === k) {
      right = mid;
      i = mid + 1;   
    } else if (arr[mid] > k) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  if (right === -1) return 0; 
  i = 0;
  j = n - 1;
  let left = -1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] === k) {
      left = mid;
      j = mid - 1;   
    } else if (arr[mid] > k) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return right - left + 1;
}




console.log(countOccurrences([1, 2, 2, 2, 3], 2)); 
console.log(countOccurrences([5, 5, 5, 5], 5));
console.log(countOccurrences([1, 2, 3], 4));      
