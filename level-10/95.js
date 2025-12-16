let products = {apple: 50, banana: 30, mango: 40}

var sum = 0;
 for(let add in products){
    sum = sum+products[add];
 }

 console.log(sum);