let arr = [1, 21, 100, 18, 5, 10, 18, 31, 0, 52];

// 从小到大

// 选择排序
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }
// }

// 冒泡排序
for (let j = 1; j < arr.length; j++) {   // 比较的轮数
    for (let i = 0; i < arr.length - j; i++) {  // 比较的次数
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }
}

console.log(arr);
