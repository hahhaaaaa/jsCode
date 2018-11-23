// 1.数据属性


// let student = {
//     name: 'zhangsan'
// }
// student.age = 20;
// Object.defineProperty(student, "gender", {
//     value: 'male',  // 设置属性值
//     writable: true,  // 读写性： 设置能否被修改。默认 false，不可修改。
//     configurable: true,  // 配置性： 设置能否被删除。默认 false，不可删除。
//     enumerable: true  // 枚举性：设置能否被遍历。默认 false，不可遍历。
// });
// console.log(student.gender);
// student.gender = "female";
// delete student.gender;
// console.log(student);
// for(let key in student) {
//     console.log(key);
// }


// 2.访问器属性
// get set
let student = {
    name: 'zhangsan'
}
let sex = 'male';
Object.defineProperty(student, 'gender', {
    get() {
        return sex;
    },
    set(param) {
        sex = param;
    }
});
student.gender = "female";
console.log(student.gender);