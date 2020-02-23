/**
 * tips：链表的最后一个节点的指针指向null
 */
const { defaultEquals } = require('../common/utils')
const Node = require('../common/node')

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }
  push(element) {
    const node = new Node(element)
    /**
     * 有两种情况：
     * 1.如果为空链表，那么把当前node当作head
     * 2.不为空，那么沿着头部往后查找next为空的元素，即尾元素。插入node
     */
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while(current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  // 在任意位置插入节点
  insert(element, index) {
    if (index < 0 || index > this.count) return false
    let current = this.head
    const node = new Node(element)
    if (index === 0) {
      this.head = node
      node.next = current
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = node
      node.next = current
    }
    this.count++
    return true
  }
  // 移除指定位置节点
  removeAt(index) {
    if (index < 0 || index >= this.count) return
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      /**
       * 删除指定位置节点：把目标节点的前一个节点next指向目标节点的下一个节点
       */
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }
  // 查找节点位置
  indexOf(element) {
    let current = this.head
    let result = -1
    for (let i = 0; i < this.count; i++) {
      if (current.element === element) {
        result = i
        break
      }
      current = current.next
    }
    return result
  }
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }
  // 获取指定位置节点
  getElementAt(index) {
    let current = this.head
    while(index > 0) {
      current = current.next
      index--
    }
    return current
  }
  toString() {
    if (this.isEmpty()) return ''
    let current = this.head
    let str = `${current.element}`
    for (let i = 1; i < this.count; i++) {
      current = current.next
      str = `${str},${current.element}`
    }
    return str
  }
}

module.exports = LinkedList

// const link = new LinkedList()


// link.push('head')
// link.push('neck')
// link.push('belly')

// console.log(link.toString())
