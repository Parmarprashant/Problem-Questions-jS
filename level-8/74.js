let arr = [1,2,3,4,5];
let arr2 = [1,2,3]
let res = [];
let i =0;
let j = 0;
while(i<arr.length && j<arr2.length){
    if(arr[i]==arr2[j]){
        res.push(arr[i]);
        i++;
        j++;
    }
    else if(arr[i]>arr[j]){
        i++;
    }
    else{
        j++;
    }
}
console.log(res);