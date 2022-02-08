/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

var rightSideView = function(root) {
  const result = [];
  dfs(root, 0, result);
  return result;
};

const dfs = function(node, currentLevel, result) {
  if (!node) {
      return
  };
  if (currentLevel >= result.length) {
    result.push(node.val);
  }
  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
  }
  if (node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
}
// Passed. Faster than 95.74% of submissions. Less memory usage than 25.17% of submissions.