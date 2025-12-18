let a = 68403;
let a2 = a.toString();
let max = 0;
for(i =0; i<=a2.length; i++){
    if(max<a2[i]){
        max = a2[i];
    }
}

console.log(max);
