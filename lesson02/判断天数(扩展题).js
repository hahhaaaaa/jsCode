/**
 * 输入年月日，判断当前日期是当前年份中的第几天。
 */
const readline = require('readline-sync');
console.log('请输入年份：');
let year = parseInt(readline.question(''));
console.log('请输入月份：');
let month = parseInt(readline.question(''));
console.log('请输入日期：');
let date = parseInt(readline.question(''));
let days = 0;
switch (month - 1) {
    case 11:
        days += 30;
    case 10:
        days += 31;
    case 9:
        days += 30;
    case 8:
        days += 31;
    case 7:
        days += 31;
    case 6:
        days += 30;
    case 5:
        days += 31;
    case 4:
        days += 30;
    case 3:
        days += 31;
    case 2:
        {
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                days += 29;
            } else {
                days += 28;
            }
        }
    case 1:
        days += 31;
}
days += date;
console.log(`${year}年${month}月${date}日是${year}年的第${days}天`);