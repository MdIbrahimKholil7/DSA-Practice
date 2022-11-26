const nums = [-1, 3, 5, 6], target = 1

const searchInsert = (arr, target) => {

    let start = 0
    let end = arr.length - 1
    let mid

    if (target === 0) return 0

    while (start <= end) {

        mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            return mid
        }
        if (target < arr[mid]) {
            console.log('hell')
            end = mid - 1
        } else {
            console.log('hi')
            start = mid + 1
        }

    }

    return start
}


console.log(searchInsert(nums, target))



