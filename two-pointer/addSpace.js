const insertSpaces = (s, arr) => {
    let j = 0, res = ''

    for (let i = 0; i < s.length; i++) {
        if (i === arr[j]) {
            res += ' ',
                j++
        }
        res += s[i]
        if (j === arr.length) return res + s.substring(i + 1)
    }
}

console.log(insertSpaces('helloworld', [5, 8]))