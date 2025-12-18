function check(a,b,c){
    if(a<b && a<c){
        console.log(a)
    }
    else if(b<a && b<c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}


check(1,2,2);