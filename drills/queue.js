function Queue(){
  this.head = undefined;
  this.tail = undefined;
  this.size = 0;
}
function Node(data) {
  this.data = data;
  this.next = undefined;
  this.prev = undefined;
}
Queue.prototype.enqueue = function(data) {
  var temp = new Node(data);
  if (this.head === undefined) {
    this.head = this.tail = temp;
  }
  this.tail.next = temp;
  temp.prev = this.tail;
  this.tail = temp;
  this.size++;
  return this.size;
}

Queue.prototype.dequeue = function() {
  if (this.head === undefined) {
    this.tail = this.head;
    return undefined;
  }
  var temp = this.head;
  this.head = this.head.next;
  return temp.data;
}

Queue.prototype.printAll = function() {
  var current = this.head;
  while(current !== undefined) {
    console.log(current.data);
    current = current.next;
  }
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.enqueue("e");
q.enqueue("f");
q.printAll();
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
