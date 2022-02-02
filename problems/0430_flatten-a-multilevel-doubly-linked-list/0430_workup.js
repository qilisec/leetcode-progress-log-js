var flatten = function (head) {
  // Set up variables to traverse linked list
  let currentNode = head;
  // Optimize for when linked list contains no nodes
  if (!head) {
    return head
  };
  // Set up while-loop to traverse linked list.
  while (currentNode !== null) {
    // Set up conditional for base case: The current node does not have a child.
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      // Set up conditional for alternate: The current node does have a child. Create a variable to access this child node.
      let flattened = currentNode.child;
      while (flattened.next !== null) {
        // Set up while-loop to traverse through child's linked list using our new variable. We disregard any child nodes on this traversal because otherwise, we would have to keep track of which "child-bearing" nodes we have already "explored" in order to prevent infinite loops. We will try to decrease the number of "layers" with each loop.
        flattened = flattened.next;
      }
      // Detach the post-child nodes from the current child-bearing node and attach it to the end of the linked list on the "child" layer. This essentially decreases the number of layers present.
      flattened.next = currentNode.next;
      // Update the "prev" of the first node on the post-child sub-list to match the new linkages.
      if (flattened.next !== null) {
        flattened.next.prev = flattened;
      }
      // Update the "next" of the current node to account for this shift in linkages as well as the "prev" of the child node. Finally, erase the existing "child" property of the current node. The while loop can now enter another cycle.
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  // Return flattened linked list
  return head;
};
// Passed. Faster than 21.03% of submissions. Less memory usage than 84.44% of submissions.