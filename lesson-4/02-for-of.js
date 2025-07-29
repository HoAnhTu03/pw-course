//1

const str = "Playwright";
for (let value of str) {
    console.log(value)
}
//2 
let reversed = ""
for (let i = str.length - 1; i > 0; i--) {
    reversed += str[i];
}
console.log(`Mảng đảo ngược có giá trị ${reversed}`);
//3
const arr = [1, 2, 3, 4, 3, 55, 23];
const firstIndex = arr.indexOf(3);
const lastIndex = arr.lastIndexOf(3);

console.log(firstIndex);
console.log(lastIndex)
//4 
const unique = arr.filter(item => {
   return arr.indexOf(item) === arr.lastIndexOf(item);
    
})
console.log(unique)
