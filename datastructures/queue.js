function Queue(front) {
    this.front = front;
    this.rear = undefined;
    this.length = 0;
}

function Node(data) {
    this.data = data;
    this.next = undefined;
    this.prev = undefined;
}

Queue.prototype.enqueue = function(data) {
    const tmp = new Node(data);
    if (!this.front) {
        this.front = this.rear = tmp;
    }
    this.rear.next = tmp;
    this.rear = this.rear.next
    this.length++;
    return this.length;
}

Queue.prototype.dequeue = function() {
    if (!this.front) {
        return undefined;
    }
    const tmp = this.front;
    this.front = this.front.next;
    return tmp.data;
}

Queue.prototype.Print = function() {
    let current = this.front;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

const q = new Queue();

console.log(q.enqueue('a'));
console.log(q.enqueue('b'));
console.log(q.enqueue('c'));
console.log(q.enqueue('d'));
console.log(q.enqueue('e'));
// q.Print();
console.log('dequeue', q.dequeue());
console.log('dequeue', q.dequeue());
console.log('dequeue', q.dequeue());
console.log('dequeue', q.dequeue());
console.log('dequeue', q.dequeue());
console.log('Print', q.Print());