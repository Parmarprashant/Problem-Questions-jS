let str = "olo";

let L = 0;
let R = str.length-1;

while(L<R){
    if(str[L] !== str[R] ){
        console.log("false");
        return; 
    }
    L++;
    R--;
}
console.log("true");