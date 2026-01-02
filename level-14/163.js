// let arr = [10];
// for(let i =0; i < arr.length; i++){
//     arr[i] = Math.abs(arr[i]);
// }
// console.log(arr);



let arr = [-3,-4,4];
for(let i =0; i < arr.length; i++){
    if(arr[i]<0){
        arr[i] = arr[i] * -1;
    }
}

console.log(arr);