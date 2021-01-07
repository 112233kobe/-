// 快排
// 快速排序

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var indexValue = arr.pop();
    var leftArr = []
    var rightArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < indexValue) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return QuickSort(leftArr).concat([indexValue], QuickSort(rightArr))
}

// 插入排序
function InsertSort(arr) {
    var index, temp
    for (let i = 1; i < arr.length; i++) {
        index = i - 1
        temp = arr[i]
        while (index >= 0 && arr[index] > temp) {
            arr[index + 1] = arr[index]
            index--
        }
        arr[index + 1] = temp
    }

    return arr;
}

// 冒泡排序
function PopSort(arr) {
    console.log('arr');
    console.log(arr);
    // var flag = false;
    for (let i = 0; i < arr.length - 1; i++) {
        var flag = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            console.log("我循环了")
            if (arr[j] > arr[j + 1]) {
                flag = true
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
        if (flag == false) {
            console.log("我跳了")
            break;
        }
    }
    return arr;
}

var arrTest = [1, 5, 4, 8, 2, 3, 6, 9, 7]
// var arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("排序后")
// console.log(PopSort(arrTest));
// console.log(QuickSort(arrTest))
console.log(InsertSort(arrTest))


function FindMax(str) {
    var arr = str.split('')
    var obj = {}
    var maxNum = 0, maxValue
    for (let i = 0; i < arr.length; i++) {
        var a = arr[i]
        obj[a] == undefined ? obj[a] = 1 : obj[a]++
        if (obj[a] > maxNum) {
            maxNum = obj[a]
            maxValue = a
        }
    }

    console.log("最大值" + maxValue + "出现了" + maxNum + "次")
}

FindMax("112233555544444444444555554");

// 闭包
var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

console.log(add());
console.log(add());
console.log(add());


// 函数柯里化
function curryingAdd(x) {
    return function (y) {
        return function (z) {
            console.log(x + y + z)
            return x + y + z
        }
    }
}

console.log(curryingAdd(1)(2)(3))


var arr = [1, 2, 3, 4, 4]

var r = arr.filter(function (item, index, self) {
    console.log('item');
    console.log(item);
    console.log('index');
    console.log(index);
    console.log('self');
    console.log(self);
    return self.indexOf(item) === index;
})


console.log(r);

