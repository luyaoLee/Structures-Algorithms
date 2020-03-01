// const { defaultCompare, Compare, swap } = require('../common/utils')

// function quickSort(array, compareFn = defaultCompare) {
//   return quick(array, 0, array.length - 1, compareFn)
// }

// function quick(array, left, right, compareFn) {
//   let index
//   if (array.length > 1) {
//     index = partition(array, left, right, compareFn)
//     console.log(left, index, right)
//     // 较小组继续划分
//     if (left < index - 1) {
//       quick(array, left, index - 1, compareFn)
//     }
//     // 较大组继续划分
//     if (index < right) {
//       quick(array, index, right, compareFn)
//     }
//   }
//   return array
// }

// function partition(array, left, right, compareFn) {
//   const pivot = array[Math.floor((left + right) / 2)]
//   let i = left
//   let j = right

//   while(i <= j) {
//     // 如果左边出现比主元大的项，左指针停止移动
//     while(compareFn(array[i], pivot) === Compare.LESS_THAN) {
//       i++
//     }
//     // 如果右边出现小于主元的项，右指针停止移动
//     while(compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
//       j--
//     }
//     // 左指针的位置没有超过右指针，那么交换此时左右指针的值。左指针往右移动一步，右指针往左移动一步，缩小数组范围
//     if (i <= j) {
//       swap(array, i, j)
//       i++
//       j--
//     }
//   }
//   return i
// }


// const arr = [3, 5, 1, 6, 4, 7, 2]

// console.log(quickSort(arr))

function quickSort(arr) {
  return quick(arr, 0, arr.length - 1)
}

function quick(arr, startIndex, endIndex) {
  // 递归结束条件；startIndex大于或等于endIndex
  if (startIndex >= endIndex) return
  // 得到基准元素位置
  let pivotIndex = partition(arr, startIndex, endIndex)
  console.log(pivotIndex)
  // 根据基准元素，分成两部分进行递归排序
  quick(arr, startIndex, pivotIndex - 1)
  quick(arr, pivotIndex + 1, endIndex)
  return arr
}

function partition(arr, startIndex, endIndex) {
  // 取中间位置作为基准元素
  // let pivot = arr[Math.floor((startIndex + endIndex) / 2)]
  let pivot = arr[startIndex]
  let left = startIndex
  let right = endIndex

  while(left !== right) {
    // 控制right指针并左移
    while(left < right && arr[right] > pivot) {
      right--
    }
    // 控制left指针比较并右移
    while(left < right && arr[left] <= pivot) {
      left++
    }
    // 交换左右指针所指的元素
    if (left < right) {
      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
    }
  }

  // pivot和指针重合点交换
  arr[startIndex] = arr[left]
  arr[left] = pivot

  return left
}

const arr = [4, 7, 6, 5, 3]
console.log(quickSort(arr))