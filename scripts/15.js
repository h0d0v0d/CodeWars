
// unworking
arr = [2, 1, 10, 4 , 2, 6, 3, 11, -8]  // 8
arr1 = [2, 1, 10] // 8

function sumOfDifferences(arr) {
    let newArr = [];
    let sum = 0;
    for (let i = arr.length-1; i > 0; i--) {
        newArr.push([arr[i], arr[i-1]])
    }
    for (let i = 0; i < newArr.length; i++) {
        sum+= newArr[i][0] - newArr[i][1]
    }
    return sum
}

console.log(sumOfDifferences(arr))
console.log(sumOfDifferences(arr1))

console.log(4 - 2 - 6 + 9 -1 - 3 + 8 - 19)
// unworking
// kind of...