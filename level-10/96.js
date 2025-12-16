let subjects = {maths: 50, science: 30, socialScience: 40}
let avg ;
var sum = 0;
let length = 0;
 for(let add in subjects){
    sum = sum+subjects[add];
    length++;
 }
 avg = sum/length;

 console.log(avg);

 console.log(sum);