function LinkedList(head) {
    this.head = head;
    this.tail = this.head;
    this.count = 0;
}

function Node(data) {
    this.data = data;
    this.next = undefined;
}

LinkedList.prototype.Push = function(data) {
    const tmp = new Node(data);

    if (!this.head) {
        this.head = this.tail = tmp;
    }
    this.tail.next = tmp;
    this.tail = this.tail.next;
    this.count++;
    return this.count;
}

LinkedList.prototype.PrintNodes = function() {
    if (!this.head) {
        return undefined;
    }
    var current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

LinkedList.prototype.Pop = function() {
    if (!this.tail) {
        return undefined;
    }
    let tmp = this.tail;
    let current = this.head;
    while (current.next !== this.tail) {
        current = current.next;
        console.log('current', current)
        if (current.next === this.tail) {
            current.next = undefined;
            this.tail = current;
        }
    }
    return tmp.data;
}

const list = new LinkedList();

console.log(list.Push('a'));
console.log(list.Push('b'));
console.log(list.Push('c'));
list.PrintNodes();
list.Pop();
list.PrintNodes();