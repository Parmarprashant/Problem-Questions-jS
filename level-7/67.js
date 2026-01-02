var arr = [1,1,2,3,4,4,5,5,5,4];

var obj = {}; 

for (let i = 0; i < arr.length; i++) {
    let add = arr[i];

    if (obj[add]) {
        obj[add]++;   
    } else {
        obj[add] = 1;              
    }
}

console.log(obj);
