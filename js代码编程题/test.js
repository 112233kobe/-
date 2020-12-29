// 快排
function QuickSort(arr) {
    if(arr.length<=1){
        return arr
    }
    // var indexValue = arr.pop()
    var indexValue = arr.shift()
    var leftArr = []
    var rightArr = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<=indexValue){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    return QuickSort(leftArr).concat([indexValue],QuickSort(rightArr))
}                

// 冒泡排序
function PopSort(arr){
    console.log('arr');
    console.log(arr);
    // var flag = false;
    for(let i = 0;i<arr.length-1;i++){
        var flag = false
        for(let j = 0;j<arr.length-i-1;j++){
            console.log("我循环了")
            if(arr[j]>arr[j+1]){
                flag = true
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
           
        }
        if(flag == false){
            console.log("我跳了")
            break;
        }
    }
    return arr;
}

// var arrTest = [1,5,4,8,2,3,6,9,7]
var arrTest = [1,2,3,4,5,6,7,8,9]
console.log("排序后")
// console.log(QuickSort(arrTest));
console.log(PopSort(arrTest));