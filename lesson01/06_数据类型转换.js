// 显示转换（强制转换）
// 1. 强制转换为 number 类型
// let num = "123px";

// let num1 = parseInt(num);  // 强制转换为整数
// console.log(num1);  // 123

// let num2 = parseFloat(num);  // 强制转换为小数（浮点数）
// console.log(num2);  // 123

// let num3 = Number(num);
// console.log(num3);  // NaN
// 1. 转字符串
// 2. 转布尔值 true 1 ，false 0
// 3. null：0
// 4. undefined：NaN
// 5. "": 0



// 2.强制装换为 string 类型
// let num = 123;
// console.log(num);
// let num1 = String(num);
// console.log(num1);

// let num2 = num.toString();
// console.log(num2);

// 3. 强制转换为 boolean 类型
// let num = NaN;
// let num1 = Boolean(num);
// console.log(num1);
// 0 "" undefined null NaN false

// 隐式转换（自动转换）
// 1.自动转换为 number 类型
// 1）进行数学运算
// let num = true; 
// let str = 1;
// Number(true);
// console.log(num + str);
// 2) 进行大小比较
// console.log(num == str);
// 3) isNaN()：是不是非数字
// let num = "10avb";
// console.log(isNaN(num));

// let num = "100" - 0;

// 2. 自动转换为 string 类型

// let num = 10;
// let str = "10";
// console.log(num + str);
// console.log("" + 1 + 2 + 3 * 3);
// let num = 10 + "";

// 3. 自动转换 boolean 类型
// console.log(1 || 2 || 3 || 4 || 5);
// console.log(1 && 2 && "" && 4 && 5);

// console.log

// let a = true;
// console.log(a && b);

// let num = true;
// console.log(typeof num);


