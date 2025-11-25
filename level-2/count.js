var num = 15;
var count = 1;
let str = "";
for(var i =1; i<=num; i++){
    if(i%3==0){
        str = str + count++ + " ";
    }
    
}
 console.log(str);