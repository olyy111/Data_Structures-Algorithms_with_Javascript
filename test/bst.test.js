const tape = require('tape')
const { Node, BST } =  require('../bst/index.js')
function genArray(length) {
  var arr = [];
  for (var i = 0; i < length; ++i) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  return arr;
}
tape('bst find method', function (t) {  
  var grades = genArray(100); 
  var gradedistro = new BST();
  for (var i = 0; i < grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if (grade == null) {
      gradedistro.insert(g);
    }
    else {
      gradedistro.update(g);
    }
  }

  var noExist = -1
  var Exist = grades[0]
  t.equal(gradedistro.find(noExist), null)
  t.notEqual(gradedistro.find(Exist), null)
  
  t.end()
})

tape('bst remove method', function (t) {  
  var grades = genArray(100); 
  var gradedistro = new BST();
  for (var i = 0; i < grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if (grade == null) {
      gradedistro.insert(g);
    }
    else {
      gradedistro.update(g);
    }
  }

  var noExist = -1
  var Exist = grades[0]
  t.notEqual(gradedistro.find(Exist), null)
  gradedistro.remove(Exist)
  t.equal(gradedistro.find(Exist), null)
  t.end()
})
