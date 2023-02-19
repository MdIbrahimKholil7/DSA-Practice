const reverseNum = (str) => {

    let size = str.length - 1
    for (let i = 0, k = size; i <= k; i++, k--) {
        let temp = str[i]
        str[i] = str[k]
        str[k] = temp
        console.log(str[i] = str[k])
    }
    return str
}
console.log(reverseNum('hello'))
