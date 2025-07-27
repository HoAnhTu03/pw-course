//1
let departurePlanet = "Trái Đất";
let mission = "Khám phá vũ trụ K16";
let crew = ["Sơn", "Yến", "Xuyến", "Minh Trang", "Tuấn Anh", "Việt Anh", "Thiên Trang", "Hân", "Hiền", "Huy", "Mai", "Phi", "Tiến", "Anh Tú"]
function listCrewName(crew) {
    let names = "";
    for (let i = 0; i < crew.length; i++) {
        names = names + crew[i];
        if (i < crew.length - 1) {
            names = names + ", ";
        }
    }
    return names;
}
function launchShip(crew) {
    let crewNames = listCrewName(crew);
    return "Chuẩn bị khởi động! Phi hành đoàn gồm " + crewNames + " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!"

}
let result = launchShip(crew);
console.log(result)

//2 

function calculateDistance(speed, time) {
    return speed * time;
}
let distance = calculateDistance(1000, 24);
console.log(`Khoảng cách di chuyển của tàu là: ${distance}km `)

//3

function convertTimeToHex(time) {
    return time.toString(16);
}
let callConvertTimeToHex = convertTimeToHex(120);
console.log(`Thời gian được đổi sang hệ lục phân là: ${callConvertTimeToHex} `)

//4

function decryptCode(code) {
    let result = "";
    for (let i = 0; i < code.length; i++) {
        let character = code[i];
        if (character === character.toLowerCase() && character !== character.toUpperCase()) {
            result += character.toUpperCase();
        }
        else if (character === character.toUpperCase() && character !== character.toLowerCase()) {
            result += character.toLowerCase();
        }
        else {
            result += character
        }
    }
    return result;
}
let callDecryptCode = decryptCode("K16 Challenge")
console.log(`Mật mã đã được giải mã là: ${callDecryptCode}`);

//5

function returnToEarth() {
    console.log("Chuẩn bị trở về trái đất !")
}
returnToEarth();
