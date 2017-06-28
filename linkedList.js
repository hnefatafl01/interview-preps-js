// Singly Linked List
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.currentNode = null;

  this.add = function (data){
    if (head == undefined) {
      var head = new Node(data);
      var tail = head;
      var currentNode = head;
      head.next = null;
      return head;
    } else {
      var newNode = new Node(data);
      var tail = newNode;
      var currentNode = newNode;
      head.next = newNode;
      newNode.next = null;
      return newNode.data;
    }
  }

  this.printNodes = function(){
    if (head == undefined) {
      return -1;
    }
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      console.log(currentNode);
    }
  }
}

var list = new LinkedList();
// console.log(list)
// console.log(list.add(10));
list.add(10);
console.log(list);
// console.log(list.add(133));
console.log(list.printNodes());
