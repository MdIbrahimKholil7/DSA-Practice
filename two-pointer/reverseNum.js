const numbers = [10, 30, 40, 20, 50, 60]
const numbers2 = [10, 10, 50, 70, 80, 100]


const reverseNum = (number) => {

    let size = number.length - 1
    for (let i = 0, k = size; i <= k; i++, k--) {
        let temp = number[i]
        number[i] = number[k]
        number[k] = temp

    }
}

reverseNum(numbers)

// console.log(numbers)
const arr1 = [1, 3, 5, 7, 8, 10,];
const arr2 = [2, 4, 6, 8, 100, 200];

const mergeSortedArrays = (arr1, arr2) => {
    let pointer1 = 0
    let pointer2 = 0
    const merged = []

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] <= arr2[pointer2]) {
            merged.push(arr1[pointer1])
            pointer1++
        } else {
            merged.push(arr2[pointer2])
            pointer2++
        }
    }

    while (pointer1 < arr1.length) {
        merged.push(arr1[pointer1])
        pointer1++
    }

    while (pointer2 < arr2.length) {
        merged.push(arr2[pointer2])
        pointer2++
    }
    return merged
}

const merged = mergeSortedArrays(arr1, arr2);

console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8]