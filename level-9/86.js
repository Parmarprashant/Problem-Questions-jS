let arr = [[1,10,12],
          [2,12,19,19],
          [19,11,28,99]];

let res = [];

for(let i = 0; i<arr.length; i++){
    let sum = 0;
    for(let j = 0; j<arr[i].length; j++){
        sum = sum + arr[i][j];
    }
    res.push(sum);
}

console.log(res);