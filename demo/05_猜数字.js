const rs = require("readline-sync");

main();
// 游戏流程
function main() {
    let chance = 10;
    let system = systemRandom();
    console.log(system);
    while (true) {
        console.log("请输入四个不重复的数字：");
        let num = rs.question();
        let isOK = userRandom(num);
        if(isOK) {
            let a = isMatch(system, num);
            if(a !== 4) {
                chance--;
                if(chance == 0) {
                    console.log(`你的机会已用完，正确答案为${system}。`);
                    break;
                }
                console.log(`你还有${chance}次机会。`);
            } else {
                console.log("恭喜你，猜对了！");
                break;
            }
        }
    }
}
// 生成系统随机四位数
function systemRandom() {
    let num = '';
    for (let i = 0; i < 4; i++) {
        let n = random(9);
        if (num.includes(n)) {
            i--;
        } else {
            num += n;
        }
    }
    return num;
}

// 判断用户输入是否合法
function userRandom(num) {
    if (isNaN(num)) {
        console.log("你输入包含非数字，请重新输入。");
    } else if (num.length !== 4) {
        console.log("你输入不是四位数，请重新输入。");
    } else if (isRepeat(num)) {
        console.log("你输入数字重复，请重新输入。");
    } else {
        return true;
    }
}

// 判断一个数是否重复
function isRepeat(num) {  // 1123
    for (let item of num) {
        if (num.indexOf(item) != num.lastIndexOf(item)) {
            return true;
        }
    }
    return false;  // 不重复
}
// 判断两个数的匹配结果
function isMatch(num1, num2) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            if (num1[i] == num2[j] && i == j) {
                a++;
            } else if (num1[i] == num2[j] && i != j) {
                b++;
            }
        }
    }
    console.log(`匹配结果：${a}A${b}B`);
    return a;
}




function random(min, max = 0) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return parseInt(Math.random() * (max - min + 1) + min);
}