/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 10**4
s consists of parentheses only '()[]{}'.
*/

var isValid = function(s) {
    const unpaired = [];
    const parensPairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    if (s.length === 0) {
        return true;
    }
    for (let i = 0; i < s.length; i++) {
      if (parensPairs[s[i]]) {
        unpaired.push(s[i]);
      } else {
        const nextNeedToPair = unpaired.pop();
        const pairSuccess = parensPairs[nextNeedToPair];
        if (s[i] !== pairSuccess) {
            return false
        }
      }
    }
    return unpaired.length === 0;
}
// Passed; Faster than 32.91% of submissions. Less memory usage than 78.67% of submissions.