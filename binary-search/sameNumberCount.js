const arr = [50, 40, 34, 30, 25, 25,25, 25, 25, 25, 20, 20, 10, 8, 5]
// [10, 20, 30, 40, 50, 60]
const arr2 = [10, 20, 30, 40, 50, 60, 70]
const numberCount = (arr, target) => {
    let start = 0
    let end = arr.length - 1
    let mid
    let asc
    let count = 0
    if (arr[start] < arr[end]) {
        asc = true
    } else {
        asc = false
    }
    // console.log(arr)
    while (start <= end) {

        mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            // console.log(mid)
            // console.log(arr[mid])
            count++
            for (let i = mid - 1; i >= 0; i--) {

                if (arr[i] === target) {
                    console.log('i')
                    count++
                } 
                
            }

            for (let i = mid + 1; i <= arr.length - 1; i++) {
                if (arr[i] === target) {
                    console.log('l')
                    count++
                }
            }

            return count
        }

        if (asc) {
            if (target > arr[mid]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        } else {
            if (target > arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
    }
    return 'no data'
}

console.log(numberCount(arr, 25))