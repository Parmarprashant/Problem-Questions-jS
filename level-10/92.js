let arr = [1,1,1,2,2,3];
let obj = {};
let max;
let Maxfre = 0;

for (let char of arr) {
    if (obj[char] === undefined) {
        obj[char] = 1;
    } else {
        obj[char]++;
    }

    if (obj[char] > Maxfre) {
        max = char;
        Maxfre = obj[char];
    }
}

console.log(obj);
console.log(max);