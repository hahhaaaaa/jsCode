// 字符串拼接符：+
// let str1 = "hello";
// let str2 = "world";
// let str = str1 + str2;
// console.log(str);

// let username = "张三";
// let age = 20;
// let gender = "男";

// console.log("我的名字叫" + username + "，今年" + age + "岁，性别" + gender + "。");
// console.log(`我的名字叫${username}，年龄${age}，性别${gender}。`);

// 算术运算符：+ - * /    %(取模) ** ++ --


// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);  （ES6） // 求幂 
// --num1;
// console.log(num1);
// 前置型：先运算，再使用数据。
// 后置型：先使用数据，再运算。
// console.log(++num1);

// let a = 10;
// let b = a--;
// console.log(a);  // 10  9
// console.log(b);  // 10  10

// let x = 5;
// let y = x++ * x++;
// console.log(x);  // 7
// console.log(y);  // 30

// 比较运算符： >   <   >=   <=    ==   ===   !=   !==
// let num1 = 10;
// let num2 = "10";

// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// console.log(num1 == num2);  // 只比较值是否相等
// console.log(num1 === num2); // 比较值和数据类型是否都相等

// console.log(num1 != num2);  // 只比较值是否不相等
// console.log(num1 !== num2);    // 比较值或者数据类型是否不相等

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(NaN == NaN);

// 赋值运算符:  =   +=   -=   /=   *=    %=
// let a = 2 + 1;

// {
//     let a = b = c = 3;
// }

// {
//     c = 3;
//     b = c;
//     let a = b;
// }

// 当对一个未声明（没有创建）的变量进行赋值操作时，会默认将该变量创建在全局范围内。

// let n = 1;
// let s = 0;

// s = s - n;
// s -= n;

// 逻辑运算符：&&(与)  ||(或)  !(非)

// console.log(2 > 1 && 2 < 1);  // 一假全假
// console.log(2 > 1 || 2 < 1);  // 一真全真
// console.log(!(2 < 1));        // 取反


// let a = 10;
// 0 < a < 20
// a > 0 && a < 20


// let str = `asjdhasjdhasjk ${a = 1}`;
// let a = 1;
// a++;
// console.log(a);


