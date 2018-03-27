function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
  this.marked = [];
  this.edgeTo = [];
  this.getPath = getPath
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}
function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    console.log(i + " -> ");
    for (var j = 0; j
      < this.vertices; ++j) {
      if (this.adj[i][j] != undefined)
        console.log(this.adj[i][j] + ' ');
    }
    console.log();
  }
}
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log("Visited vertex: " + v);
  }
  this.adj[v].forEach(w => {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  })
  
}
function bfs(s) {
  var queue = [];
  var paths = []
  this.marked[s] = true;
  queue.push(s); // 添加到队尾
  while (queue.length > 0) {
    var v = queue.shift(); // 从队首移除
    if (v == undefined) {
      console.log("Visisted vertex: " + v);
    }
    
    this.adj[v].forEach(w => {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        paths[w] = v;
        
        this.marked[w] = true;
        queue.push(w);
      }
    })
  }
}
function getPath() {
  
}
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);