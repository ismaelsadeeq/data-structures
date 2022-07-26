class Node {
  constructor(element){
    this.element =  element;
    this.next = null;
  }
}
class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  add(element){
    let node = new Node(element);
    let current;
    if(this.head == null){
      this.head = node
    } else {
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node
    }
    this.size ++
  }
  first(){
    if(this.head != null){
      return this.head.element
    }
  }
}
let myList = new LinkedList();
myList.add(5)
myList.add(3)
console.log(myList);
console.log(myList.first())
