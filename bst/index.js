// 二叉查找树要点
// 1. 左边的子节点比父节点xiao， 右边的子节点比父节点大
// 2. 当插入一个节点的时候， 按照第一条， 一直找到树的末端， 也就是叶子节点
// 3. 每个叶子节点的left和right都指向null
// 4. 根节点初始为null

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
  show() {
    console.log(this.data)
  }
}

class BST {
  constructor() {
    this.root = new Node(null)
  }
  insert(data) {
    const node = new Node(data)
    let current = this.root
    if (current.data === null) {
      this.root = node
    } else {
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node
            break
          }
          current = current.left
        } else {
          if (current.right === null) {
            current.right = node
            break
          }
          current = current.right
        }
      }
    }
    return node
  }
  inOrder(node) {
    node.left && this.inOrder(node.left)
    node.show()
    node.right && this.inOrder(node.right)
  }
  getMin(node) {
    let current = node || this.root
    while (current.left) {
      current = current.left
    }
    return current
  }
  getMax() {
    let current = node || this.root
    while (current.right) {
      current = current.right
    }
    return current
  }
  find(data) {
    let current = this.root
    while (current != null) {
      if (current.data === data) {
        return current
      } else if (current.data > data) {
        current = current.left
      } else if (current.data < data) {
        current = current.right
      }
    }
    return null
  }
  // 1. 如果找到这个元素没有left和right（为null）， 找到他的父节点， 并且把对应的节点设置为left或者right
  // 2. 如果找到这个元素有left, 把left连接到他的父节点
  // 3. 如果找到这个元素有right, 把right连接到他的父节点
  // 4. 如果找到这个元素有left和right， 那么找到他的左子树的最大值或者右子树的最小值， 对要删除的这个元素进行值替换， 并且删除对应节点

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }
  update(data) {
    var grade = this.find(data)
    grade.count++
    return grade
  }
  removeNode(node, data) {
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      // 没有子节点的节点
      if (node.left == null && node.right == null) {
        return null;
      }
      // 没有左子节点的节点
      if (node.left == null) {
        return node.right;
      }
      // 没有右子节点的节点
      if (node.right == null) {
        return node.left;
      }
      // 有两个子节点的节点
      var tempNode = this.getMin(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
}

module.exports = { Node, BST }



