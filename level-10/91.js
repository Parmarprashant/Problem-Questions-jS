function freq() {
    var freq = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 6];
    let obj = {};

    for (var i = 0; i < freq.length; i++) {
        if (obj[freq[i]]) {
            obj[freq[i]]++;
        } else {
            obj[freq[i]] = 1;
        }
    }

    return obj;
}

console.log(freq());



