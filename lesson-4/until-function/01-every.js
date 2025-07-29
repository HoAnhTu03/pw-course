//1 
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const expense = [50,100,150];

let greaterThan70 = scores.every(num => num > 70);
let greaterThan15 = ages.every(num => num > 15);
let greaterThan3 = words.every(str => str.length > 3);

console.log(`Các giá trị trong mảng có lớn hơn 70: ${greaterThan70}`);
console.log(`Các giá trị trong mảng có lớn hơn 15: ${greaterThan15}`);
console.log(`Các giá trị trong mảng có lớn hơn 3: ${greaterThan3}`);

//2 
let newScores = scores.filter(num => num >= 80);
console.log(`Gía trị lớn hơn hoặc bằng 80: ${newScores}`);
let newAges = ages.filter(num => num >= 18);
console.log(`Gía trị lơn hơn hoặc bằng 18: ${newAges}`);
let newWords = words.filter(str => str.length > 5);
console.log(`Gía trị kí tự lớn hơn 5: ${newWords}`);

//3 
let newScores2 = scores.find(num => num >= 80);
console.log(`Gía trị đầu tiên lớn hơn 80: ${newScores2}`);
let newAges2 = ages.find(num => num > 20);
console.log(`Gía trị đầu tiên lớn hơn 20: ${newAges2}`);
let newWords2 = words.find(str => str.length > 5);
console.log(`Gía trị kí tự đầu tiên lớn hơn 5: ${newWords2}`);

//4 
let newScores3 = scores.map(num => {
    if (num < 90) {
        num = num * (1 + 0.1);
    }
    else {
        num = num * (1 - 0.05);
    }
    return num;
})
console.log(newScores3)


const numbers = [1, 2, 3];
let str = "";
numbers.map((value, index) => {
    str += value;
    if (index < numbers.length - 1) {
        str += ", ";
    }
});
console.log(str); 

let newNumbers=numbers.map(num => num * 2);
console.log(newNumbers)

//5 
let greaterThan80 = scores.some(num => num > 80);
let lessThan18 = ages.some(num => num < 18);
let greaterThan5 = words.some(str => str.length > 5);

console.log(greaterThan80);
console.log(lessThan18);
console.log(greaterThan5);

//6 
let sum = scores.reduce((total, num) => total + num, 0);
console.log(sum);
let multipli = numbers.reduce((multi, num) => multi * num)
console.log(multipli);
let sum2 = expense.reduce((total, num) => total + num, 0);
console.log(sum2);

