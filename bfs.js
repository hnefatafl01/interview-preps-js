function Queue() {
  this.count = 0;
  this.front = undefined;
  this.rear = undefined;
}

function Node(data) {
  this.data = data;
  this.next = undefined;
  this.prev = undefined;
}

Queue.prototype.enqueue = function(data) {
  var tmp = new Node(data);
  if (!this.front) {
    this.front = this.rear = tmp;
  }
  this.rear.next = tmp
  tmp.prev = this.rear;
  this.rear = tmp;
  this.count++;
  return this.count;
}

Queue.prototype.dequeue = function() {
  var tmp = this.front;
  if (!this.front) {
    return undefined;
  }
  this.front = this.front.next;
  tmp.next = undefined;
  if (!this.front) {
    this.rear = undefined;
  }
  this.count--;
  return tmp.data;
}

Queue.prototype.isEmpty = function() {
  if (!this.front) {
    return true;
  }
  return false;
}

function BST() {
  this.root = undefined;
}

function TreeNode(data) {
  this.data = data;
  this.right = undefined;
  this.left = undefined;
}

BST.prototype.insertNode = function(data) {
  var node = new TreeNode(data);
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
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

BST.prototype.breadthFirstSearch = function(root){
  var q = new Queue();
  root.visited = true;
  q.enqueue(root);
  while (!q.isEmpty()) {
    var r = q.dequeue();
    var n = new TreeNode(r);
    console.log(n.data);
    if (n.left !== undefined) {
      if (n.left.visited === false) {
        n.left.visited = true;
        q.enqueue(n.left);
      }
    }
    if (n.right !== undefined) {
      if (n.right.visited === false) {
        n.right.visited = true;
        q.enqueue(n.right);
      }
    }
  }
}

var bst = new BST();
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(23);
bst.insertNode(7);
bst.insertNode(55);
bst.insertNode(3);

// console.log(bst);
bst.breadthFirstSearch(bst.root);
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
//
// console.log(q);
