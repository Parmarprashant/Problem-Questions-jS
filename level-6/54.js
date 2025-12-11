var arr = [12,11,312,41,52,6];

var min = arr.length;

for(let i = 0; i<=arr.length-1; i++){
    if(min>arr[i]){
        min = arr[i];
    }
}

console.log(min);