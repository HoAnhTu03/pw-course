// Cach 1: hau to 
//const nameStudent1 ="student 1";
//const cityStudent1 = "HCM";

//const nameStudent2 = "student 2";
//const cityStudent2 = "HN";

// Cach 2: object 
//const student 1 ={
  //  name: "Student 1", 
    //city: "HCM"
//}
//camelCase
//const student 2 ={
  //  name: "Student 2", 
    //city: "HN"
//}

// Cach 3: Class => Dung template : 
// pascalCase -> Class
class Student {
    // thuoc tinh chung 
    name: string;
    city: string;
    //email: "";
    //phoneNumber: "";

    // ham khoi tao 
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }

    // method 
    sayMyname(){
        console.log(`My name is ${this.name}`);
    }
    saySomeThing(message : string){
        console.log(`${this.name} says: ${message}`);
    }
}
let student1 = new Student("Student 1","HCM"); 
console.log(student1);
student1.sayMyname();
student1.saySomeThing("Hello")
