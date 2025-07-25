//1 
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year);
//2
let person = {
    name: "Anh Tu",
    address: {
        street: "173/51 An Duong Vuong",
        city: "Tay Ho, Ha Noi",
        country: "Viet Nam"

    }
};
console.log(person.address.street)
//3
let student = {
    name: "Anh Tu",
    grades: {
        math: 6,
        english: 8
    }
};
console.log(student["grades"]["math"]);
//4 
let setting = {
    volume: "100%",
    brightness: "100%"
};
setting.volume = "85%";
console.log(setting)
//5 
let bike = {};
bike.color = "grey";
console.log(bike)
//6 
let employee = {
    name: "Anh Tu",
    age: 22
};
delete employee.age;
console.log(employee)
//7 
const school = {
    classA: ["An","Bình","Châu"],
    classB: ["Đào","Hương","Giang"]
};
console.log(school)