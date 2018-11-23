class Computer {
    constructor() {
        this.name = "电脑";
        this.totalPoint = 0;  // 总点数
        this.win = 0;   // 电脑赢的次数
    }
    getPoint() {
        this.totalPoint = random(15, 21);
    }
}