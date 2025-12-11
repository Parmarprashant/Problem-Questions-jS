function countConsonants(str) {
    str = str.toLowerCase();
    let consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;

    for (let char of str) {
        if (consonants.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countConsonants("Hello World")); 
