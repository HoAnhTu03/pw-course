//1 
function multiply(a, b) {
    const phepnhan = a * b;
    console.log(`${a} * ${b} = ${phepnhan}`);
    return phepnhan;
}

multiply(2, 3);
multiply(4, 5);

//2
function findMin(a,b,c) {
    let min =a;
    if(b<min){
        min =b;
    }
    if(c<min){
        min =c;
    }
    
    console.log(`Số nhỏ nhất trong (${a}, ${b}, ${c}) là ${min}`);
    return min;
    
}
findMin(5,6,1);
findMin(2,3,4);

//3 
let students = [
  { name: "Anh Tu", score: 8 },
  { name: "Tu Anh", score: 9 }
];

let result = [];

function getTopStudents(students, threshold){
    for(let i =0; i< students.length; i++){
        const student = students[i];
        if(student.score >= threshold){
            result.push(student.name)   
        }
    }
    return result;
    
}
const TopStudents = getTopStudents(students,8);
console.log(`Top Student: ${TopStudents}` )