// 执行上下文分类：
// 1. 全局上下文：代码的默认运行环境，当js一旦开始加载，全局上下文就产生了。
// 2. 局部上下文：函数内部代码的运行环境，当一个函数被调用时，局部上下文就产生了。
// 3. eval()上下文

// function fn1() { };
// function fn2() { };
// function fn3() { };

// fn1();
// fn2();
// fn3();

// 执行上下文的生命周期：
// 1. 执行上下文的创建阶段
// 2. 代码执行阶段（当前上下文中的代码）
// 3. 执行上下文的销毁阶段


// function outer() {
//     console.log("outer");
    
//     function inner() {
//         console.log("inner");
//     }

//     inner();
// }

// outer();

// 1. 全局上下文创建
// 2. outer 上下文创建
// 3. inner 上下文创建
// 4. inner 上下文销毁
// 5. outer 上下文销毁


function outer() {
    console.log("outer");

    function inner() {
        console.log("inner");
    }
    return inner;
}

let inner = outer();
inner();

// 1. 全局上下文创建
// 2. outer 上下文创建
// 3. outer 上下文销毁
// 4. inner 上下文创建
// 5. inner 上下文销毁