function isAnagram(str1, str2) {

    function cleanString(str) {
        let res = "";
        for (let ch of str) {
            if (ch !== " ") {
                let code = ch.charCodeAt(0);
                if (code >= 65 && code <= 90) {
                    res += String.fromCharCode(code + 32);
                } else {
                    res += ch;
                }
            }
        }
        return res;
    }

    let s1 = cleanString(str1);
    let s2 = cleanString(str2);

    if (s1.length !== s2.length) return false;

    let freq = {};

    for (let ch of s1) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of s2) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    return true;
}
