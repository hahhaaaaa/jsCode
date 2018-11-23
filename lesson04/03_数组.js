// let arr1 = ["1", 100, true, undefined];
// let arr2 = new Array(10, false);

// console.log(arr1[1]);
// arr1[4] = "hello";
// arr1[3] = 123;
// delete arr1[0];

// for(let i = 0; i < arr1.length; i++) {
//     console.log(arr[i]);
// }

// for(let item of arr1) {
//     console.log(item);
// }


// let arr = ["zhangsan", "123", 1000];

// let len = arr.push("zhangsan", "123", 1000, ["lisi", "100"]);
// let del = arr.pop();

// len = arr.unshift("abc", 0);
// del = arr.shift();

// arr.splice(1, 0, "lisi", "123123");

// console.log(arr);

// let arr = [1, 2, 3, 20, 21, 17, 51, 16];
// let newArr = arr.sort(function (a, b) { return b - a; });   // !!!!!!!!!!!!!!!
// console.log(newArr)

// console.log(arr.join(""));     !!!!!!!!!!!

// let arr1 = ["a", "b", "c"];
// console.log(arr.indexOf("zhangsan1"));      !!!!!!!!!
// console.log(arr.lastIndexOf("zhangsan1"));
// console.log(arr.includes("zhangsan1"));

// let newArr = arr.slice(1, 3);
// console.log(newArr);
// let newArr = arr.concat(arr1, [1, 2, 3]);
// console.log(newArr);
// console.log(arr.reverse());

// forEach()
// arr.forEach(function(item, index){
//     console.log(item, index);
// });
// map()：对数组中每一个元素执行某一个相同的操作，并将操作后的结果组成新数组返回。
// let newArr = arr.map(function (item, index) {
//     return item + "hello";
// });
// filter()：用于对原数组中的数据进行筛选，将满足条件的新数据组成新数组并返回。
// let newArr = arr.filter(function (item, index) {
//     return item % 2 != 0;
// })

// every()：对数组中每一个元素进行判断，只要有一个元素不满足条件，则直接返回 false。
// let result = arr.every(function (item, index) {
//     return item % 2 == 0;
// })
// some()：对数组中每一个元素进行判断，只要有一个元素满足条件，则直接返回 true
// let result = arr.some(function (item, index) {
//     return item % 2 == 0;
// })
// let arr = [2, 4, 6, 81];

// reduce();
// 求和
// let sum = arr.reduce(function(prev, next){
//     return prev + next;
// })
// 求最大值
// let max = arr.reduce(function (prev, next) {
//     // if (prev > next) {
//     //     return prev;
//     // } else {
//     //     return next;
//     // }
//     return prev > next ? prev : next;
// })

// console.log(max);

// 判断条件 ? 条件成立时执行 : 条件不成立时执行





