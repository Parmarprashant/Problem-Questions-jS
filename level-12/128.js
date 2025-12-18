let n = 20;
let str = " "
let count = 0;
for(var i =1; i<=n; i++){
    if(i%2==0 && i%5==0){
        count++;
        str = str + i + " ";
    }
}

console.log(count);