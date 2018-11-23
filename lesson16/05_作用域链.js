// var a = 1;
// function foo() {
//     console.log(a);
// }
// function bar() {
//     var a = 2;
// }
// foo();
// // 1. 
// // 全局VO = {
// //     foo: 地址,
// //     a: 1
// // }

// // 2. fooEC
// fooVO = {};
// fooSC = [fooVO, 全局VO];


var food = "屎味的巧克力";



// (function () {
//     var food = "巧克力味的屎";
//     function eat() {
//         console.log("吃" + food);
//     }
//     eat();
// })();

// 立即执行函数（IIFE）

// 全局VO = {
//     eat: 地址,
//     food: "屎味的巧克力"
// }

// IIFEVO = {
//     food: "巧克力味的屎"
// }

// eat()
// eatSC = [eatVO, 全局VO];

function add(min, max) {
    if (min == max) {
        return max;
    }
    return min + add(min + 1, max);
}

console.log(add(1, 3));

// add(1,3)
// addVO = {
//     arguments: {min: 1, max: 3}
// }

// add(2,3)
// addVO = {
//     arguments: {min: 2, max: 3}
// }

// add(3,3)
// addVO = {
//     arguments: {min: 3, max: 3}
// }