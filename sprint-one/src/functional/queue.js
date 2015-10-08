var Queue = function(){
  var someInstance = {};
  var total = 0; // length of queue
  var beginning = 0; // head
  var end = 0; // tail

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
    total++;
  };

  someInstance.dequeue = function(){
    if( total > 0){
      total--;
    }
    var temp = storage[beginning];
    delete storage[beginning];
    beginning++;
    return temp;
  };

  someInstance.size = function(){
    return total;
  };

  return someInstance;
};
