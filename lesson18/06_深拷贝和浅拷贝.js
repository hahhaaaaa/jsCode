// let arr = [1, 2, 3];
// let arr1 = [...arr];

// arr[0] = "a";

// console.log(arr, arr1);


let obj1 = {
    a: 1,
    b: 2,
    c: [4, 5]
}

let str = JSON.stringify(obj1);
let obj2 = JSON.parse(str);

obj1.c[0] = "a";
console.log(obj1, obj2);

// let obj2 = Object.assign({}, obj1);
// 
// console.log(obj1, obj2);

// div.style.color = "red";
// div.style.color = "red";
// div.style.color = "red";
// div.style.color = "red";
// div.style.color = "red";

// Object.assign(div.style, {
//     color:'red',
//     width: 100,
//     height: 100
// })