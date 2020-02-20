// 击鼓传花(热土豆)游戏
const Queue = require('./queue')

function hotPotato(list, num) {
  const queue = new Queue()
  const eliminatedList = []
  // 所有参与者入列
  list.forEach(item => {
    queue.enqueue(item)
  })

  while(queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // 模拟传递过程，出队再入队
      queue.enqueue(queue.dequeue())
    }
    // 当传递超过规定次数后，下一个参与者淘汰
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

const names = ['小白', '三毛', '胖子', '张三', '李四']
const result = hotPotato(names, 7)

console.log(result)

/**
 *  { eliminated: [ '胖子', '三毛', '李四', '张三' ], winner: '小白' }
 */

/**
 * 分析过程：
 * 1.队列循环一次后顺序不变，相当于先用 num - queue.size() 后再开始
 * 2.以被淘汰者的下一位为队首，开始下一轮
 */
