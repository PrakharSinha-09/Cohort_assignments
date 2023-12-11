/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    numbers.sort((a,b)=>a-b);
    return numbers[numbers.length-1];
}

const numbers=[-3.5, -7.2, -2.1, -9.8, -1.9];
const ans=findLargestElement(numbers)
console.log(ans);

module.exports = findLargestElement;