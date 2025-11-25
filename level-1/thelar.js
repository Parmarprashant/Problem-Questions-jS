function max(n1,n2,n3){
    if(n1>n2 && n1>n3){
        console.log("n1 is greater")
    }
    else if(n2>n1 && n2>n3){
        console.log(n2 + " is greater");
    }
   else{
    console.log(n3 + " is greater")
   }
}

max(10,20,40);   //basic we can also use normal value declare