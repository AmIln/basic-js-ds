const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArray = [],
  obj = {};
  function rem(l,k) {
    if (l.value != k) {
      newArray.push(l.value)
    }
    if (l.next != null) {
      rem(l.next,k)
    }
  }
  rem(l,k)
  let number = newArray.length-1,
  count = 0;
  function newObj(obj, arr, count) {
    obj.value = arr[count];
    obj.next = {};
    count++
    if (count <= number) {
      newObj(obj.next, arr, count)
    } else {
      obj.next = null
    }
  }
  newObj(obj, newArray, count)
  return obj
}

module.exports = {
  removeKFromList
};
