/**
 * 最小堆：每个子节点都大于等于父节点
 */

const { Compare, defaultCompare, swap } = require('../common/utils')

class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }
  // 获取特定位置左节点的index
  getLeftIndex(index) {
    return 2 * index + 1
  }
  // 获取特定位置右节点的index
  getRightIndex(index) {
    return 2 * index + 2
  }
  // 获取特定位父节点的index
  getParentIndex(index) {
    if (index === 0) return
    return Math.floor((index - 1) / 2)
  }
  // 向堆中插入一个值，成功返回true，否则false
  insert(value) {
    if (value == null) return false
    this.heap.push(value)
    this.siftUp(this.heap.length - 1)
    return true
  }
  // 上移操作。
  siftUp(index) {
    // 获取父节点index
    let parent = this.getParentIndex(index)
    while(index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
      // 如果父节点大于插入的子节点。那么互换位置
      swap(this.heap, parent, index)
      // 交换位置后，向上冒泡。直到根节点都进行了比较操作。这样就能保证最小堆的根节点是最小值。
      index = parent
      parent = this.getParentIndex(index)
    }
  }
  // 下移操作
  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    // 如果父节点大于左节点。则交换位置
    if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
      element = left
    }
    // 如果父节点大于右节点。则交换位置
    if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
      element = right
    }
    // 如果父节点比任意子节点小，那么交换位置。继续往下沉，直到父节点小于等于子节点
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  // 移除最小值，并返回该值
  extract() {
    if (this.isEmpty()) return
    if (this.size() === 1) return this.heap.shift()
    const removedValue = this.heap.shift()
    // 把堆中末尾元素移动到堆顶
    this.heap.unshift(this.heap.pop())
    this.siftDown(0)
    return removedValue
  }
  // 返回最小值
  findMinimum() {
    return this.heap[0]
  }
}

module.exports = MinHeap

// const heap = new MinHeap()
// for (let i = 1; i < 10; i++) {
//   heap.insert(i)
// }

// console.log(heap)
// console.log(heap.extract())
// console.log(heap)