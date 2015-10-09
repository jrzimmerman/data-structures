var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.beginning = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if( this.count > 0 ) {
    this.count--;
  }
  var temp = this.storage[this.beginning];
  delete this.storage[this.beginning];
  this.beginning++;
  return temp;
}

Queue.prototype.size = function(){
  return this.count;
};
