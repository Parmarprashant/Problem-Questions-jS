// let num = 12345;
// let rev = 0;

// while (num > 0) {
//     let digit = num % 10;       
//     rev = rev * 10 + digit;    
//     num = Math.floor(num / 10); 
// }

// console.log(rev); 




// Inbuilt method


let n = "-001";
let check = 1;
if(n<0){
    check = -1;
    n = Math.abs(n);
}
n = Number(String(n).split("").reverse().join(""))*check;

console.log(n);