class Queue {
  constructor() {
    this.queue = []
  }
  enQueue(item) {
    this.queue.push(item)
  }
  deQueue(item) {
    return this.queue.shift(item)
  }
  isEmpty() {
    return this.queue.length === 0
  }
  size() {
    return this.queue.length
  }
  front() {
    return this.queue[0]
  }
  clear() {
    this.queue = []
  }
  print() {
    console.log(this.queue)
  }
}

module.exports = { Queue }
