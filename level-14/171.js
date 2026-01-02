// let arr = [1,1,2,2,3,3];
// let res = [];

// for(let i =0; i<arr.length; i++){
//     let check = true;
//     for(let j =0; j<res.length; j++){
//         if(arr[i]==res[j]){
//             check = false;
//             break;
//         }
//     }
//     if(check){
//         res.push(arr[i]);
//     }
    
// }
// console.log(res);


let arr = [1,1,2,2,3,3,4,4];
let res = {};

for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = true;
}
var arr1 = [];
for(let val in res){
    arr1.push(Number(val));
}

console.log(arr1); 
