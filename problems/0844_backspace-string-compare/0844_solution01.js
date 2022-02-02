/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space?
*/

var backspaceCompare = function(s, t) {
    let str1Arr = s.split("")
    let str2Arr = t.split("")
    let newArr1 = []
    let newArr2 = []
    for (i = 0; i < str1Arr.length; i++) {
        if (str1Arr[i] === "#") {
            newArr1.pop()
        } else {
            newArr1.push(str1Arr[i])
        }
    }
    for (j = 0; j < str2Arr.length; j++) {
        if (str2Arr[j] === "#") {
            newArr2.pop()
        } else {
            newArr2.push(str2Arr[j])
        }
    }
    let str1 = newArr1.toString()
    let str2 = newArr2.toString()
    if (str1 === str2) {
        return true
    } else {
        return false
    }
};
// Passed. Faster than 14.57% of submissions. Less memory usage than 49.89% of submissions