const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    }
    else {
      this.#addNode(this.rootNode, newNode);
    }
  }

  #addNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left) {
        this.#addNode(node.left, newNode);
      }
      else {
        node.left = newNode;
      }
    }
    else {
      if (node.right) {
        this.#addNode(node.right, newNode)
      } else {
        node.right = newNode
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = this.#removeNode(this.rootNode, data);
  }

  #removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.#removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.#removeNode(node.right, data)
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = this.#removeNode(node.right, minRight.data)
      return node;
    }
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      }
      else {
        return currentNode.data;
      }
    }
    return null;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.right) {
        currentNode = currentNode.right;
      }
      else {
        return currentNode.data;
      }
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree
};