
const twoSum = (numArr, target) => {
    let left = 0
    let right = numArr.length - 1
    while (left < right) {
        let sum = numArr[left] + numArr[right];
        if (sum === target) {
            return [left, right]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return [-1, -1]
}
let numbers = [2, 7, 11, 15];
let target = 9;
let indices = twoSum(numbers, target);
console.log(indices); 











// Output: [1, 2]
// function twoSum(numbers, target) {
//         let left = 0;
//         let right = numbers.length - 1;
        
//         while (left < right) {
//             let sum = numbers[left] + numbers[right];
            
//             if (sum === target) {
//                 return [left + 1, right + 1]; // 1-indexed
//             } else if (sum < target) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
        
//         return [-1, -1]; // No solution found
// }
// let numbers = [2, 7, 11, 15];
// let target = 9;
// let indices = twoSum(numbers, target);
// console.log(indices); // Output: [1, 2]
