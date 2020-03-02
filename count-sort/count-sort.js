/**
 *  思路：找出数组中的最大值maxValue，创建一个长度为maxValue+1的计数数组。然后循环数组，统计每项元素的出现次数。最后再迭代展示出来
 * @param {*} array 
 */
function countSort(array) {
  // 第一部分：找出数组最大值
  let maxValue = array[0]
  for(let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }

  // 第二部分：统计元素出现次数
  const counts = new Array(maxValue + 1)
  for (let j = 0; j < array.length; j++) {
    if (!counts[array[j]]) {
      counts[array[j]] = 0
    }
    counts[array[j]]++
  }

  // 第三部分：迭代显示
  let storeIndex = 0
  counts.forEach((item, index) => {
    while(item > 0) {
      array[storeIndex++] = index
      item--
    }
  })
}

module.exports = countSort

// countSort([1,3,5,9, 5])