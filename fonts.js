
class RiffNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Riff {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new RiffNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head
    }

    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        var deletedNode = this.head;
        this.head = deletedNode.next;
        deletedNode.next = null;
        return this.head;
    }
}

var myRiff = new Riff();
myRiff.addFront(10);
myRiff.removeFront();
console.log(myRiff)

