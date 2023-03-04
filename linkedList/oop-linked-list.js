
class Node {

    constructor(value, next = null) {
        this.value = value
        this.next = next

    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }
    append(value) {
        const node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
    }

    prepend(value) {
        const node = new Node(value, this.head)
        this.head = node
        this.length++
    }
    print() {
        let data = this.head
        while (data) {
            data = data.next
        }
        console.log(this.length)
    }
    appendAt(value, position) {
        if (position == 1) {
            this.prepend(value)
        } else if (position == this.length + 1) {
            this.append(value)
        } else {
            let newNode = new Node(value)
            let preNode = this.findNode(position - 1)
            newNode.next = preNode.next
            preNode.next = newNode
            this.length++
        }
    }
    findNode(num) {
        let count = 1
        let data = this.head
        while (data) {
            if (count == num) break
            data = data.next
            count++;
        }
        return data
    }
    deleteNode(position) {
        let preNode = this.findNode(position - 1)
        preNode.next = preNode.next.next
        this.length--
    }
    updateNode(position, value) {
        let newNode = this.findNode(position)
        newNode.value = value
    }
}

const result = new LinkedList(100)
result.append(200)
result.append(300)
result.prepend(40)
// result.appendAt(13, 1)
// result.appendAt(23, 6)
// result.appendAt(2, 2)
// result.deleteNode(3)
// result.deleteNode(2)
result.updateNode(1, 44)
// result.print()
// result.append(400)
console.log(result)