var arr = [10, 5, 8, 20];

var small = arr[0];
var second = arr[1];

if (second < small) {
    var temp = small;
    small = second;
    second = temp;
}

for (var i = 2; i < arr.length; i++) {
    if (arr[i] < small) {
        second = small;
        small = arr[i];
    } 
    else if (arr[i] < second) {
        second = arr[i];
    }
}

console.log("Second Smallest =", second);
