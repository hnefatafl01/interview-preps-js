function Node(data) {
  this.data = data;
  this.right = undefined;
  this.left = undefined;
}
function Tree() {
  this.root = undefined;
}

Tree.prototype.addNode = function(data) {
  var node = new Node(data);
  if (this.root === undefined) {
    this.root = node;
  } else {
    var currentNode = this.root;
    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        currentNode.left = node;
        console.log("equal value")
      }
    }
  }
}

Tree.prototype.inOrderTraversal = function(root){
  if (root.left) {
    this.inOrderTraversal(root.left);
  }
  console.log(root.data);
  if (root.right) {
    this.inOrderTraversal(root.right);
  }
}

Tree.prototype.preOrderTraversal = function(root){
  console.log(root.data)
  if (root.left) {
    this.preOrderTraversal(root.left);
  }
  if (root.right) {
    this.preOrderTraversal(root.right);
  }
}

Tree.prototype.postOrderTraversal = function(root){
  if (root.left) {
    this.postOrderTraversal(root.left);
  }
  if (root.right) {
    this.postOrderTraversal(root.right);
  }
  console.log(root.data);
}

var t = new Tree();

t.addNode(10);
t.addNode(15);
t.addNode(5);
t.addNode(2);
t.addNode(12);
t.addNode(20);
t.addNode(7);
// console.log(t)
// console.log(t.inOrderTraversal(t.root));
// console.log(t.preOrderTraversal(t.root));
console.log(t.postOrderTraversal(t.root));
