

// memorization 
const numArr = []
const factorial = (num) => {

    if (numArr[num]) {
        return numArr[num]
    }
    let result = 1
    for (let i = 1; i <= num; i++) {
        result = result * i
    }
    numArr[num] = result
    return result
}
const arr = [3, 5, 6, 6, 34, 6, 3, 5, 5, 5, 5, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(factorial(arr[i]))
}

