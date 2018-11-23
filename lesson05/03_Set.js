let s = new Set([1, 2, 3, 3, "hello", true]);

console.log(s.size);

// 增加
s.add("zhangsan").add(1000).add("abc");
// 删除
s.delete(3);
// 查看有没有
console.log(s.has(1));
// 清空
s.clear();
console.log(s);

数组去重
let arr = [1, 21, 5, 18, 5, 10, 18, 18, 18, 5, 1, 21];
let newArr = [...new Set(arr)];
console.log(newArr);

console.log([...s]);

遍历
for(let item of s) {
    console.log(item);
}
