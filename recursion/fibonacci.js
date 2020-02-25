/**
 * 斐波那契数列由0、1、1、2、3、5、8、13、21、34等组成。由以下规定：
 * 1、位置零的斐波那契数为 0
 * 2、1 和 2 的斐波那契数是 1
 * 3、n (n >= 2的情况)的斐波那契数是（n-1）的斐波那契数加上（n-2）的斐波那契数
 */
const now = Date.now()
function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(40))  // 102334155
console.log(Date.now() - now) // 920

/**
 * 优化：添加缓存数组，缓存已经执行过函数的值。
 */
const now1 = Date.now()
function memoFibonacci(n, memo = [0, 1]) {
  if (memo[n] !== undefined) return memo[n]
  return memo[n] = memoFibonacci(n - 1, memo) + memoFibonacci(n - 2, memo)
}

console.log(memoFibonacci(40)) // 102334155
console.log(Date.now() - now1) // 0

// 未优化前，求fibonacci(40)的用时大概为920ms左右。优化后基本在1ms之内，性能提升极大！！！