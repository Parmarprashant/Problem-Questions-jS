let arr = [1,2,3];

let res = [arr[arr.length-1]];

for(let i =0; i<arr.length-1; i++){
    res.push(arr[i]);
}

console.log(res);




//method 2
let add = arr.pop();
arr.unshift(add);
console.log(arr);


//method 3
let temp = arr[arr.length-1];
for(let i = arr.length-1; i>0; i--){
    arr[i]=arr[i-1];
}
arr[0] = temp;
console.log(arr);