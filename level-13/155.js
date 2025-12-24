let str = "123";
let check = true;

for(i=0; i<str.length; i++){
     let code = str.charCodeAt(i);

    if (
        (code >= 65 && code <= 90) ||   // A-Z
        (code >= 97 && code <= 122)     // a-z
    ) {
        check = true;
    } else {
        check = false;
        break;
    }
}

console.log(check);