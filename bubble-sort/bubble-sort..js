const { defaultCompare, Compare, swap } = require('../common/utils')
/**
 * 思路：从第一项开始往后相邻项进行比较，若当前项大于后一项，则交换位置
 * @param {*} array 
 * @param {*} compareFn 
 */

function bubbleSort(array, compareFn = defaultCompare) {
  let copyArray = array.slice()
  const { length } = copyArray
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(copyArray[j], copyArray[j + 1]) === Compare.BIGGER_THAN) {
        swap(copyArray, j, j + 1)
      }
    }
  }
  return copyArray
}

const arr = [34,1,5,21,76,2]

console.log(bubbleSort(arr))