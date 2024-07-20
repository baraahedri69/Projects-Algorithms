class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Add a node to the front of the list
    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // Remove the head node and return the new head node
    removeFront() {
        if (this.head === null) {
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }

    // Return the value at the head of the list
    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }

    // Check if the list contains a node with the given value
    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}
