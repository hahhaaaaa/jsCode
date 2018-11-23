// 变量对象（variable object :VO）

// 定义：记录（保存）在当前作用域中可以访问到的变量（变量、参数、函数）

// 变量对象的产生时间：执行上下文在创建时，其内部的“变量对象”也会同时创建。

// 变量对象的创建过程：
// 1. 找到当前上下文中的所有参数
// 2. 找到当前上下文中所有的声明式函数
// 3. 找到当前上下文中所有 var 声明的变量，默认赋值为undefined


// function foo(a, b) {
//     function bar() {}
//     var c = 3;
// }
// foo(1, 2);


// fooVo = {
//     arguments: { a: 1, b: 2 },
//     bar: bar 函数地址,
//     c: undefined
// }


// function outer() {
//     console.log(a);  // undefined
//     console.log(inner());  // 2
//     var a = 1;
//     function inner() {
//         return 2;
//     }
//     console.log(a);  // 1
// }
// outer();

// 1. 全局上下文创建，同时全局的变量对象也会创建
// 全局VO = {
//     outer: outer 函数地址
// }
// 2. outer 上下文创建，同时outer的变量对象创建
// outerVO = {
//     inner: inner地址,
//     a: 1
// }
// 3. inner 上下文创建，同时inner的变量对象创建
// innerVO = {}
// 4. inner 上下文销毁
// 5. outer 上下文销毁


// var a = 1;
// function b() {
//     console.log(a);  // undefined
//     a = 2;
//     console.log(a);  // 2
//     var a = 3;
//     console.log(a);  // 3
// }
// console.log(a);  // 1
// b();
// console.log(a);  // 1

// 1. 全局 EC、全局 VO 创建
// 全局VO = {
//     b: b地址,
//     a: 1
// }

// 2. bEC、bVO 创建
// bVO = {
//     a: 3
// }

// 3. b整个销毁


// var a = 1;
// function b() {
//     a = 10;
//     return;
//     function a() {};
// }
// b();
// console.log(a);

// 1. 全局EC、VO创建
// 全局VO = {
//     b: b地址
//     a: 1
// } 
// 2. bEC、bVO 创建
// bVO = {
//     a: 10
// }
// 3. b整个销毁

// function foo(a) {
//     bar(--a);
//     console.log(a);
// }

// function bar(a) {
//     console.log(a);
// }

// foo(100);

// 1. 全局
// 2. fooEC、VO
// fooVO = {
//     arguments: { a: 99 }
// }
// 3. barEC VO
// barVO = {
//     arguments: { a: 99 }
// }

// function foo(a) {
//     if (a > 3) {
//         foo(--a);
//     }
//     console.log(a);
// }

// foo(5);

// foo(5):foo EC VO
// fooVO = {
//     arguments: { a: 4 }
// }

// foo(4):foo EC VO
// fooVO = {
//     arguments: {a: 3}
// }


// foo(3):fooEC VO

// fooVO = {
//     arguments: {a: 3}
// }

// 3  3  4
