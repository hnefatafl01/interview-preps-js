"use strict";

function Stack() {
  this.top = undefined;
  this.count = 0;
}

function Node(data) {
  this.data = data;
  this.next = undefined;
}

Stack.prototype.push = function(data) {
  var temp = new Node(data);
  if (this.isEmpty()) {
    this.top = temp;
  }
  temp.next = this.top;
  this.top = temp;
  this.count++;
  return this.count;
}

Stack.prototype.pop = function() {
  if (this.isEmpty()) {
    return undefined;
  } else {
      var data = this.top.data;
      this.top = this.top.next;
      this.count--;
      return data;
  }

}

Stack.prototype.printAll = function() {
  var current = this.top;
  while (current.next !== undefined) {
    current = current.next;
    console.log(current.data);
  }
}

Stack.prototype.isEmpty = function(){
  if (this.top === undefined) {
    return true;
  }
  return false;
}

var s = new Stack();
// s.push("a");
// s.push("b");
// s.push("c");
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
console.log(s.pop());
console.log(s)
// s.printAll();
