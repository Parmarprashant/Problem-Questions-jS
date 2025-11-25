function fibo(n){
    var a = 0;
    var b = 1;
    for(var i =2; i<=n; i++){
        let c = a+b;
        console.log(c);
        a=b;
        b=c;
    }

}
fibo(10);