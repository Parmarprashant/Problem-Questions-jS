// let arr = [1,2,3];

// for(let i =0; i < arr.length; i++){
//     if(arr[i]%2==0){
//         console.log("true");
//     }
// }


let arr = [1,2,3];
let check = 0;
let arr2 = arr.map((data)=>{
    return data%2===0? check=1:check =check;
})

console.log(check===1? true:false);
