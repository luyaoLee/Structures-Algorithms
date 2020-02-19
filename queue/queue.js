class Queue {
  constructor() {
    // 队列尾部序号
    this.count = 0
    // 队列首部序号
    this.lowestCount = 0
    this.items = {}
  }
  // 入队
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // 出队
  dequeue() {
    if (this.isEmpty()) return
    const dequeuedElement = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return dequeuedElement
  }
  // 查看队列首部元素
  peek() {
    if (this.isEmpty()) return
    return this.items[this.lowestCount]
  }
  size() {
    return this.count - this.lowestCount
  }
  // 将元素按先后顺序，用 ","连接返回
  toString() {
    if(this.isEmpty()) return ''
    let str = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
}
