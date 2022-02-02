/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
 
Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

Follow up: Could you do it in one pass?
*/

var reverseBetween = function(head, left, right) {
  let i = 1
  let currentNode = head;
  let preReverse = head;  
  while (i < left) {
    preReverse = currentNode;
    currentNode = currentNode.next;
    i++;
  }
  let reversedSection = null
  let postReverse = currentNode;
  while (i >= left && i <= right) {
    const next = currentNode.next;
    currentNode.next = reversedSection;
    reversedSection = currentNode;
    currentNode = next;
    i++;
  }
  preReverse.next = reversedSection;
  postReverse.next = currentNode;
  if (left > 1) {
    return head
  } else {
    return reversedSection;
  }
};
// Passed. Faster than 79.12% of submissions. Less memory usage than 31.25% of submissions.