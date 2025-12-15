let arr = [1, 0, 1, 0, 1, 0];

let zeroCount = 0;
let oneCount = 0;

arr.forEach((value) => {
    value === 0 ? zeroCount++ : oneCount++;
});

console.log("Zeros:", zeroCount);
console.log("Ones:", oneCount);