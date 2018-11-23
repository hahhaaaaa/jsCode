// 1. 创建变量
// ES5 (赋值)
// var phone;
// // ES6
// let num;

// phone = 12312312311;
// num = 100;
// phone = 110;

// console.log(phone, num);

// 2. var 和 let 的区别
// 1）作用域不同：let 通过大括号进行作用域的划分，var 是通过函数进行作用域的划分
// 2) 是否允许重复声明（创建）：var 允许重复声明，let 不允许重复（针对同一个作用范围）
// 3）是否变量提升：var 会发生变量提升，let 不会。

// 变量提升：
// 代码在正式执行之前，会先进行解析。
// 解析过程中，找到所有 var 声明的变量，并将变量的声明提升到代码的头部，赋值留在原位置。



// var a;
// console.log(a);
// a = 10;

// let a = 1;
// {
//     let a = 2;
//     console.log(a);
// }
// console.log(a);


// function foo() {
//     var a = 1;
// }

// console.log(a);

// ES6 常量
const username = "张三";
username = "李四";

// const rs = require("readline-sync");
