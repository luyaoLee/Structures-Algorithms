const { defaultCompare, Compare, swap } = require('../common/utils')

/**
 * 思路：选择排序就是找到每次循环的最小值并把它放在第一位
 * @param {*} array 
 * @param {*} compareFn 
 */
function selectionSort(array, compareFn = defaultCompare) {
  let copyArr = array.slice()
  const { length } = copyArr

  // 因为排序到倒数第二位时，此时顺序已经确定了。所以循环次数是length - 1
  for (let i = 0; i < length - 1; i++) {
    let indexMin = i
    for (let j = i; j < length; j++) {
      // 每次都是把未排好序的开始位置作为最小项，往后依项比较，如果遇见比它小的，那么把这个较小值的index赋值给indexMin
      if (compareFn(copyArr[indexMin], copyArr[j]) === Compare.BIGGER_THAN) {
        indexMin = j
      }
    }
    if (indexMin !== i ) {
      swap(copyArr, i, indexMin)
    }
  }
  return copyArr
}

module.exports = selectionSort

const arr = [2, 23, 6, 78, 4, 3]

console.log(selectionSort(arr))