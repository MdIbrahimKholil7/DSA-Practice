const numArr = [5, 8, 9, 20, 30, 40, 50, 60, 70, 80, 90]


const binarySearch = (arr, target) => {

    let start = 0
    let end = numArr.length - 1
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            return 'data found at index' + mid
        } else if (arr[mid] < target) {
            start = mid - 1
        } else {
            end = mid - 1
        }
    }

    return 'NO data found'
}

console.log(binarySearch(numArr,60))


