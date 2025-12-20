let str = " javascript is fun ";
let str2 = "";
str = str.trim();
for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
        break;
    }
    str2 = str[i] + str2;  
}
console.log(str2);  