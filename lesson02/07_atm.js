const rs = require("readline-sync");

let money = 1000;

console.log("请选择业务：1.存款 2.取款 3.查询 4.退出");
let option = rs.question() - 0;
switch (option) {
    case 1: {
        console.log("请输入存款金额：");
        let saveMoney = rs.question() - 0;
        money += saveMoney;
        console.log(`存款金额为${saveMoney}，当前账户余额为${money}。`);
        break;
    }
    case 2: {
        console.log("请输入取款金额：");
        let getMoney = rs.question() - 0;
        if (getMoney > money) {
            console.log("余额不足，请重新输入。");
        } else {
            money -= getMoney;
            console.log(`取款金额为${getMoney}，当前账户余额为${money}。`);
        }
        break;
    }
    case 3: {
        console.log(`当前账户余额为${money}。`);
        break;
    }
    case 4: {
        console.log("谢谢使用，再见！");
        break;
    }
}