
let arr = [3, 26, 1, 2, 3, 44, 57, 87, 1];
const fixArr = (arr) => {
    let newArr = []
    arr.forEach(element => {
        if (newArr.indexOf(element) < 0) {
            newArr.push(element)
        }
    });
    return newArr.sort((a, b) => a - b)
}
console.log(fixArr(arr))
