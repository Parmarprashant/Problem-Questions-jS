// greatest common divider

function gcd(num1,num2){
   for(var i = Math.min(num1,num2); i>=1; i--){
    if(num1%i==0 && num2%i==0){
         console.log(i);
         break;
    }
   }
}

gcd(4,6);