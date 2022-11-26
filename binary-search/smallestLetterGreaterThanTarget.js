
const letters = ["c", "f", "j"], target = "d"


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
           
            for (let i = mid; i < arr.length; i++) {
                if(arr[i] > arr[mid]){
                    return arr[i]
                }
            }

            return arr[0]

        }

        if (target < arr[mid]) {
            console.log('hi')
            end = mid-1
           console.log(end)
           console.log(mid)
        } else {
            console.log('hell')
            start = mid + 1
           
        }

    }

    return arr[mid]
}


console.log(smallestLaterGreaterThanTarget(letters,target))


