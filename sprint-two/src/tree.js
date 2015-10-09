var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  // your code here
  newTree.children = [];  // think this an array

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(value);

};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
