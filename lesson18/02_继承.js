// 继承
// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     sayHello() {
//         console.log("hello");
//     }
// }

// class Student extends Person {
//     constructor(name, age, gender, like) {
//         super(name, age, gender);
//         this.like = like;
//     }
// }

// let s = new Student("张三", 20, "男", "睡觉");
// console.log(s);
// s.sayHello();


// ES5
// 混合继承
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.sayHello = function () {
    console.log("hello");
}

function Student(name, age, gender) {
    Person.call(this, name, age, gender); // 继承属性
}
Student.prototype = Person.prototype;  // 继承方法

let s = new Student("张三", 20, "男");
console.log(s);
