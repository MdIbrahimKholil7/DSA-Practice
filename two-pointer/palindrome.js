


const checkPilondrome = (str) => {

    let size = str.length - 1

    for (let i = 0, k = size; i <= k; i++, k--) {
        if (str[i] !== str[k]) {
            return false
        }
        return true
    }
}

checkPilondrome('mom')
console.log(checkPilondrome('mom'))
