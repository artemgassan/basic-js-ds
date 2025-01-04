const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.mySteck = [];
  }
  push(element) {
    this.mySteck.push(element);
  }

  pop() {
    return this.mySteck.pop();
  }

  peek() {
    return this.mySteck[this.mySteck.length - 1];
  }
}

module.exports = {
  Stack
};
