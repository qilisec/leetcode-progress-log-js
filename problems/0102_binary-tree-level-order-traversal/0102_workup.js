var levelOrder = function(root) {
  // Create results array and queue variables
  const result = [];
  const queue = [root];
  // Null case: If there is no initial root, then there are no values.
  if (!root) {
      return []
  };
  // Create while-loop which terminates when queue is fully empty.
  while (queue.length) {
    /* The plan: Queue up all child roots/nodes of roots/nodes on this level. This is achieved by noting how many elements are present in the queue prior to recording any information on nodes at a given level. This number of elements is the number of roots/nodes on the previous level. We then take the first element of the queue and "scan" it for its value, which is placed in a "local" values array as well as its children roots, which are added to the queue. When we have looked at all of the roots in the queue initially present, we have scanned all of the nodes of that level. The values stored in the local values array are then pushed into the "global" results array.
    */
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