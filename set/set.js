class Set {
  constructor() {
    this.items = {}
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
  }
  values() {
    return Object.values(this.items)
  }
  union(otherSet) {
    const unionSet = new Set()
    this.values().map(item => unionSet.add(item))
    otherSet.values().map(item => unionSet.add(item))
    return unionSet
  }
  intersection(otherSet) {
    const intersectionSet = new Set()
    let values = this.values()
    let otherValues = otherSet.values()
    let smallerSet = values
    let biggerSet = otherValues

    if (values.length > otherValues.length) {
      biggerSet = values
      smallerSet = otherValues
    }

    smallerSet.map(item => {
      if (biggerSet.includes(item)) {
        intersectionSet.add(item)
      }
    })
    return intersectionSet
  }
  difference(otherSet) {
    let diffSet = new Set()
    this.values().map(item => {
      if (!otherSet.has(item)) {
        diffSet.add(item)
      }
    })
    return diffSet
  }
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false
    let isSubset = true
    this.values().every(item => {
      if (!otherSet.has(item)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}

const A = new Set()
A.add(1)
A.add(2)
A.add(3)

const B = new Set()
B.add(3)
B.add(4)

const intersect = A.difference(B)
console.log(intersect)