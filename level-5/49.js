var str = "Prash   ant1234";
var add = "";
for (let i = 0; i < str.length; i++) {
    if (str[i]>=0 && str[i]<=9) {
        add !== add + str[i];
    }
    else {add=add+str[i]}
}
console.log(add);
