// while
// do...while
// for

// while

// while (循环条件) {
//      满足循环条件执行的代码
// }

// let num = 5;

// while(num > 0) {
//     console.log(num);
//     num--;
// }

// do {

// } while(循环条件);

// let num = 5;

// do {
//     num--;
//     console.log(num);  

// } while (num > 0)

let num = 4;

while (true) {
    num--;
    if(num === 0){
        continue;
    }
    console.log(num);
}

// break 和 continue 都用于结束循环。break 直接终止整个循环，而 continue 终止本轮循环。
// 