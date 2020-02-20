// 使用双端队列实现：回文检查

const Deque = require('./deque')

function palidromeChecker(str) {
  if (typeof str !== 'string') return false
  // 将字符串转为小写并去除空格
  let lowerStr = str.toLowerCase().split(' ').join('')

  let isEqual = true
  const deque = new Deque()
  for (let i = 0; i < lowerStr.length; i++) {
    deque.addBack(lowerStr[i])
  }

  console.log(deque)
  while(deque.size() > 1 && isEqual) {
    const front = deque.removeFront()
    const back = deque.removeBack()

    console.log(front, back)

    if (front !== back) {
      isEqual = false
    }
  }
  return isEqual
}

let str = 'Step on no pets'
console.log(palidromeChecker(str))

// true