// Add extra parameter "currentDepth" and assign it a default value of 0
var maxDepth = function(root, currentDepth = 0) {
  // Null case: If there is no root/node, then current depth = 0
  if (!root) {
    return currentDepth;
  }
  // If root/node exists, increase current depth level
  currentDepth++;
  // Use recursion to go down left and right children of root until no further nodes with children exist.
  return Math.max(maxDepth(root.right, currentDepth), maxDepth(root.left, currentDepth));
};
// Passed. Faster than 96.97% of submissions. Less memory usage than 30.36% of submissions.