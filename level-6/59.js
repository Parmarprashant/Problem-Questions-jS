var inpuy = [1,20,30,-1];
var str = ""
for(var i=0; i<= inpuy.length-1; i++){
    if(inpuy[i]>10){
        str = str + inpuy[i] + " ";
        
    }
}
console.log(str);