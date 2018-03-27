
const { Queue } = require('../queue/index')
class Graph {
  constructor () {
    this.vertices = [];
    this.edges = 0;
    this.adj = [];
  }
  addVertex (v) {
    this.vertices.push(v)
    this.adj[v] = []
  }
  addEdge (v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }
  initColor () {
    const color = []
    this.vertices.forEach(vertex => {color[vertex] = 'white'})
    return color
  }
  showGraph () {
    this.vertices.forEach(vertex => {
      console.log(vertex + '=>' + this.adj[vertex] + '\n')
    });
  }
  bfs () {
    this.initColor()
    let queue = new Queue()
    queue.enQueue(this.vertices[0])
    while(!queue.isEmpty()){
      let popItem = queue.deQueue()
      this.color[popItem] = 'gray'
      this.adj[popItem].forEach(v => {
        if(this.color[v] === 'white'){
          queue.enQueue(v)
        }
      })
      this.color[popItem] = 'black'
      console.log(this.vertices[popItem])
    }
  }
  dfs() {
    let color = this.initColor()
    let adj = this.adj
    let len = this.vertices.length
    let discover = new Array(len).fill([])
    let finish = new Array(len).fill([])
    let time = 0

    this.vertices.forEach(vertex => {
      if(color[vertex] === 'white'){
        dfsVisit(vertex)
      }
    })

    function dfsVisit(vertex) {
      color[vertex] = 'gray'
      adj[vertex].forEach(v => {
        if(color[v] === 'white'){
          dfsVisit(v)
          time++
          discover[v] = time
        }
      })
      color[vertex] = 'black'
      time++
      finish[vertex] = time
      console.log(vertex)
    }  
    
    return {
      discover,
      finish
    }
  }
}
module.exports = { Graph };
g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(1, 4)
g.addEdge(2, 5)
const obj = g.dfs()
console.log(obj, 1)



