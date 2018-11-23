class Atm {
    constructor() {
        this.users = [];
        this.loginUser = null;
    }
    login() {
        let chance = 3;
        while (chance > 0) {
            let username = prompt("请输入账号：");
            let password = prompt("请输入密码");
            for (let item of this.users) {
                if (item.username == username && item.password == password) {
                    alert("登录成功！");
                    this.loginUser = item;
                    this.operate();
                    return;
                }
            }
            chance--;
            if (chance == 0) {
                alert("登录失败！再见！");
            } else {
                alert(`账号或密码错误，你还有${chance}次机会，请重新登录。`);
            }
        }
    }
    register() {
        while (true) {
            let username = prompt("请输入注册账号：");
            if (this.users.some(item => item.username == username)) {
                alert("该账号已存在，请重新输入。");
            } else {
                let password = prompt("请输入注册密码：");
                let u = new User(username, password);
                this.users.push(u);
                alert("注册成功！");
                this.login();
                return;
            }
        }
    }
    // 系统操作菜单
    operate() {
        while (true) {
            let option = prompt("请选择业务：1.存款 2.取款 3.查询 4.退出") - 0;
            switch (option) {
                case 1: this.loginUser.saveMoney(); break;
                case 2: this.loginUser.getMoney(); break;
                case 3: alert(`当前账户余额为${this.loginUser.money}。`);break;
                case 4: return;
            }
        }
    }
}

new Atm().register();