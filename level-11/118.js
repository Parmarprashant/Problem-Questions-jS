function convert(F){
  let cel = (F-32)*5/9;
  return cel;
}

const ans = convert(32);
console.log(ans);