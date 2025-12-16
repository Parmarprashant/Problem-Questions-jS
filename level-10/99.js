let obj = { name: "harsh", age: 23, class: "12th", add: 13 };
let count = 0;
for (let keys in obj) {
    console.log(keys);
    count++;
}

console.log(count)