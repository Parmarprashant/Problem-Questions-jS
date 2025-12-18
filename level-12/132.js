let a = 68413;
let a2 = a.toString();
let min = a2[0];

for (let i = 1; i < a2.length; i++) {
    let digit = Number(a2[i]);
    if (digit < min) {
        min = digit;
    }
}

console.log(min); 
