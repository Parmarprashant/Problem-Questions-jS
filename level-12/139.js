let n = 18;
let sum = 0;

while (n > 0) {
  sum += n % 10;       
  n = Math.floor(n / 10); 
}

console.log(sum);

if(n%sum==0){
    console.log("true");
}
else{
    console.log("false");
}