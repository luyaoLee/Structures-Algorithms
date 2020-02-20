class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  addFront(element) {
    this.lowestCount--
    this.items[this.lowestCount] = element
  }
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  removeFront() {
    if (this.isEmpty()) return
    const front = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return front
  }
  removeBack() {
    if (this.isEmpty()) return
    const back = this.items[this.count - 1]
    this.count--
    delete this.items[this.count]
    return back
  }
  peekFront() {
    if (this.isEmpty()) return
    return this.items[this.lowestCount]
  }
  peekBack() {
    if (this.isEmpty()) return
    return this.items[this.count - 1]
  }
  toString() {
    if(this.isEmpty()) return ''
    let str = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
  }
  size() {
    return this.count - this.lowestCount
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

module.exports = Deque

// const deque = new Deque()
// console.log(deque.isEmpty())
// deque.addBack('John')
// deque.addBack('Jack')
// console.log(deque.toString())
// deque.addBack('Camila')
// console.log(deque.toString())
// console.log(deque.size())
// console.log(deque.isEmpty())
// deque.removeFront()
// console.log(deque.toString())
// deque.removeBack()
// console.log(deque.toString())
// deque.addFront('John')
// console.log(deque.toString())