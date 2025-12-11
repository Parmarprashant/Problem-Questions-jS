var word = "apple";
var w2 = "";
for(var i = word.length-1; i>0; i--){
    if(word[i] == 'a'){ 
       w2 += 'e';
    }
    else{
        w2 += word[i];
    }
    
}

 console.log(w2);