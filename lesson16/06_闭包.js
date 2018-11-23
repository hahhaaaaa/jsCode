// var a = 2;
function outer() {
    var a = 1;
    function inner() {
        console.log(a);
    }
    return inner;
}

let inner = outer();
inner();

// 1. 全局EC、VO
// VO = {
//     outer: 地址
//     inner: inner地址
// }

// 2. outerEC、VO、SC
// outerVO = {
//     inner: 地址,
//     a: 1
// }
// 3. outerEC 销毁

// 4. innerEC、VO SC
// innerVO = {}
// innerSC = [innerVO, outerVO, 全局VO]

// function foo() {
//     var a = 1;
// }

// function bar() {
//     console.log(a);
// }




