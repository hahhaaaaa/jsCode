function random(min, max = 0) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return parseInt(Math.random() * (max - min + 1) + min);
}

function getStorage(key) {
    let data = localStorage[key];
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

function saveStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}


function ajax(param) {
    let { type = "get", url, data, success } = param;
    let xhr = new XMLHttpRequest();
    xhr.open(type, url);
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let msg = xhr.responseText;
            success(JSON.parse(msg));
        }
    }
}

// 字符串转换为对象
function stringParse(str) {
    let obj = {};
    let arr = str.split("&");
    for (let item of arr) {
        let [key, value] = item.split("=");
        obj[key] = value;
    }
    return obj;
}