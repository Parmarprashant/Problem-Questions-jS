//LCM
 var f=10;
 var s = 15;
 var max = Math.max(f,s);
 for(var i = max; i<=f*s; i++){
    if(f%i==0 && s%i==0){
        console.log(i);
    }
 }