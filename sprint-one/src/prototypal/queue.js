var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.storage = {};
  obj.beginning = 0;
  obj.end = 0;
  return obj;
};

  var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
  this.count++;
}

queueMethods.dequeue = function(){
  if( this.count > 0 ) {
    this.count--;
  }
  var temp = this.storage[this.beginning];
  delete this.storage[this.beginning];
  this.beginning++;
  return temp;
}

queueMethods.size = function(){
  return this.count;
}


