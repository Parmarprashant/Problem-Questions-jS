let arr = [-3,2,5,78,23,-89];

let max = arr[0];
let min = arr[0];

for(var i = 0; i<arr.length; i++){
    if(max<=arr[i]){
        max = arr[i];
    }
    if(min> arr[i]){
        min = arr[i];
    }
}


console.log(max);
console.log(min);



// meth 2


let arr2 = [1, 1, 2, 10, 100, 10];

let max1 = Math.max(...arr2);
let min1 = Math.min(...arr2);

console.log(max > 0 ? max1 : null);
console.log(min > 0 ? min1 : null);