let str = "this is m nameee";
let str2 = str.split(' ');
let maxLength = 0;
for (let check of str2) {
    if (check.length > maxLength) {
        maxLength = check.length;
    }
}

console.log(maxLength);