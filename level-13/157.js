let str = "jsdfn$%#123";
let check = true;
 for(i = 0; i<str.length; i++){
    let con = str.charCodeAt(i);
    if(con>=32 || con<=47){
        check = false;
    }
    else{
        check = true;
    }
 }

 if(check){
    console.log(str);
 }else{
    console.log("false");
 }