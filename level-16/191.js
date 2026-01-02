//2 Pointers   binary Search

function binarySearch(arr, n){
    let left =0;
    let right = arr.length-1;

    while(left<=right){
        let mid = Math.floor((left + right)/2);

        if(arr[mid]>n){
        right = mid -1;
        } 
        else if(arr[mid]<n){
            left = mid +1;
        }
        else{
            console.log(mid);
            return;
        }
    }
    console.log(-1);
}

binarySearch([1,3,5,7,9], 9)