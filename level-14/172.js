

let arr = [1, 2, 3, 4, 5];
let check = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        check = false;
        break;
    }
}

if (check) {
    console.log("Array is ascending:", arr);
} else {
    console.log("Array is NOT ascending");
}

