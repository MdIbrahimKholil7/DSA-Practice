const numbers = [10, 30, 40, 20, 50,60]


const reverseNum = (number) => {

    let size = number.length - 1

    for (let i = 0, k = size; i <= k; i++, k--) {
        let temp = number[i]
        number[i] = number[k]
        number[k] = temp

    }
}

reverseNum(numbers)
console.log(numbers)
