/*
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.
 
Example 1:
Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:
Input: root = []
Output: 0

Example 3:
Input: root = [1]
Output: 1
 
Constraints:
The number of nodes in the tree is in the range [0, 5 * 10**4].
0 <= Node.val <= 5 * 10**4
The tree is guaranteed to be complete.
*/
  
var countNodes = function(root) {
  if (!root) {
      return 0
  };
  const height = getTreeHeight(root);
  if (height === 0) {
    return 1
  };
  const upperCount = Math.pow(2, height) - 1
  let left = 0
  let right = upperCount;
  while (left < right) {
    const targetIndex = Math.ceil((left + right) / 2);
    if (nodeExists(targetIndex, height, root)) {
      left = targetIndex;
    } else {
      right = targetIndex - 1;
    }
  }
  return upperCount + left + 1;
};

const getTreeHeight = function(root) {
  let height = 0;
  while (root.left !== null) {
    height++;
    root = root.left;
  }
  return height;
}
  
const nodeExists = function(targetIndex, height, node) {
  let left = 0
  let right = Math.pow(2, height) - 1
  let count = 0;
  while (count < height) {
    const midpoint = Math.ceil((left + right) / 2);
    if (targetIndex >= midpoint) {
      node = node.right;
      left = midpoint;
    } else {
      node = node.left;
      right = midpoint - 1;
    }
    count++;
  }
  return node !== null;
}
// Passed. Faster than 15.84% of submissions. Less memory usage than 29.60% of submissions.