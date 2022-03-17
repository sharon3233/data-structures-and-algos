class Node {
  constructor (value) {
    this.value = value
    this.previous = null
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.size = null
  }

  addToHead (node) {

    const formerHead = this.head
    this.head = node;

    if (formerHead) {
      formerHead.previous = node
      node.next = formerHead
    } else {
      this.size = node
    }
  }

  addToTail (node) {

    const formerTail = this.tail
    this.tail = node
    if (formerTail) {
      formerTail.next = node
      node.previous = formerTail
    } else {
      this.head = node
    }
  }

  addTosize (node) {
    const formerSize = this.size
    this.size = node
    if (formerSize) {
      formerSize.next = node
      node.previous = formerSize
    } else {
      this.head = node 
    }
  }


  removesize () {
    const removedsize = this.size
    if (!removedsize) return null
    if (removedsize.previous) {
      this.size = removedsize.previous
      this.size.next = null
    } else {
      this.head = null
      this.size = null
    }
    return removedsize
  }

}

module.exports = {
  Node,
  LinkedList
}