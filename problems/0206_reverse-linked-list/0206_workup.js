/*
reverse() {
    let listLength = this.length
    let i = listLength
    let tempNodePrev = this.tail.prev
    let tempNodeNext = null
    let currentNode = this.tail
    this.head.next = null
    this.head = this.tail
    while (i > 0) {
      if (tempNodeNext === null)  {
        console.log(`Starting conditions are: i = ${i}, tNP = ${tempNodePrev.value}, tNN = null, cN = ${currentNode.value}`)
      } else if (tempNodePrev === null) {
        console.log(`Starting conditions are: i = ${i}, tNP = null, tNN = ${tempNodeNext.value}, cN = ${currentNode.value}`)
      } else {
        console.log(`Starting conditions are: i = ${i}, tNP = ${tempNodePrev.value}, tNN = ${tempNodeNext.value}, cN = ${currentNode.value}`)
      }
      currentNode.next = tempNodePrev
      currentNode.prev = tempNodeNext
      tempNodeNext = currentNode
      currentNode = tempNodePrev
      if (tempNodePrev !== null) {
        console.log("tempNodePrev is not null: Updating")
        tempNodePrev = tempNodePrev.prev
      } 
      else {
        console.log("tempNodePrev is null")
      }
      this.length
      i--
    }
    return this.printList()
  }
*/



var reverseList = function(head) {
    let currentNode = head
    let prevNode = null
    let oldNext = null
    if (!head) {
        return null
    } else if (!head.next) {
        return head
    } else {
        while (currentNode) {
            oldNext = currentNode.next
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = oldNext
        }
    }
    return prevNode
};
// Passed. Faster than 18.18% of submissions. Less memory usage than 32.93% of submissions.



/*
Solution 02
*/


var reverseList = function(head) {
    let currentNode = head
    let prev = null
    while (currentNode) {
      let nextNode = currentNode.next
      currentNode.next = prev
      prev = currentNode
      currentNode = nextNode
    }
    return prev
};
