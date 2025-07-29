/*
for (var i =0; i<5; i++){
    console.log(i);
}
console.log(i);
*/

/*
if (condition){
    run code when condition = true}
else {
    run code when condition = false}
}

/*
if(condition1){
    run code when condition = true
} else if(conditon2){
    run code when condition2 = true}
} else {
    run code when all condition = false}
*/
let diem = 9;
if (diem >= 8) {
    console.log("Hoc sinh gioi")
} else if (diem >= 5) {
    console.log("Hoc sinh kha")
} else {
    console.log("Hoc sinh trung binh")
}

/*
switch (bieu_thuc){
    case value_1
        // run code
        break;
    case value 2
        // run code
        break;    
    case value 3
        // run code
            break;
    default;
        // run code default
}
*/
let ngay = 27;
switch (ngay) {
    case 26:
        console.log("Thu 6");
        break;
    case 27:
        console.log("Thu 7");
        break;
    case 28:
        console.log("Chu nhat");
        break;
    default:
        console.log("Loi ngay ko hop le")

}

//for in
/* 
let product = {
    Apple: 24,
    Orange: 12,
    Meow: 15
}
for ( let property in product){
    console.log(property);
    console.log(product[property])
}
const array = ["j97","j98","j99"]
for (let i in array){
    console.log(i);
    console.log(array[i])

}
*/

// for each 
/*
array.forEach(value, index){
}
*/
const array = ["j97", "j98", "j99"]
array.forEach((value, index) => {
    console.log(`${index}: ${value}`);
})

// for .. of -> dung cho arrray 
const arr = ["A", "b", "c"];
for (let value of arr) {
    console.log(value);
}

// continue 
/*
- bo qua vong lap, chay vong lap tiep theo
- neu gap continue thi bo qua code phia duoi, chay tiep vong lap tiep theo 
*/
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        break;
    }
    console.log(i);
} 

// break 
/*
- gap break -> thoat ra khoi vong lap 

*/