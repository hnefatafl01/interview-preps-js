function BinaryTree(root) {
    this.root = root;
}

function TreeNode(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
}

BinaryTree.prototype.InsertNode = function(data) {
    const tmp = new TreeNode(data);
    if (!this.root) {
        this.root = tmp;
        return this.root.data;
    }
    var current = this.root;
    while (current) {
        if (data < current.data) {
            if (!current.left) {
                current.left = tmp;
                break;
            } else {
                current = current.left;
            }
        } else {
            if (!current.right) {
                current.right = tmp;
                break;
            } else {
                current = current.right;
            }
        } 
    }
}

BinaryTree.prototype.breadthFirst = function(root) {
    const queue = [root];
    while (queue.length > 0) {
        var current = queue.shift();
        console.log(current.data);
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }
}

BinaryTree.prototype.PreOrder = function(root, search) {
    const findVal = search;
    const current = root;
    if (findVal === current.data) {
        console.log(`success ${current.data} found!`);
        return `success ${current.data} found!`;
    } else {
        if (current.left) {
            this.PreOrder(current.left, findVal);
        }
        if (current.right) {
            this.PreOrder(current.right, findVal);
        }
    }
    return `${findVal} not found`;
}

const tree = new BinaryTree();
tree.InsertNode(10);
tree.InsertNode(8);
tree.InsertNode(11);
tree.InsertNode(7);
tree.InsertNode(12);
tree.InsertNode(6);
tree.InsertNode(13);
tree.PreOrder(tree.root, 20);
tree.PreOrder(tree.root, 13);
// tree.breadthFirst(tree.root);