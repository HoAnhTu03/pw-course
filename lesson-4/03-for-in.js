//1
const student = {
    "name": "Alex",
    "age": 10,
    "salary": 20
};
for (let property in student) {
    console.log(property);
    console.log(student[property])
}

//2 
let sum = 0;
for (let key in student) {
    if (typeof student[key] === 'number') {
        sum += student[key];
    }
}
console.log(`Tổng của giá trị số là ${sum}`)

//3
let nameArr = [];
for (let i in student) {
    console.log(i);
    nameArr.push(i)
}
console.log(nameArr)