/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/

var levelOrder = function(root) {
  const result = [];
  const queue = [root];
  if (!root) {
      return []
  };
  while (queue.length) {
    let currentLevelValues = [];
    let length = queue.length
    let count = 0;
    while (count < length) {
      const currentNode = queue.shift();
      currentLevelValues.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
      count++;
    }
    result.push(currentLevelValues);
  }
  return result;
};
// Passed. Faster than 6.74% of submissions. Less memory usage than 94.30% of submissions.