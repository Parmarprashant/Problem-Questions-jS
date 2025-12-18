let a = 8;
let b = 15;
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  
if(a==1){
    console.log("true");
}
else{
    console.log("false");
}
