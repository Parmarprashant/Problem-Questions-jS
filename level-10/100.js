let arr = [
    { name: "A", age: 17},
    {name:"B", age: 18},
    {name:"C", age:19}
]

const arr2 = arr.filter((data)=>{
    return data.age>=18;
})

console.log(arr2);