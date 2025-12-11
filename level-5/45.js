var str = "12345678okaasa";
var count = 0;
 
for(let i = 0; i<=str.length-1; i++){
    if(!isNaN(str[i])&& str[i] !== " "){
        count++;
    }
}

console.log(count);