const { defaultEquals } = require('../common/utils')
const Node = require('../common/node')
const LinkedList = require('../linked-list/linked-list')

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  insert(element, index) {
    if (index < 0 || index > this.count) return false
    let current = this.head
    const node = new Node(element)
    if (index === 0) {
      if (this.head === null) {
        // 如果只有一个节点，那么它的next指向自己
        this.head = node
        node.next = this.head
      } else {
        this.head = node
        this.head.next = current
        // 更新最后一个节点.getElementAt方法是从head开始算的，因为上面已经更新了头部。所以这里用this.count而不是this.count-1来获取最后一个节点
        current = this.getElementAt(this.count)
        current.next = this.head
      }
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = node
      node.next = current
    }
    this.count++
    return true
  }
  removeAt(index) {
    if (index < 0 || index >= this.count) return
    let current = this.head
    if (index === 0) {
      if (this.size() === 1) {
        this.head = null
      } else {
        this.head = current.next
        const tail = this.getElementAt(this.size() - 2)
        tail.next = this.head
      }
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
      const tail = this.getElementAt(this.size() - 1)
      tail.next = this.head
    }
    this.count--
    return current.element
  }
}

module.exports = CircularLinkedList

// const circle = new CircularLinkedList()
// circle.insert('lee', 0)
// circle.insert('lee1', 1)
// circle.insert('lee2', 2)

// console.log(circle.removeAt(1))