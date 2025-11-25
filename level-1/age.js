function check(age){
    if(age>=0 && age<=12){
        console.log("he/she is child");
    }
    else if(age>=13 && age<=19){
        console.log("he/she is teenager");
    }
    else{
        console.log("he/she is adult");
    }
}


check(18);