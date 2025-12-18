let n = 10;
let str = " "
let count = 0;
for(var i =1; i<=n; i++){
    if(i%2==0 || i%3==0){
        count++;
        str = str + i + " ";
    }
}
console.log(str);
console.log(count);