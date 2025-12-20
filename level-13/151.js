let str = "this issa mee nameee";
let str2 = str.split(' ');
let minLength = 0;
for (let check of str2) {
    if (check.length < minLength || minLength === 0) {
        minLength = check.length;        
    }
   
}

console.log(minLength);