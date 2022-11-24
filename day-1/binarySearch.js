const numArr = [5, 8, 9, 20, 30, 40, 50, 60, 70, 80, 90]

const binarySearch = (arr, target) => {
    let start = 0
    let end = arr.length - 1
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            return 'Data found at index ' + mid
        } else if (target < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return 'Data not found'
}

console.log(binarySearch(numArr, 20))
