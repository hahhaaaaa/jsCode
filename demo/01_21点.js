const rs = require("readline-sync");

main();

function main() {
    console.log("欢迎进入21点游戏");
    while (true) {
        console.log("请选择游戏模式：1.单人模式 2.双人模式 3.退出");
        let option = rs.question() - 0;
        switch (option) {
            case 1: {
                singleMode();
                break;
            }
            case 2: {
                doubleMode();
                break;
            }
            case 3: {
                console.log("再见！");
                return;
            }
        }
    }
}

function singleMode() {
    let computerRandom = random(15, 21);
    console.log(`当前系统抽中点数为：${computerRandom}`);

    let userTotal = 0;   // 玩家总点数

    while (true) {
        console.log("玩家是否选择抽数：y/n");
        let option = rs.question();
        switch (option) {
            case 'y':
            case 'Y': {
                let userRandom = random(1, 10);
                userTotal += userRandom;
                console.log(`当前玩家抽中点数为：${userRandom}`);
                console.log(`当前总点数为：${userTotal}`);
                if (userTotal > 21) {
                    console.log("你爆炸了！！！");
                    console.log("这一局电脑获胜。");
                    return;
                }
                break;
            }
            case 'n':
            case 'N': {
                if (computerRandom > userTotal) {
                    console.log("这一局电脑获胜。");
                } else if (computerRandom < userTotal) {
                    console.log("这一局玩家获胜。");
                } else {
                    console.log("这一局平局。");
                }
                return;
            }
        }
    }
}

function doubleMode() {
    let user1Total = 0;
    while (true) {
        console.log("玩家一是否选择抽数：y/n");
        let option = rs.question();
        switch (option) {
            case 'y':
            case 'Y': {
                let userRandom = random(1, 10);
                user1Total += userRandom;
                console.log(`玩家一抽中点数为：${userRandom}`);
                console.log(`当前总点数为：${user1Total}`);
                if (user1Total > 21) {
                    console.log("你爆炸了！！！");
                    console.log("这一局玩家二获胜。");
                    return;
                }
                break;
            }
            case 'n':
            case 'N': {
                userGetPoint(user1Total);
                return;
            }
        }
    }
}
// 玩家二抽数
function userGetPoint(user1Total) {
    let user2Total = 0;

    while (true) {
        console.log("玩家二是否选择抽数：y/n");
        let option = rs.question();
        switch (option) {
            case 'y':
            case 'Y': {
                let userRandom = random(1, 10);
                user2Total += userRandom;
                console.log(`玩家二抽中点数为：${userRandom}`);
                console.log(`当前总点数为：${user2Total}`);
                if (user2Total > 21) {
                    console.log("你爆炸了！！！");
                    console.log("这一局玩家一获胜。");
                    return;
                }
                break;
            }
            case 'n':
            case 'N': {
                if (user2Total > user1Total) {
                    console.log("这一局玩家二获胜。")
                } else if (user2Total < user1Total) {
                    console.log("这一局玩家一获胜。")
                } else {
                    console.log("这一局平局。");
                }
                return;
            }
        }
    }
}


function random(min, max = 0) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return parseInt(Math.random() * (max - min + 1) + min);
}