let arr = [1,2,3,-3,-4,0];

let count = 0;
let ccount = 0;
let zcount = 0;
for(let i =0; i < arr.length; i++){
    if(arr[i]>0){
        count++;
    } else if(arr[i]<0){
        ccount++;
    } else {
        zcount++;
    }   
}

console.log(count);
console.log(ccount);
console.log(zcount);