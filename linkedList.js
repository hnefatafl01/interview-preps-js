function Node(data) {
  this.data = data;
  this.next = undefined;
  this.prev = undefined;
}

function LinkedList() {
  this.head = undefined;
  this.tail = undefined;
  this.count = 0;
}

LinkedList.prototype.add = function(data){
  var temp = new Node(data);
  if (this.head === undefined){
    this.head = this.tail = temp;
    this.head.next = undefined;
  } else {
    this.tail.next = temp;
    temp.prev = this.tail;
    this.tail = temp;
    temp.next = undefined;
  }
  this.count++;
  return this.count;
}

LinkedList.prototype.remove = function() {
  if (this.tail === undefined) {
    return "empty";
  } else if (this.tail === this.head) {
    this.tail = this.head = null;
  } else {
    var temp = this.tail.prev;
    temp.next = undefined;
    this.tail.prev = undefined;
    this.tail = temp;
  }
  this.count--;
  return this.count;
}

LinkedList.prototype.printNodes = function(){
  var current = this.head;
  while(current !== undefined) {
    console.log(current.data);
    current = current.next;
  }
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.remove();
list.add(4);
// console.log(list.add(5));

list.printNodes();
