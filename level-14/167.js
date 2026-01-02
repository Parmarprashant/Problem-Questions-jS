let arr = [1,2,3,4,5,6,7];
let count = 0;
let k = 4;

for(let i =0; i < arr.length; i++){ 
    if(arr[i]>k){
        count++;
    }
}

console.log(count);