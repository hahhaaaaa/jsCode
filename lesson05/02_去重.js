let arr = [1, 21, 5, 18, 5, 10, 18, 18, 18, 5, 1, 21];

// let newArr = [];
// for (let item of arr) {
//     if (!newArr.includes(item)) {
//         newArr.push(item);
//     }
// }
// console.log(newArr);

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             arr.splice(j, 1);
//             j--;
//         }
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//         arr.splice(i, 1);
//         i--;
//     }
// }

let newArr = arr.filter(function (item, index) { 
    return arr.indexOf(item) == index;
})

console.log(newArr);
