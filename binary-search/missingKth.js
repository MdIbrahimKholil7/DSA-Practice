const arr = [2, 3, 4, 7, 11], k = 5

const missingKth = (arr, target) => {

    let i = 0
    let n = 1
    const newArr=[]

    while (true) {

        if(arr[i] == n){
            i++
            n++
        }else{
            newArr.push(n)
            n++
            if(newArr.length > target){
                break
            }
        }
    }
    // console.log(newArr)
    return newArr[target-1]

}

console.log(missingKth(arr, k))