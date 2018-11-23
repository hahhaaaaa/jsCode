function Person() {
    this.num = 100;
}

let p = new Person(); 
console.log(p);

// 1. 创建一个空对象；  let obj = {};
// 2. 将第一步中的空对象的 __proto__ 指向构造函数的 prototype;
// 3. 执行构造函数中的代码，将 this 指向第一步的对象; 
// 4. 返回（return）第一步中创建的对象。


