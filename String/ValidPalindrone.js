function validPalindrone(str) {
    const n = str.length;
    const newstr = str.toLowerCase();
    console.log(newstr);
    let i = 0;
    let j = n - 1;
    const isSpecialchar = (ch) => {
        if (ch >= 'a' && ch <= 'z' || ch >= '0' && ch <= '9') {
            return false;
        } else {
            return true;
        }
    };

    while (i < j) {
        if (isSpecialchar(newstr[i])) {
            i++;
            continue;
        }
        if (isSpecialchar(newstr[j])) {
            j--;
            continue;
        }
        if (newstr[i] !== newstr[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
}

console.log(validPalindrone("I am :IronnorI Ma, i"));