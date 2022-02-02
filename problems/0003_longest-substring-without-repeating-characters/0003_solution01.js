/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:
0 <= s.length <= 5 * 10**4
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    const charMap = {};
    let charsChecked = 0, currentMax = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const previousChar = charMap[currentChar];
        
        if(previousChar >= charsChecked) {
            charsChecked = previousChar + 1;
        }
        
        charMap[currentChar] = i;
        
        currentMax = Math.max(currentMax, i - charsChecked + 1);
    }
    
    return currentMax;
};
// Passed. Faster than 69.27% of submissions, Less memory usage than 49.79% of submissions