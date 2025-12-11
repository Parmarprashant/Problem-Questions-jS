var arr = [1,2,3,4,5,6];
console.log(arr.indexOf(4));


var result;
var arr2 = arr.map((data,index)=>{
    if(data == 2){
        result = index;
    }
})

console.log(result);


