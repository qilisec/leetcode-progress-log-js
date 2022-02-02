var reverseBetween = function(head, left, right) {
  // Set up variables for non-reversed section. Note that head is given position "1" by leetcode instead of "0".
  let i = 1
  let currentNode = head;
  let preReverse = head;
  // Set up while-loop to traverse through non-reversed section until start of reversal
  while (i < left) {
    preReverse = currentNode;
    currentNode = currentNode.next;
    i++;
  }
  // Set up variables to create new linked list that is the reverse of the sublist delineated by left and right. Also store the node that begins the "post-reverse" section of the original linked list.
  let reversedSection = null
  let postReverse = currentNode;
  // Set up while-loop to build the reversed linked list
  while (i >= left && i <= right) {
    const next = currentNode.next;
    currentNode.next = reversedSection;
    reversedSection = currentNode;
    currentNode = next;
    i++;
  }
  // Connect the "pre-reversed" section to the reversed linked list and then connect the reversed linked list to the "post-reversed" section
  preReverse.next = reversedSection;
  postReverse.next = currentNode;
  // Return the new linked list with addiiton of optimization for when reversal starts at head.
  if (left > 1) {
    return head
  } else {
    return reversedSection;
  }
};
// Passed. Faster than 79.12% of submissions. Less memory usage than 31.25% of submissions.