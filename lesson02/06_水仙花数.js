const rs = require("readline-sync");

console.log("请输入一个三位数：");
let num = rs.question() - 0;   // 123

let g = num % 10;   // 个位
let s = parseInt(num % 100 / 10);  // 十位
let b = parseInt(num / 100);   // 百位

if (g ** 3 + s ** 3 + b ** 3 === num) {
    console.log(`${num}是水仙花数。`)
} else {
    console.log(`${num}不是水仙花数。`)
}