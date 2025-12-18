let a = 1223;
let a2 = a.toString();
let count = 0;

for (let i = 1; i < a2.length; i++) {
   if(a2[i]%2==0){
    count++;
   }
 
}

console.log(count); 