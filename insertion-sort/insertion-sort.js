const { defaultCompare, Compare, swap } = require('../common/utils')

/**
 * 思路：假定第一项已经排好序。从第二项开始。把当前待插入项依次和已排好序的比较。如果比较项大于待插入项，那么把比较项后移。直到待插入项大于比较项，那么此时的位置j就是要插入的地方。或者j = 0，说明已经到数组头部了，它就是目前最小的项
 * @param {*} array 
 * @param {*} compareFn 
 */
function insertionSort(array, compareFn = defaultCompare) {
  let copyArr = array.slice()
  const { length } = copyArr
  for (let i = 1; i < length; i++) {
    let j = i
    let temp = copyArr[j]
    // 比较当前项和它的前一项
    while(j > 0 && compareFn(copyArr[j - 1], temp) === Compare.BIGGER_THAN) {
      // 如果前一项大于当前项，则把前一项后移一位。
      copyArr[j] = copyArr[j - 1]
      j--
    }
    // 当 j = 0 或者前一项比当前项小。那么就把待插入项插入j这个位置
    copyArr[j] = temp
  }
  return copyArr
}

module.exports = insertionSort

const arr = [4, 2, 6, 1, 8]

console.log(insertionSort(arr))