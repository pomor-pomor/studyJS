// задание 1

let arr = ['234', '544', '333', '555', '423', '242', '444', '555'];


for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 2 || arr[i][0] == 4) {
        console.log(arr[i]);
    }
}

// задание 2

let num = 100;

outer:
for (let i = 2; i < 100; i++) {
    for (let j = 2; j < i; j++) {
       if (i % j == 0) {
        continue outer;
       }
    }
    console.log(i);
}
