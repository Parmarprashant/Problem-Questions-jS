// let arr = [1,1,2,3,4];
// let check = false;

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//         check = true;
//         break;
//     }
// }

// console.log(check);



// let arr = [1,2,1,3,2,4,5];
// let obj = {};


// for(let val of arr){
//     if(obj[val]){
//         return false;

//     }
//     else{
//         obj[val] = 1;
//     }
//     return false;
// }


// console.log(obj);



let arr = [1,2,1,3,2,4,5];
let obj = {};

let check = false;

for (let val of arr) {
    if (obj[val]) {
        check = true;
        break;
    } else {
        obj[val] = 1;
    }
}

console.log(check); 
