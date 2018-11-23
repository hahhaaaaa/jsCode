const rs = require("readline-sync");

let users = [
    ["zhangsan", "123"],
    ["lisi", "000"],
    ["1", "1"]
];

let chance = 3;
while (chance > 0) {
    console.log("请输入账号：");
    let username = rs.question();
    console.log("请输入密码：");
    let password = rs.question();
    let isLogin = false;   // 默认登录状态为 false，表示未登录
    for (let i = 0; i < users.length; i++) {
        if (username == users[i][0] && password == users[i][1]) {
            console.log("登录成功");
            isLogin = true;
            chance = 0;   // 结束 while 循环
            break;   // 结束 for 循环
        }
    }
    if (!isLogin) {
        chance--;
        if (chance == 0) {
            console.log("登录失败！再见！");
        } else {
            console.log(`账号或密码错误，你还有${chance}次机会，请重新输入。`);
        }
    }
}

