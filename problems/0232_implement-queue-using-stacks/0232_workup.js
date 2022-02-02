class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(val) {
    this.stack1.push(val);
  }
  pop() {
    if (this.stack2.length === 0) {
      while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  peek() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1];
  }
  empty() {
      this.stack1.length = 0
      this.stack2.length = 0;
      return this.stack1 && this.stack2
  }
};
// Failed on ["MyQueue","empty"], [[],[]]. The expected output was "[null, false]" whereas my produced output was "[null, true]". I misread the functionality of "empty". I thought it was supposed to clear out the queue.

class MyQueue {
  // Set up constructor function
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  // Queue push is the same as stack push. Place new elements into stack1
  push(val) {
    this.stack1.push(val);
  }
  // Queue pop removes earliest element placed in queue. Stack pop removes latest element placed in stack. We move elements from stack1 to stack2 by popping from stack1. This causes the earliest element of stack1 to become the latest element of stack2, which we can then pop. If there are already elements in stack2, then we can skip the transfer from stack1 to stack2 since the elements in stack2 must have come from a prior "pop" attempt.
  pop() {
    if (this.stack2.length === 0) {
      while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  // Queue peek returns the next element to be popped, which is the earliest element placed in queue. This requires the same setup as "pop" but without the last "pop" step.
  peek() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1];
  }
  // Create conditional to check if the two stacks are empty.
  empty() {
      if (this.stack1.length === 0 && this.stack2.length === 0) {
          return true
      } else {
          return false
      }
  }
};
// Passed. Faster than 29.02% of submissions. Less memory usage than 66.32% of submissions.