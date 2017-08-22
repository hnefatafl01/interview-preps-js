function BST(){
  this.root = undefined;
}

function TreeNode(data) {
  this.data = data;
  this.left = undefined;
  this.right = undefined;
}

BST.prototype.insertNode = function(data) {
  var node = new TreeNode(data);
  if (this.root === undefined) {
    this.root = node;
  }
  var current = this.root;
  while(current) {
    if (data < current.data) {
      if (!current.left) {
        current.left = node;
        break;
      } else {
        current = current.left;
      }
    } else {
      if (!current.right) {
        current.right = node;
        break;
      } else {
        current = current.right;
      }
    }
  }
}

BST.prototype.preOrder = function(root) {
  console.log(root.data);
  if (root.left) {
    this.preOrder(root.left);
  }
  if (root.right) {
    this.preOrder(root.right);
  }
}

var bst = new BST();
bst.insertNode(10);
bst.insertNode(12);
bst.insertNode(5);
bst.insertNode(8);
bst.insertNode(11);
bst.insertNode(19);
bst.insertNode(15);
bst.insertNode(2);
bst.insertNode(18);
bst.insertNode(20);
console.log(bst);
console.log(bst.preOrder(bst.root));
