const arr = [50, 40, 34, 30, 25, 20, 10, 8, 5]
const arr2 = [10, 20, 30, 40, 50, 60, 70]
const binarySearch = (arr, target) => {
    let start = 0
    let end = arr.length - 1
    let mid
    let asc


    if (arr[start] < arr[end]) {
        asc = true
    } else {
        asc = false
    }

    while (start <= end) {

        mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) return 'data found at index ' + mid

        if (asc) {
            if (target < arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (arr[mid] < target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }

    }


    return -1

}

console.log(binarySearch(arr2, 25))


