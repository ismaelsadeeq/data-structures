class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null,
    this.size = 0
  }
  //Setter
  add(element){
    let node = new Node(element);
    let current;
    if (this.head == null){
      this.head = node;
    }
    else {
      current  = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++
  }
  insertAt(element,index){
    if(index< 0 || index > this.size){
      return false
    }else{
      let node = new Node(element);
      let curr,prev;
      curr = this.head;
      if(index ==0){
        node.next = this.head;
        this.head = node;
      }else{
        let it = 0;
        while(it<index){
          it++;
          prev = curr;
          curr = curr.next
        }
        node.next = curr;
        prev.next = node;
      }
      this.size ++
    }
  }
  //Getters
  first(){
    if(this.head == null){
      return null
    }else{
      return this.head.element
    }
  }
  rest(){
    if(this.head == null){
      return null
    }else{
      return this.head.next
    }
  }
  lastItem(){
    let current;
    if (this.head == null){
      return null
    }
    else {
      current  = this.head;
      while (current.next){
        current = current.next;
      }
      return current.element
    }
  }
  indexOf(element){
    let theIndex=-1;
    let current;
    if (this.head == null){
      return null
    }
    else {
      current  = this.head;
      while (current.element ==! element){
        theIndex++;
        current = current.next;
      }
    }
    return theIndex;
  }
  isEmpty(){
    return this.size == 0;
  }
  size_of(){
    return this.size;
  }
  //Modifiers
  replaceFirst(element){
    if(this.head == null){
      return element
    }else{
      return this.head.element = element
    }
  }
  replaceRest(list){
    if(this.head == null){
      return null
    }else{

      return this.head.next = list
      
    }
  }
  removeElement(element){
    let current = this.head;
    let prev = null;

    while(current != null){
      if(current.element === element){
        if (prev == null){
          this.head = current.next;
        }else{
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next
    }
    return -1;
  }
}
let mList = new LinkedList()
mList.add(1);
mList.add(2);
mList.add(3);
console.log(mList.first());
console.log(mList.rest());
console.log(mList.lastItem());
mList.insertAt(4,3)
console.log(mList.lastItem());
