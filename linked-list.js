/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)

    if (this.head === null){
      this.head = newNode;
      this.tail = this.head
    }

    else  {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length += 1

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)

    if (this.head === null){
      this.head = newNode;
    }

    else  {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
  
    return this.removeAt(this.length - 1)
  }

  /** shift(): return & remove first item. */

  shift() {
    
    return this.removeAt(0)

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head
    let count = 0

    while(count < idx)  {
      current = current.next
    }

    return current.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head
    let count = 0

    while(count < idx)  {
      current = current.next
    }

    current.val = val
    return current
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val)
    let current = this.head
    let count = 0

    if (current === null)
    {
      return null
    }

    while (count < (idx - 1))  {
      current = current.next
    }

    let nextNode = current.next
    newNode.next = nextNode
    current.next = newNode
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head
    let count = 0

    if (current === null)
    {
      return null
    }

    while(count < (idx -1))  {
      current = current.next
    }

    let nextNode = current.next
    current.next = nextNode.next
    nextNode = null
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head
    let amount = []

    while( current.val !== null)  {
      amount.push(current.val)
      current = current.next
    }
    return Math.average(amount)
  }
}

