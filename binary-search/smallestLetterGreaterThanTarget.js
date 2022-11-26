
const letters = ["c", "f", "j"], target = "f"


const smallestLaterGreaterThanTarget = (arr, target) => {

    let start = 0
    let end = arr.length - 1
    let mid

    if(arr[end] < target){
        return arr[0]
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            console.log(arr[mid])
            for (let i = mid; i < arr.length; i++) {
                if(arr[i] > arr[mid]){
                    return arr[i]
                }
            }
        }

        if (target < arr[mid]) {
            end = mid - 1
            // console.log(end)
        } else {
            start = mid + 1
        }

    }
    return arr[mid]
}


console.log(smallestLaterGreaterThanTarget(letters,target))


