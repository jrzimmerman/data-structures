var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //if list is empty create new node for tail
    if( list.head === null ){
      list.tail = Node(value);
      // set head to tail
      list.head = list.tail;
    } else {
      // store previous node
      var previous = list.tail;
      //create new node
      list.tail = Node(value);
      //set previous node's next to equal new tail
      previous.next = list.tail;
    }
  };

  list.removeHead = function(){
    // store previous head node
    var prevHead = list.head;
    // if list.head was last node in list
    if(prevHead.next === null) {
      //return last nodes value
      return list.tail.value;
    }
    // set new head to next node
    list.head = prevHead.next; // !?!?!?!
    return prevHead.value;
  };

  list.contains = function(target){
    // set list.head to currentNode
    var currentNode = list.head;
    while(currentNode) {
      // check current nodes value
      if( currentNode.value === target ) {
        // if equal to target return true
        return true;
      }
      // otherwise keep cycling through linked list
      currentNode = currentNode.next; // !?!?!?!
    }
    // if list is finished and target is not found return false
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
