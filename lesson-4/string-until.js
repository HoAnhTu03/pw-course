// trim() cat bo khoang trang text 
let str = "         HO ANH TU "
str = str.trim()
console.log(str)

// toLowerCase() va toUpperCase() convert chu hoa/chu thuong
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// includes() co chua ky tu trong bien ko?
console.log(str.includes("NANANAA"));
console.log(str.includes("TU"));

// replace()
str=str.replace("Tu Anh Ho","LALA");
console.log(str)

// split()
console.log(str.split(" "));
const email = "emailA@gmail.com, emailB@gmail.com";
console.log(email.split("."));

//substring()
let str1 = "Hello World";
console.log(str1.substring(0,5));

//indexOf()
console.log(str1.indexOf("Worldm"))