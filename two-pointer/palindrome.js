
const isPalindrome = (str) => {
    let i = 0
    let j = str.length - 1
    while (i <= j) {
        if (str[i] !== str[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

const leetCode2108 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            return arr[i]
        }
    }
    return ''
}


// console.log(leetCode2108(['moms', 'racecars', 'yeah']))



function addSpace(s,arr) {
    for (let i = 0; i < arr.length; i++) {
        s[i]+=' '
    }
    return s
}

console.log(addSpace("LeetcodeHelpsMeLearn",[8,13,15]))