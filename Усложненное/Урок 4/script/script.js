function outputMessage(word) {
    if (word !== String(word)) {
        return 'В качестве аргумента передана не строка';
    } else {
        let arr = word.split('');


        if (arr[0] === ' ' || arr[arr.length - 1] === ' ') {
            arr.shift();
            arr.pop();
            if (arr.length > 30) {
                let res = arr.slice(0, 30);
                return res.join('')  + '...';
            } else {
                return arr.join('');
            }
        } else if (arr[0] === ' ') {
            arr.shift();
            if (arr.length > 30) {
                let res = arr.slice(0, 30);
                return res.join('')  + '...';
            } else {
                return arr.join('');
            }
        } else if (arr[arr.length - 1] === ' ') {
            arr.pop();
            if (arr.length > 30) {
                let res = arr.slice(0, 30);
                return res.join('')  + '...';
            } else {
                return arr.join('');
            }
        } else {
            if (arr.length > 30) {
                let res = arr.slice(0, 30);
                return res.join('')  + '...';
            } else {
                return arr.join('');
            }
        }
    }
}
console.log(outputMessage(' 12345678901234567890123456789012345678901234567890 '));



