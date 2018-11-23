const rs = require("readline-sync");

let username1 = "zhangsan";
let password1 = "123";
let username2 = "lisi";
let password2 = "000";


console.log("请输入账号：");
let inputUsername = rs.question();
console.log("请输入密码：");
let inputPassword = rs.question();

if (inputUsername === username1 && inputPassword === password1) {
    console.log("登录成功");
} else if (inputUsername === username2 && inputPassword === password2) {
    console.log("登录成功");
} else {
    console.log("登录失败");
}