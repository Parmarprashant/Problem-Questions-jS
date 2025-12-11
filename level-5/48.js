// let str = "Sleep";
// let vowel = "";

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     let con = ch.toLowerCase();
//     if (con==='a'||con==='e'||con==='i'||con==='o'||con==='u'){
//       continue;
//     }
//     else {
//         vowel += ch;
//     }
// }
// console.log(vowel);  




// let str = "Sleep";
// let result = "";


// let vowels = "aeiouAEIOU";

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     //  let ch = str[i].toLowerCase();
//     if (vowels.includes(ch)) {
//         continue;   
//     } else {
//         result += str[i]; 
//     }
// }
// console.log(result);  



let str = "AEIOUkjd";
let vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1
};

let re = "";
for (let ch of str) {
    let lower = ch.toLowerCase();
    if (!vowels[lower]) {
        re += ch;
    }
}
console.log(re); 



// let str = "Sleep";

// let result = str.replace(/[aeiou]/gi, "");  
// console.log(result);



// let str = "Prashant";
// let remove = "";

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (ch>=0 && ch<=9){
//         continue;
//     }
//     else {
//         remove += ch;
//     }
// }
// console.log(remove);