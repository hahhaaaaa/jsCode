class Player {
    constructor(username) {
        this.name = username;
        this.point = 0;  // 每一次抽到的点数
        this.totalPoint = 0;  // 总点数
        this.win = 0;   // 玩家赢的次数
    }
    getPoint() {
        this.point = random(1, 10);
        this.totalPoint += this.point;
    }
}