// 函数高级
// 1. 执行上下文
// 2. 变量对象
// 3. 作用域链

// 4. 闭包
// 5. 递归函数、回调函数

// 面向对象
// HTML5
// 异步编程


// function foo() {
//     foo();
// }
// foo();
// let arr = [1,2,3];
// arr.sort(() => {});


// setInterval(() => {
//     console.log(2);
// }, 0);

// console.log(1);

let arr = [1, 2, 3, "hello", [4, 5, 6, [7, 8, 9], 10, 11], [12, 13], 14, 15];

function getItem(array) {
    for (let item of array) {
        if (Array.isArray(item)) {
            getItem(item);
        } else {
            console.log(item);
        }
    }
}

getItem(arr);