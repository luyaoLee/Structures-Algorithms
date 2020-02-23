const Node = require('./node')

class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

module.exports = DoublyNode