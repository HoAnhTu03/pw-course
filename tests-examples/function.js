function helloWorld() {
    console.log("Hello WORLD")
}
helloWorld();

function printStundentName(studentName) {
    console.log(`Ten hoc vien: ${studentName}`)
}
printStundentName("Anh Tu")

function calculate(a, b) {
    const sum = a + b;
    return sum;
}
const total = calculate(5, 6);
console.log(total);
let studentArr = ["MAI", "HOA", "LAM", "ANH", { student: { age: 15 } }];
function printArr(studentArr) {
    for (let i = 0; i < studentArr.length; i++) {
        console.log(studentArr[i]);
    }
}
printArr(studentArr);