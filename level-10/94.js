let arr =[
    { name: "lavesh", marks: 50},
    {name:"yash", marks: 80},
    {name: "sai", marks: 100},
    {name: "anisha", marks: 120}
];
var max =arr[0].marks;
var show ;
for(let i = 0;i<=arr.length-1;i++){
   if(arr[i].marks>max){
    max = arr[i].marks;
    show = i;
   }
}

console.log(arr[show].name);

