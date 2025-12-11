var fir = "yayayaaayay  A";
var count = 0;
var Count2 = 0;
for(var i =fir.length-1; i>0; i--){
    if(fir[i] == 'a'){
        count++;
    }

    if(fir[i]=='A'){
        Count2++;
    }

}

console.log(count);
console.log(Count2);