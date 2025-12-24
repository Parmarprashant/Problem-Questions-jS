let str = "i love javascript";
let words = str.split(" ");
let count = 0;

for (let word of words) {
    if (word.length >= 5) {
        count++;
    }
}

console.log(count); 
