const MaxHeap = require('../max-heap/max-heap')
const MinHeap = require('../min-heap/min-heap')

const { defaultCompare, swap, Compare } = require('../common/utils')

/**
 * 堆排序思路：
 * 1、用数组创建最大堆
 * 2、创建最大堆后，将堆顶最大值替换为堆末尾的元素，堆的大小减1
 * 3、在进行下移，找出替换后的堆最大值。循环第二步操作，直到堆大小为1
 * 
 */
function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length
  buildMaxHeap(array, compareFn)
  while(heapSize > 1) {
    // 第二步
    swap(array, 0, --heapSize)
    // 最大堆化，第三步
    heapify(array, 0, heapSize, compareFn)
  }
  return array
}

function buildMaxHeap(array, compareFn) {
  // 所有的非叶子节点依次下沉
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length, compareFn)
  }
  return array
}

function heapify(heap, index, size, compareFn) {
  let element = index
  const left = getLeftIndex(index)
  const right = getRightIndex(index)
  if (left < size && compareFn(heap[element], heap[left]) === Compare.BIGGER_THAN) {
    element = left
  }
  if (right < size && compareFn(heap[element], heap[right]) === Compare.BIGGER_THAN) {
    element = right
  }
  if (index !== element) {
    swap(heap, index, element)
    heapify(heap, element, size, compareFn)
  }
}

function getLeftIndex(index) {
  return 2 * index + 1
}

function getRightIndex(index) {
  return 2 * index + 2
}