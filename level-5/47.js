var str = "HEllo";
var count = 0;
var put = [];

for(var i = 0; i<=str.length-1; i++){
    if(str[i].charCodeAt(0)>=97 && str[i].charCodeAt(0)<=122){
        count++;
        put.push(str[i]);
    }
}


console.log(put);
console.log(count);