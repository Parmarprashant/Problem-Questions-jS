var num = 1232;
var multi =1;

while(num > 0){
    multi = multi*num % 10;
    num = Math.floor(num / 10);
   
}
console.log(multi); 
