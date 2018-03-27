const tape = require('tape')
const { Graph } = require('../graph/index.js')
tape('add method', function (t) {
  g = new Graph(5);
  g.addEdge(0,1);
  var a = g.adj[0]
  var b = g.adj[1]
  // t.equal(g.adj[0].indexOf(1), 0)
  // t.equal(g.adj[1].indexOf(0), 0)
  t.end()
})