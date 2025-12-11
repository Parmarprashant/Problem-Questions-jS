var arr = [1,2,3,4,5,6];
var so = true;
for(var i =1; i<=arr.length-1; i++){
    if(arr[i]<=arr[i-1]){
        so = false;
        break;
    }
  
}


console.log(so);