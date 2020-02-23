const DoublyNode = require('../common/doubly-node')
const LinkedList = require('../linked-list/linked-list')
const { defaultEquals } = require('../common/utils')

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null
  }
  insert(element, index) {
    if (index < 0 || index > this.count) return false

    const node = new DoublyNode(element)
    let current = this.head
    // 插入第一个位置
    if (index === 0) {
      // 再判断是否为空链表
      if (this.head === null) {
        this.head = node
        this.tail = node
      } else {
        node.next = current
        current.prev = node
        this.head = node
      }
    // 插入末尾
    } else if (index === this.count) {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = node
      node.prev = previous
      node.next = current
      current.prev = node
    }
    this.count++
    return true
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return
    let current = this.head

    if (index === 0) {
      this.head = current.next
      if (this.count === 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (index === this.count - 1) {
      current = this.tail
      current.prev.next = null
      this.tail = current.prev
    } else {
      current = this.getElementAt(index)
      current.prev.next = current.next
      current.next.prev = current.prev
    }
    this.count--
    return current.element
  }
}

module.exports = DoublyLinkedList

// const doublyLinkedList = new DoublyLinkedList()
// doublyLinkedList.insert('lee', 0)
// doublyLinkedList.insert('lu', 1)
// doublyLinkedList.insert('yao', 2)
// console.log(doublyLinkedList.removeAt(1))
// console.log(doublyLinkedList)