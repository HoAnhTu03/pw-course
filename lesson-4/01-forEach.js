//
const numbers = [1, 2, 3];

numbers.forEach((value, index) => {
    console.log(index, value)

})
//
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(`Tổng của mảng number là : ${sum} `)
//
const min = Math.min(1, 2, 3);
const max = Math.max(1, 2, 3);

console.log(`Gía trị lớn nhất của mảng là ${max}`);
console.log(`Gía trị nhỏ nhất của mảng là ${min}`);
//
let newNumbers = numbers.map(num => num * 2);
console.log(`Mảng mới: ${newNumbers}`);



