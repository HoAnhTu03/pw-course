// // Cach 1: hau to 
// const nameStudent1 = "student 1";
// const cityStudent1 = "HCM";

// const nameStudent2 = "student 2";
// const cityStudent2 = "HN";

// // Cach 2: object
// const student1 = {
//     name: "student 1",
//     city: "HCM"
// }
// // camelCase
// const student2 = {
//     name: "student 2",
//     city: "HN"
// }

// Cach 3: Class -> Dung template
// PascalCase -> Class
class Student {
    // thuoc tinh chung
    name: string;
    city: string;
    email: string = "";
    phoneNumber: string = "";

    // ham khoi tao
    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    }

    // method
    sayMyName() {
        console.log(`My name is ${this.name}`);
    }

    saySomething(message?: string) {
        if (message) {
            console.log(`${this.name} says: ${message}`);
        } else {
            console.log(`Nothing`);
        }
    }
}

let student1 = new Student("Student 1", "HCM");
let student2 = new Student("Student 2", "HN");

console.log(student1);
student1.sayMyName();

// student2.sayMyName()
// student1.saySomething("Hello");
// student1.saySomething();
