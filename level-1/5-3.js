var num =  1;
if(num%3==0 && num%5==0){
    console.log("div by both");
}
else if(num%3==0 && num%5!=0){
    console.log("div by 3 but not with 5");
}
else if(num%3!=0 && num%5==0){
    console.log("div by 5 but not with 3");
}
else{
    console.log("not divisible by both");
}