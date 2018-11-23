// 创建正则表达式

// 1. 字面量
// let re = /规则/修饰符;
// 2. 构造函数
// let re = new RegExp('规则');

// let str = "hello";

// let re = /a/;
// console.log(re.test(str));

// 定义规则
// let re = /[^0-9a-z][123]/;

// console.log(re.test("z1.23"));
// [] ：分组，匹配中括号任意一个
// [0-9]:所有数字
// [a-z]:所有小写字母
// [A-Z]:所有大写字母
// [a-zA-Z]:所有字母
// [^]:除了中括号内的其他字符


// 简记
// \d: 等同于 [0-9]
// \D：等同于 [^0-9]

// \w：等同于 [a-zA-Z0-9_]
// \W：等同于 [^a-zA-Z0-9_]

// \s: 空格
// \S: 除了空格

// .: 匹配除了回车\r、换行\n以外的任意字符

// /[\d\D]/

// console.log(/\d/.test("abc1"));

// 量词
// let re = /\d{5}/;  5个
// let re = /\d{6,18}/;   6 到 18 个
// let re = /\d{6,}/;   6 到多个
// ？：等同于 {0,1}
// +：等同于 {1,}
// *: 等同于 {0,}


// ^：^a  以a开头
// $： b$  以b结尾  
// \转义符
// let re = /^(ab|cd)123$/;
// console.log(re.test("131111@qq.com"));

// let re = /abc/i;
// console.log(re.test("ABC"));

// let str = "Mr Blue has a blue house and a blue car";

// console.log(str.search(/blue/i));
// console.log(str.match(/blue/gi));
// console.log(str.replace(/blue/gi, 'red'));
// console.log(str);


// 1. 非负整数
// let re = /^$/;
// 2. 邮箱
// xxxx@xx.vip.com.cn
let re = /^\w+@\w+(\.\w+)+$/;

// console.log(re.test(""));


