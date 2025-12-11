var str = "hello";
var str2 = "aeiouAEIOU"
var count = 0;
for(var i =0; i<=str.length; i++){
  if(str2.includes(str[i])){
    count++;
  }
  
}
  console.log(count);



  // alternative methhhh


  let str12 = "javascript";

let obj = {
  j: 1,
  a: 1,
  v: 1,
  s: 1,
  c: 1,
  r: 1,
  i: 1,
  p: 1,
  t: 1
};

let count = 0;

for (let char of str12) {
  if (obj[char] === 1) {
    count++;
  }
}

console.log(count);    