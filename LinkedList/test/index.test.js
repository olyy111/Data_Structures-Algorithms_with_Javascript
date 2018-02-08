const test = require('tape')
const { Node, Llist } = require('../index')
test('single directive linked list', function (t) {
  const list1 = new Llist()
  const node1 = new Node('xiaoming')
  list1.insert(node1, null)
  t.equal(list1.dispList, 'xiaoming')
  
  t.end()
})

console.log(typeof undefined)