
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
}

