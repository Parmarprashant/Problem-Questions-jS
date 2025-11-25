// Count digits in a number

var num =Math.abs(134);
var count = 0;
let str = "";
while(num>0){
    num = Math.floor(num/10);
    str = str + count++ + " ";
}
console.log(count);