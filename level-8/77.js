let arr = [10, 1, 8, 3, 2, 4, 11, 19, 18];

let average = arr.reduce((accumulator, value) => accumulator + value, 0) / arr.length;

let count = 0;

arr.forEach(value => {
    if (value > average) count++;
});

console.log(count);