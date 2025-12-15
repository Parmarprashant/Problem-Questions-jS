function rD(){
    let arr = [1,1,1,2,3,4,5,3,2];
    let seen = {};
    let res = [];

    for (let i = 0; i < arr.length; i++){
        let value = arr[i];

        if (!seen[value]){
            seen[value] = true; 
            res.push(value);
        }
    }

    return res;
}


rD([1,2,3,4,5,3,2,1,3,2]);
