// var arr = [12,34,11,55,67,88];
// var arr2 = [];
// for(var i =0; i<=arr.length-1; i++){
// if(arr[i]%2!==0){
//     arr2.push(arr[i]);
// }

// }
// console.log(arr2);




//filter method

var arr = [1,2,3,4,5];

var arr2 = arr.filter((data, index, array)=>{
    return data%2!==0;
})

console.log(arr2);



//slice method

// for(var i = 0; i<= arr.length; i++){
//     if(arr[i]%2!==0){
//         console.log(arr.slice(i, 1));
//         i-i-1
//     }
// }

