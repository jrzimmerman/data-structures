var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.count = 0;
  obj.storage = {};

  obj.enqueue = queueMethods.enqueue;
  obj.size = queueMethods.size;

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.size = function() {
  return this.count;
};


