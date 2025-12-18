function isAutomorphic(n) {
  let square = n * n;
  let temp = n;

  while (temp > 0) {
    if (square % 10 !== temp % 10) {
      return false;
    }
    square = Math.floor(square / 10);
    temp = Math.floor(temp / 10);
  }

  return true;
}

// function isAutomorphic(n) {
//   return String(n * n).endsWith(String(n));
// }


console.log(isAutomorphic(5)); 
