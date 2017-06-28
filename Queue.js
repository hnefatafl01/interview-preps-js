function Queue(){
  this.count = 0;
  this.head = undefined;
  this.tail = undefined;
}

function Node(data){
  this.data = data;
  this.next = undefined;
  this.prev = undefined;
}

Queue.prototype.isEmpty = function() {
  if (this.head === undefined) {
    return true;
  }
  return false;
}

Queue.prototype.enqueue = function(data){
  var temp = new Node(data);
  if (this.head === undefined){
    this.head = this.tail = temp;
    this.count = 1;
  } else {
    this.tail.next = temp;
    temp.prev = this.tail;
    this.tail = temp;
    this.tail.next = undefined;
    this.count++;
  }
  return "Queue length is: " + this.count;
};

Queue.prototype.dequeue = function(){
  if (this.head === undefined){
    this.tail = undefined;
    return "Empty Queue";
  } else {
    var temp = this.head;
    this.head = this.head.next;
    temp.prev = undefined;
    temp.next = undefined;
    return temp.data;
  }
};

Queue.prototype.peek = function() {
  if (this.head !== undefined) {
    return this.head.data;
  } else {
    return undefined;
  }
}

var q = new Queue();

console.log(q.isEmpty());
console.log(q.enqueue(10));
console.log(q.enqueue(3));
console.log(q.enqueue(4));
console.log(q.dequeue());
console.log("new head: ",q.peek());
console.log(q.dequeue());
console.log("new head: ",q.peek());
console.log(q.dequeue());
console.log("new head: ",q.peek());
console.log(q.isEmpty());
