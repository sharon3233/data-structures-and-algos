class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.size = 0;
    }
    enqueue(element) {
      this.elements[this.size] = element;
      this.size++;
    }
    dequeue() {
      const item = this.elements[this.size];
      delete this.elements[this.size];
      this.size--;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.size - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
}


module.exports = Queue