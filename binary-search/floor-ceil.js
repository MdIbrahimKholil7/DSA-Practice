
const numArr = [5, 8, 9, 20, 30, 40, 50, 60, 70, 80, 90]

const floorCeil = (arr, target) => {
    let num = {}
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

        if (arr[mid] === target) {
            num.floor = arr[mid - 1]
            num.ceil = arr[mid]
            return num
        }

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


    num.ceil = arr[mid]
    num.floor = arr[mid - 1]
    return num
}


console.log(floorCeil(numArr, 500))

