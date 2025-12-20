let str = " javascript is fun";
let str2 = " ";
str = str.trim();
for(var i =0; i < str.length; i++) {
     if(str[i]=== " "){
        break;
     }
        str2 = str2 + str[i];
        

}
console.log(str2);