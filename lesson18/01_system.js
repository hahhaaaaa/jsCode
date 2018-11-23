class System {
    constructor() {
        this.player1 = null;
        this.player2 = null;
    }
    main() {
        alert("欢迎进入游戏！");
        while (true) {
            let option = prompt("你选择游戏模式：1.单人模式 2.双人模式 3.退出") - 0;
            switch (option) {
                case 1: this.singleMode(); break;
                case 2: this.doubleMode(); break;
                case 3: return;
            }
        }
    }
    singleMode() {
        this.player1 = new Computer();  // 电脑实例对象
        let username = prompt("请输入玩家姓名：");
        this.player2 = new Player(username);

        while (true) {   // 控制每一轮的游戏
            this.player1.totalPoint = 0;
            this.player2.totalPoint = 0;

            this.player1.getPoint();
            alert(`电脑抽中的总点数为：${this.player1.totalPoint}。`);
            this.getPointProcess(this.player2);
            this.judgement();
            let option = prompt("是否继续下一轮游戏：y/n");
            if (option == 'n' || option == 'N') {
                return;
            }
        }
    }
    doubleMode() {
        let username1 = prompt("请输入玩家一姓名：");
        this.player1 = new Player(username1);
        let username2 = prompt("请输入玩家二姓名：");
        this.player2 = new Player(username2);

        while (true) {
            this.player1.totalPoint = 0;
            this.player2.totalPoint = 0;

            this.getPointProcess(this.player1);
            if (this.player1.totalPoint >= 0) {
                this.getPointProcess(this.player2);
            }
            this.judgement();
            let option = prompt("是否继续下一轮游戏：y/n");
            if (option == 'n' || option == 'N') {
                return;
            }
        }

    }
    getPointProcess(player) {  // 玩家抽数流程
        let flag = true;
        while (flag) {
            let option = prompt(`玩家${player.name}是否选择抽数：y/n`);
            switch (option) {
                case 'y':
                case 'Y': {
                    player.getPoint();
                    alert(`${player.name}当前抽中点数为：${player.point}。\n目前总点数为：${player.totalPoint}。`);
                    if (player.totalPoint > 21) {
                        player.totalPoint = -1;
                        alert('你爆炸了！');
                        flag = false;
                        this.judgement();
                    }
                    break;
                }
                case 'n':
                case 'N': {
                    flag = false;
                }
            }
        }
    }
    judgement() {
        if (this.player1.totalPoint > this.player2.totalPoint) {
            alert(`这一局${this.player1.name}胜利。`);
            this.player1.win++;
        } else if (this.player1.totalPoint < this.player2.totalPoint) {
            alert(`这一局${this.player2.name}胜利。`);
            this.player2.win++;
        } else {
            alert('这一局平局，不计入比分。');
        }
        alert(`当前游戏比分：\n${this.player1.name}：${this.player2.name} = ${this.player1.win}：${this.player2.win}。`);
    }
}

new System().main();

