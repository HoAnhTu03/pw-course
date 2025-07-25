//1
let tong = 0;
for (i = 1; i <= 100; i++) {
    tong += i;
}
console.log(tong);
//2
for (let i = 2; i <= 9; i++) {
    console.log(` Bảng ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

}
//3
let sole = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        sole.push(i);
    }
}
console.log(sole)
//4 
let mail = "@gmail.com";
let ten = "anhtu";
for (i = 1; i <= 10; i++) {
    console.log(`${ten}${i}${mail} `)

}
//5 
let DoanhThu = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 110 },
    { "month": 3, "total": 120 },
    { "month": 4, "total": 130 },
    { "month": 5, "total": 140 },
    { "month": 6, "total": 150 },
    { "month": 7, "total": 160 },
    { "month": 8, "total": 170 },
    { "month": 9, "total": 180 },
    { "month": 10, "total": 190 },
    { "month": 11, "total": 200 },
    { "month": 12, "total": 210 }
];
let tongdoanhthu = 0;
for (let i = 0; i < DoanhThu.length; i++) {
    tongdoanhthu += DoanhThu[i].total;
}
console.log(tongdoanhthu)
