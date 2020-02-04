class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  pop() {
    if (this.isEmpty()) return
    this.count--
    const last = this.items[this.count]
    delete this.items[this.count]
    return last
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.count === 0
  }
  peek() {
    if (this.isEmpty()) return
    return this.items[this.count - 1]
  }
  clear() {
    this.count = 0
    this.items = {}
  }
  toString() {
    if (this.isEmpty()) return ''
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

// 十进制转二进制
function decimalToBinary(decNumber) {
  const stack = new Stack()
  let binaryString = ''
  let remain
  let number = Math.floor(decNumber)
  while(number > 0) {
    // 余数
    remain = number % 2
    stack.push(remain)
    // 除数
    number = Math.floor(number / 2)
  }
  while(!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}

console.log(decimalToBinary(10)) // 1010

// 进制转换算法,十进制转2～36的任意进制
function baseConvert(decNumber, base) {
  if (!(base >= 2 && base <= 36)) return ''
  const stack = new Stack()
  let binaryString = ''
  const baseStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let remain
  let number = Math.floor(decNumber)
  while(number > 0) {
    // 余数
    remain = number % base
    stack.push(remain)
    // 除数
    number = Math.floor(number / base)
  }
  while(!stack.isEmpty()) {
    binaryString += baseStr[stack.pop()]
  }
  return binaryString
}

console.log(baseConvert(161, 16)) // A1