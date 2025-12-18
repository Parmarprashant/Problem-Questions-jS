let n = 28;
let sum = 0;

for(var i = 1; i<n; i++){
    if(n%i==0){
        sum = sum +i;
    } 
}

 if(sum===n){
        console.log("true")
    }
    else{
        console.log("false");
    }