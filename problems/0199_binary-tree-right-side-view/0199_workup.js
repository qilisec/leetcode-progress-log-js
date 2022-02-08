// Set up function to initialize the right side search
var rightSideView = function(root) {
  // Create variable to store root values
  const result = [];
  // Initialize dfs
  dfs(root, 0, result);
  return result;
};

// Set up depth-first search
const dfs = function(node, currentLevel, result) {
  // Null case: If no nodes exist, then result is an empty array
  if (!node) {
      return
  };
  // Add current node's value to results. However, for each level, we only add at most one node value, which will preferentially be the right child of the previous parent node. The only time the node value is obtained from a left child is if the related parent node doesn't have a right child node.
  if (currentLevel >= result.length) {
    result.push(node.val);
  }
  // Set up the preference for the right child node for the next recursion of DFS
  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
  }
  // Set up the alternate left child node  for the next recursion of DFS
  if (node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
}
// Passed. Faster than 95.74% of submissions. Less memory usage than 25.17% of submissions.