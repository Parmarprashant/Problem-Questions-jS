let num = 145;
let main = num;  
let rev = 0;

while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}

if (rev == main) {
    console.log("Palindrome");
    console.log(rev);
} else {
    console.log("Not Palindrome");
}
