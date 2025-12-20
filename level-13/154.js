function check(str){
    for(var i =0; i < str.length; i++) {
     if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 && str[i]!== "" && str.charCodeAt(i) !== 32){
        return false;
    }
}
return true;
    
}

const ans = check("hello2");
console.log(ans);



  