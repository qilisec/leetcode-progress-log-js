//  Set up function that counts the number of nodes present in the complete binary tree
var countNodes = function(root) {
  // Null case: Tree has no roots
  if (!root) {
      return 0
  };
  // Calculate the number of levels present in this tree using a subfunction and assign it to a variable
  const height = getTreeHeight(root);
  if (height === 0) {
    return 1
  };
  // Calculate the sum of the number of nodes present in each of the levels before the last.
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

// Set up subfunction that traverses the tree and identifies the number of levels present.
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