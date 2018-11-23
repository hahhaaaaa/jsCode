const rs = require("readline-sync");

let username = "zhangsan";
let password = "123";

let flag = true;
while (flag) {
    console.log("请输入账号：");
    let inputUsername = rs.question();
    console.log("请输入密码：");
    let inputPassword = rs.question();
    if (inputUsername === username && inputPassword === password) {
        console.log("登录成功");
        flag = false;
    } else {
        console.log("登录失败");
    }
}