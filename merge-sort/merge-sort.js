const { defaultCompare, Compare } = require('../common/utils')

/**
 * 思路：通过分治的思想，把数组分割成最小单元，即每个数组只有一个元素。然后在进行比较
 * 关键：每次调用mergeSort返回的数组都是排好序的
 * @param {*} array 
 * @param {*} compareFn 
 */
function mergeSort(array, compareFn = defaultCompare) {
  const { length } = array
  // 递归基线条件，array中只有一个元素
  if (length > 1) {
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle), compareFn)
    const right = mergeSort(array.slice(middle), compareFn)
    // 关键
    array = merge(left, right, compareFn)
  }
  return array
}

function merge(left, right, compareFn) {
  let i = 0
  let j = 0
  const result = []

  while(i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
    )
  }
  // 因为left，right都是排好序的。所以只要有一方的数组比较完毕，那么就可以直接把剩余的元素合并
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

module.exports = mergeSort

// const arr = [5, 7, 1, 8, 4]

// console.log(mergeSort(arr))