function pangram(str){
    let arr = str.toLowerCase().split("").sort();
    console.log(arr);

    let ascii = 97;
    for(let i =0; i < arr.length; i++){
       let check = arr[i].charCodeAt();
       if(ascii==check){
        ascii++;
       }
    }
    console.log(ascii>=123 ? true:false);
}

pangram("The quick brown fox jumps over a lazy dog");





function pangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = str.toLowerCase();
    
    for (let char of alphabet) {
        if (!lowerStr.includes(char)) {
            return false;
        }
    }
    return true;
}

const ans = pangram("The quick brown fox jumps over a lazy dog");

console.log(ans);