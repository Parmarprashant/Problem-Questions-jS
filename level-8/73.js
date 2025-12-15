var arr = [3,4];
var arr2 = [5,6,7];


//concat meth
var arr3 = arr.concat(arr2);
console.log(arr3);

//spread operator
var arr4 = [...arr,...arr2];

console.log(arr4)


// for loop


var arr1 = [1, 2, 3];
var arr5 = [4, 5, 6];
var result = [];

for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
}

for (var i = 0; i < arr5.length; i++) {
    result.push(arr5[i]);
}

console.log(result); 


