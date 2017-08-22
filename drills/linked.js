"use strict";
function LinkedList(){
  this.size = 0;
  this.head = undefined;
  this.tail = undefined;
}
function Node(data) {
  this.data = data;
  this.next = undefined;
  this.prev = undefined;
}
LinkedList.prototype.insert = function(data){
  var temp = new Node(data);
  if (!this.head) {
    this.head = this.tail = temp;
  }
  temp.next = this.head;
  this.head.prev = temp;
  this.head = temp;
  this.size++;
  return this.size;
}
LinkedList.prototype.delete = function(){
  if (this.head === undefined) {
    return undefined;
  }
  var temp = this.head;
  this.head = this.head.next;
  this.count--;
  return temp.data;
}

var list = new LinkedList();
console.log(list.insert(10));
console.log(list.insert(30));
console.log(list.insert(20));
console.log(list.insert(40));
console.log(list.delete());
console.log(list.delete());
console.log(list.delete());
console.log(list.delete());
console.log(list.delete());
