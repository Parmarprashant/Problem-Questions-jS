var num = 21;
var count = 0;
var isPrime = false;

for(var i =1; i<=num; i++){
    if(num % i == 0){
        count ++;
    }
    if(count <= 2){
   console.log(i);
}
}

