const rs = require("readline-sync");

console.log("请输入一个年份：");
let year = rs.question();

// if (year % 4 === 0 && year % 100 !== 0) {
//     console.log(year + "是闰年");
// } else if (year % 400 === 0) {
//     console.log(year + "是闰年");
// } else {
//     console.log(year + "不是闰年");
// }

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + "是闰年");
} else {
    console.log(year + "不是闰年");
}