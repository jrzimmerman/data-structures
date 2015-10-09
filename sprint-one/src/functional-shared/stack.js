var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {};
  obj.count = 0;
  obj.storage = {};

  // calls to methods
  obj.push = stackMethods.push;
  obj.size = stackMethods.size;
  obj.pop = stackMethods.pop;
  return obj;

};

var stackMethods = {};
// push
stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};
// pop
stackMethods.pop = function(){
  if( this.count > 0 ) {
    this.count--;  
  }
  return this.storage[this.count];
}

// size
stackMethods.size = function(){
  return this.count;
};
