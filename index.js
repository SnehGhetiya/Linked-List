// Node class with properties
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// Linked List class with properties and methods
class LinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  
  //append the value at the end of the list
  append(value){
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  //append the value at the start of the list
  prepend(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  //loop through the list and print it as an array
  printList(){
    let currentNode = this.head;
    let arr = [];
    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  //insert the value at the given index in the list
  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }
    let newNode = new Node(value);
    let previousNode = this.findPreviousNode(index - 1);
    let tempNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = tempNode;
    this.length++;
    return this.printList();
  }

  //method to find the previous node of the passed index
  findPreviousNode(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //remove the node from the given index in the list
  remove(index){
    if(index > this.length){
      return null;
    }
    let previousNode = this.findPreviousNode(index - 1);
    previousNode.next = previousNode.next.next;
    this.length--;
    return this.printList();
  }

  //reverse the list of nodes
	reverse() {
		let previousNode = null;
		let currentNode = this.head;
		let nextNode = null;
		while (currentNode !== null) {
			nextNode = currentNode.next;
			currentNode.next = previousNode;
			previousNode = currentNode;
			currentNode = nextNode;
		}
		this.head = previousNode;
		return this.printList();
	}
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.insert(2, 22);
linkedList.remove(2);
linkedList.reverse();