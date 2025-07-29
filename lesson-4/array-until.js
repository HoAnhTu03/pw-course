// map
/* 
let numbers =[1,2,3,4,5];
let newNumbers= numbers.map(num => 
    num * 2
);
console.log(newNumbers);
*/



//filler
/*
let numbers =[1,2,3,4,5];
let newNumbers = numbers.filter(num => num % 2 ===0);
console.log(newNumbers);
*/

// find 
/*
let numbers =[1,2,3,4,5];
let newNumbers = numbers.find(num => num % 2 ===0);
console.log(newNumbers)
*/

//reduce()

let numbers =[1,2,3,4,5];
let sum = numbers.reduce((total, num) => total + num, 1);
console.log(sum);


//some()
/*
let numbers =[1,5,3,9,5];
let hasEven = numbers.some(num => num % 2===0);
console.log(hasEven)
*/

// every()
/*
let numbers =[1,2,3,9,5];
let hasEven = numbers.every(num => num % 2===0);
console.log(hasEven)
*/

// push
/*
let numbers =[1,2,3,9,5];
numbers.push(7,8);
console.log(numbers)
*/

// shift
/*
let numbers =[1,2,3,9,5];
let firstNumber = numbers.shift();
console.log(firstNumber)
*/ 

// sort 
/*
mac dinh : a la so dung truoc, b la so dung sau 
Tang dan dung: sort((a,b) => a-b)
- a-b = negative => a < b -> a dung truoc b 
- a-b = positive => a> b -> b dung truoc a 

Giam dan dung: sort((a,b) => b-a)
- b-a = negative => b < a -> a dung truoc b 
- b-a = positive => b > a -> b dung truoc a 
*/
/*
let numbers =[1,2,3,9,5];
numbers.sort();
numbers.sort((a,b) => b-a);
console.log(numbers);
*/ 
