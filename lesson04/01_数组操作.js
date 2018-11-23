const rs = require("readline-sync");

let arr = [10, 12, 5, 9, 1, 4, 20, 0];
console.log("当前数组为：", arr);

let flag = true;
while (flag) {
    console.log("请选择操作：1.最大值 2.最小值 3.平均值 4.求和 5.退出");
    const option = rs.question() - 0;
    switch (option) {
        case 1: {
            let max = arr[0];   // 假设数组中的第0个元素是最大
            for (let i = 1; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
            }
            console.log("数组中最大值为", max);
            break;
        }
        case 2: {
            let min = arr[0];   // 假设数组中的第0个元素是最小
            for (let i = 1; i < arr.length; i++) {
                if (min > arr[i]) {
                    min = arr[i];
                }
            }
            console.log("数组中最小值为", min);
            break;
        }
        case 3: {
            let sum = 0;
            for (let item of arr) {
                sum += item;
            }
            console.log("数组的平均值为", sum / arr.length);
            break;
        }
        case 4: {
            let sum = 0;
            for (let item of arr) {
                sum += item;
            }
            console.log("数组的和为", sum);
            break;
        }
        case 5: console.log("谢谢使用，再见！"); flag = false; break;
    }
}