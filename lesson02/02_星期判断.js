const rs = require("readline-sync");

console.log("请输入1-7之间的任意数字：");
let week = rs.question() - 0;

// if (week >= 1 && week <= 7) {
//     if (week <= 5) {
//         console.log("工作日");
//     } else {
//         console.log("休息日");
//     }
// } else {
//     console.log("输入有误。");
// }
// switch (week) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("工作日");
//         break;
//     case 6:
//     case 7:
//         console.log("休息日");
//         break;
//     default:
//         console.log("输入有误");
// }


// switch (true) {
//     case week >= 1 && week <= 5:
//         console.log("工作日");
//         break;
//     case week >= 6 && week <= 7:
//         console.log("休息日");
//         break;
//     default:
//         console.log("输入有误");
// }
