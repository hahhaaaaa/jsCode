const rs = require("readline-sync");

console.log("请输入第一个数：");
let x = rs.question() - 0;
console.log("请输入第二个数：");
let y = rs.question() - 0;
console.log("请输入第三个数：");
let z = rs.question() - 0;

let temp;

if (x < y) {
    temp = x;
    x = y;
    y = temp;
}

if (x < z) {
    temp = x;
    x = z;
    z = temp;
}

if (y < z) {
    temp = y;
    y = z;
    z = temp;
}

console.log("从大到小的顺序为：", x, y, z);




