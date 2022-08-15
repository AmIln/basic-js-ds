const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null;
    //root = null;
    this.left = null;
    this.right = null;
  }
  root() {
    //throw new NotImplementedError('Not implemented');
    return this.data
    // remove line with error and write your code here
  }

  add(value) {
    this.data = addWithin(this.data, value);
    function addWithin(node, value) {
      if(!node) {
        return new Node(value);
      }
      
      if (node.value === value) {
        return node
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node
    }

  }

  has(value) {
    //throw new NotImplementedError('Not implemented');
    return searchWithin(this.data, value);

    function searchWithin (node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true
      }

      return value < node.value ?
        searchWithin(node.left, value) :
        searchWithin(node.right, value);
    }
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.data = removeNode(this.data, value);
    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
      }

      if (!node.left) {
        node.node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.value = minFromRight.value;

      node.right = removeNode(node.right, minFromRight.value);

      return node
    }
  }

  min(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.data) {
      return;
    }
    let node = this.data;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.data) {
      return;
    }
    let node = this.data;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};