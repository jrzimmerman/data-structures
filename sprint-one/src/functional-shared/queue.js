var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.count = 0; // track length
  obj.beginning = 0; // track front of queue
  obj.end = 0; // track end of queue

  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.count++;
  this.end++;
};

queueMethods.dequeue = function(){
  if( this.count > 0){
  this.count--;
  }
  var temp = this.storage[this.beginning];
  delete this.storage[this.beginning];
  this.beginning++;
  return temp;
}

queueMethods.size = function() {
  return this.count;
};


