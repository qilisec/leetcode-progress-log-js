/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 10**5
s consists of lowercase English letters.
*/

var validPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) {
            return removeOne(s, left + 1, right) || removeOne(s, left, right - 1)
        }
        left++
        right--
    }
    return true
};

var removeOne = function(s, start, end) {
    let substring = ""
     for (let i = start; i <= end; i++) {
        substring += s[i]
     }
     let left = 0
     let right = substring.length - 1
     while (left < right) {
         if (substring[left] !== substring[right]) {
             return false
         }
         left++
         right--
     }
     return true
}
// Passed. faster than 50.82% of submissions. Less memory usage than 10.99% of submissions.