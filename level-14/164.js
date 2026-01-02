let arr = [2,4,6];
let check = 0;
let arr2 = arr.map((data)=>{
    return data%2===0? check++:check =check;
})

console.log(check===arr.length? true:false);