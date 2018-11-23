// ES5（没有类）：用函数来模拟类 
// 构造函数：只要通过new关键字调用的函数，都是构造函数。

// 混合模式
// function Student(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// Student.prototype.introduce = function() {
//     console.log("我的名字叫" + this.name);
// }

// // 实例对象
// let s1 = new Student("张三", 20, "男");
// let s2 = new Student("李四", 18, "女");
// let s3 = new Student("王五", 22, "男");

// s1.introduce();
// s2.introduce();
// s3.introduce();

// 构造函数中的 this 和 prototype 方法中的 this，都指向 new 出来的实例对象。

// ES6
class Student {
    constructor(name) {
        this.name = name;
        this.age = 20;
    }
    introduce() {
        console.log("我的名字叫" + this.name);
    }
}

let s1 = new Student("张三");
let s2 = new Student("李四");
let s3 = new Student("王五");

s1.introduce();
s2.introduce();
s3.introduce();

