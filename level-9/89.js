// let str = ["Anisha","Prashant","PrashantXanisha"];
// let i =0;
// while(str[i]!= undefined){
//     i++;
// }
// let k =0;
// for(let j =1;j<=i;i++){
//     let word = str[j];
//     while(word[k]!=undefined){
//         k++;
//     }
//     console.log(k);
// }


function length(str) {
    let count = 0;
    let i = 0;
    while (str[i]) {
        count++;
        i++;
    }
    return count;
}

function main(arr = ["hello", "he", "str"]) {
    let n = arr.length;  
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(length(arr[i]));
    }
    return res;
}

console.log(main()); 