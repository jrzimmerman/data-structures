var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  // your code here
  newTree.children = [];

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  // var child = Tree(value);
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
       var current = this.children[i].contains(target);
       if(current) {
        return true;
       }
    }
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */