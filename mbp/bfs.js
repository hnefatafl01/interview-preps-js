function BinarySearchTree(root) {
    this.root = root;   
}

function TreeNode(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
}

BinarySearchTree.prototype.InsertNode = function(data) {
    const tmp = new TreeNode(data);
    if (!this.root) {
        this.root = tmp;
    }
    let current = this.root;
    while (current) {
        if (data < current.data) {
            if (!current.left) {
                current.left = tmp;
            } else {
                current = current.left;
                break;
            }
        } else {
            if (!current.right) {
                current.right = tmp;
            } else {
                current = current.right;
                break;
            }
        }
    }
}

BinarySearchTree.prototype.breadthFirst = function(root) {
    const queue = [root];
    let current = queue.shift();
    console.log(current.data);
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
}

const tree = new BinarySearchTree();
tree.InsertNode(10);
tree.InsertNode(8);
tree.InsertNode(11);
tree.InsertNode(7);
tree.InsertNode(12);
tree.InsertNode(6);
tree.InsertNode(13);
console.log(tree);
tree.breadthFirst(tree.root);