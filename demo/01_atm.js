const rs = require("readline-sync");

let username = "zhangsan", password = "123", money = 1000;

let chance = 3;   // 登录错误的机会
while (chance > 0) {
    console.log("请输入账号：");
    let inputUsername = rs.question();
    console.log("请输入密码：");
    let inputPassword = rs.question();

    if (inputUsername === username && inputPassword === password) {
        console.log("登录成功！");
        let flag = true;
        while (flag) {
            console.log("请选择业务：1.存款 2.取款 3.查询 4.退出");
            let option = rs.question() - 0;
            switch (option) {
                case 1: {
                    while (true) {
                        console.log("请输入存款金额：");
                        let saveMoney = rs.question() - 0;
                        money += saveMoney;
                        console.log(`存款金额为${saveMoney}，当前账户余额为${money}。`);
                        console.log("继续存款请按1，返回主菜单请按2。");
                        let isContinue = rs.question() - 0;
                        if (isContinue === 2) {
                            break;   // 结束存款的循环
                        }
                    }
                    break;  // 结束 switch
                }
                case 2: {
                    while (true) {
                        console.log("请输入取款金额：");
                        let getMoney = rs.question() - 0;
                        money -= getMoney;
                        console.log(`取款金额为${getMoney}，当前账户余额为${money}。`);
                        console.log("继续取款请按1，返回主菜单请按2。");
                        let isContinue = rs.question() - 0;
                        if (isContinue === 2) {
                            break;   // 结束取款的循环
                        }
                    }
                    break;  // 结束 switch
                }
                case 3:{
                    console.log(`当前账户余额为${money}。`);
                    break;    // 结束 switch
                }
                case 4: {
                    console.log("谢谢使用，再见！");
                    flag = false;
                    break;   // 结束 switch
                }
            }
        }
        break;   // 结束最外层登录的循环
    } else {
        chance--;
        if (chance === 0) {
            console.log("登录失败，再见！");
        } else {
            console.log(`账号或密码错误，你还有${chance}次机会，请重新登录。`);
        }
    }
}
