Mock.mock(/\/register/, (options) => {
    let data = stringParse(options.body); // 获取到前端传给服务端的数据
    let users = getStorage("users");
    users.push(data);
    saveStorage("users", users);
    return true;
})

Mock.mock(/\/isRepeat/, (options) => {
    let data = stringParse(options.body); // 获取到前端传给服务端的数据
    let users = getStorage("users");
    return users.some(item => item.phone == data.phone);
})

Mock.mock(/\/login/, (options) => {
    let data = stringParse(options.body); // 获取到前端传给服务端的数据
    let users = getStorage("users");
    for (let item of users) {
        if (item.phone == data.phone && item.password == data.password) {
            return true;
        }
    }
    return false;
})

// 获取所有学生数据 / 查询部分学生数据
Mock.mock(/\/students\/getStudents/, (options) => {
    let param = options.url.split("?")[1];  // 拆分路径
    let students = getStorage("students");

    if (param != "undefined") {  // 查询部分学生数据
        let data = stringParse(param);
        return students.filter(item => item[data.type].includes(data.value));
    } else { // 获取所有学生数据
        return students;
    }
})

// 新增学生
Mock.mock(/\/students\/addStudents/, (options) => {
    let data = stringParse(options.body);
    let students = getStorage("students");
    let id = 0;
    if (students.length > 0) {
        id = students[students.length - 1].id;
    }
    id++;
    data.id = id;  // 给学生对象再添加一个id属性
    students.push(data);
    saveStorage("students", students);
    return true;
})

// 删除
Mock.mock(/\/students\/removeStudents/, (options) => {
    let data = stringParse(options.body);
    let students = getStorage("students");
    for (let i = 0; i < students.length; i++) {
        if (data.id == students[i].id) {
            students.splice(i, 1);
            break;
        }
    }
    saveStorage("students", students);
    return true;
})

// 修改
Mock.mock(/\/students\/getOne/, (options) => {
    let data = stringParse(options.body);
    let students = getStorage("students");
    return students.filter(item => item.id == data.id)[0];
})

// 确认修改
Mock.mock(/\/students\/updateStudents/, (options) => {
    let data = stringParse(options.body);
    let students = getStorage("students");
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == data.id) {
            students[i] = data;
        }
    }
    saveStorage("students", students);
    return true;
})


