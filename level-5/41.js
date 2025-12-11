let sentence = "great never wons";

let count = 0;
let inWord = false;

for(let i = 0; i < sentence.length; i++){
    let ch = sentence[i];

    if(ch !== " " && inWord === false){
        count++;
        inWord = true;
    }
    else if(ch === " "){
        inWord = false;
    }
}

console.log(count);   
