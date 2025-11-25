var num = 999;
var sum = 0;
let str = "";

while(num > 0){
    sum = sum + num % 10;
    num = Math.floor(num / 10);
   
}
 str = str + sum + " ";
console.log(str); 
