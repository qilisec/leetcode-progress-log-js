var hasCycle = function(head) {
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
};
// Failed (runtime error) due to "cannot read property next of null" on "while (fast.next && fast.next.next)"

var hasCycle = function(head) {
    if (!head) {
        return false
    }
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
};
// Passed; Faster than 5.11% of submissions, Less memory usage than 56.82% of submissions. It seems that there is a constant time solution whereas my solution seems to be O(n^2).

var hasCycle = function(head) {
    let r1 = head, r2 = head;
    while (r1 && r1.next) {
        r1 = r1.next.next;
        r2 = r2.next;
        if (r1 == r2) {
            return true;
        }
    } 
    return false;
};
// Passed. Taken from discussion. Faster than 61.23% of submissions; Less memory usage than 85.5% of submissions. Only difference between my solution and this one is the "while" conditional. I think my choice of "fast.next && fast.next.next" requires the JS engine to perform an extra "next" operation which slows my function down. However, this solution doesn't seem to be O(1) either.

var hasCycle = function(head) {
    if (!head){
        return false 
    }
    else if (!head.next){
        return false
    }
	let p1 = head
    let p2 = head
    while (p2) {
        p1 = p1.next
        p2.next ? p2 = p2.next.next : p2 = null
        if (p1 === p2){
            return true
        }
    }
    return false
};
// Passed. Taken from discussion. Faster than 11.23% of submissions. Less memory usage than 98.96% of submissions. The contributor of this solution claims this to be an O(1) solution. That indicates that my solution was also O(1) (as well as the second solution). I'm not sure why this is considering the presence of a "while" loop