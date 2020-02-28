const { defaultCompare } = require('../common/utils')
const MinHeap = require('../min-heap/min-heap')

class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}

function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a)
}

module.exports = MaxHeap


const maxheap = new MaxHeap()
maxheap.insert(2)
maxheap.insert(3)
maxheap.insert(4)
maxheap.insert(5)
maxheap.insert(1)

console.log(maxheap)