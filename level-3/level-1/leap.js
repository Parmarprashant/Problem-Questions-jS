var year = 2028;
if(year % 400==0){
    console.log("leap year");
}
else if(year%100==0){
    console.log("NOT A LEAP YEAR");
}
else if(year%4==0){
    console.log('LEAP YEAR');
}
else{
   console.log("not  a leap year");
}