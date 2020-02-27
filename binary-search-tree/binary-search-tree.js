const Node = require('../common/BST-node')
const { Compare, defaultCompare } = require('../common/utils')

/**
 * 二叉搜索树：只允许在左侧节点存储比父节点小的值，在右侧节点存储大于父节点的值。
 */

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    // 比较节点值
    this.compareFn = compareFn
    // 根节点
    this.root = null
  }
  // 向树中插入一个新的键
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  // BST先序遍历，根-左-右。应用：打印一个结构化的文档
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  // BST中序遍历，左-根-右。应用：对树进行排序
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  // BST后序遍历，左-右-根。应用：计算一个目录及其子目录中所有文件所占空间的大小
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node
    while(current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node
    while(current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node === null) return false
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    if (node === null) return null
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {  // 待删除的键为叶子节点
        node = null
        return node
      } else if (node.left === null) {  // 待删除的键，左节点为空
        node = node.right
        return node
      } else if (node.right === null) {  // 待删除的键，右节点为空
        node = node.left
        return node
      } else {  // 待删除的键，同时拥有左右子节点
        // 这里是关键！找出大于待删除键的最小节点，作为替补
        const backup = this.minNode(node.right)
        node.key = backup.key
        node.right = this.removeNode(node.right, backup.key)
        return node
      }
    }
  }
}

module.exports = BinarySearchTree

// const nodePrint = key => console.log(key)

// const bst = new BinarySearchTree()
// bst.insert(11)
// bst.insert(7)
// bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
// bst.insert(20)
// bst.insert(18)
// bst.insert(25)
// bst.insert(6)
// bst.preOrderTraverse(nodePrint)
// console.log(bst.remove(7))
// bst.inOrderTraverse(nodePrint)