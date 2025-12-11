var arr = [12,34,2,4,6,5,7,8];
var count = 0;
for(var i = 0; i<=arr.length-1; i++){
    if(arr[i]%2==0){
        count++;
    }
}

console.log(count);

