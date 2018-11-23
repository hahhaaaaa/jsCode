class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.money = 0;
    }
    saveMoney() {
        let m = prompt("请输入存款金额：") - 0;
        this.money += m;
        alert(`存款金额为${m}，当前账户余额为${this.money}。`);
    }
    getMoney() {
        let m = prompt("请输入取款金额：") - 0;
        this.money -= m;
        alert(`取款金额为${m}，当前账户余额为${this.money}。`);
    }
}

