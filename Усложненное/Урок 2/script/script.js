let num = 266219;
let str = num + '';
let arr = str.split('');

let multiplication = arr[0] * arr[1] * arr[2] * arr[3] * arr[4] * arr[5];

/* Более универсальное решение:
    Изменяя число (его порядок), не нужно вручную добавлять/убирать дополнительные/лишние элементы массива
*/

// let multiplication = 1;
// for (let i = 0; i < arr.length; i++) {
//     multiplication *= arr[i];
// }

let degree = 3;
let result = multiplication ** degree;
result += '';

console.log(result.substr(0, 2));


