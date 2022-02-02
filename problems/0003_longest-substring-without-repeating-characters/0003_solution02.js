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

// var lengthOfLongestSubstring = function(s) {
//     let sArray = s.split("")
//     let substringStart = 0
//     let substringEnd = 1
//     let length = s.length
//     let stringCharMap = {}
//     let i = substringStart
//     let longest = 0
//     let substring = ""
//     if (!s[0]) {
//         return ""
//     }
//     if (!s[1]) {
//         return s
//     }
//     while (substringEnd < s.length) {
//         // A repeat character is found within the substring
//         // Update index of repeat character and move substringStart to new index "substringEnd - 1"
//         if (stringCharMap[sArray[i]] && substringStart > stringCharMap[sArray[i]]) {
//             stringCharMap[sArray[i]] = i
//             substring += sArray[i]
//             i++
//        // We actually don't need this conditional. It can be folded // into the other substringStart > stringCharMap[sArray[i]]
//         // A "repeat" chracter was found within the substring but not actually a repeat
//         } else if (stringCharMap[sArray[i]] && substringStart <= stringCharMap[sArray[i]]) {
//             if (substring.length > longest) {
//                 longest = substring.length
//             }
//             substringStart = substringEnd - 1
//             substring = ""
//             i = substringStart
//         } else {
//             // A repeat character is not found because either it's a new character or substringStart > stringCharMap[sArray[i]]
//             if (!stringCharMap[sArray[i]] || substringStart > stringCharMap[sArray[i]] ) {
//                 stringCharMap[sArray[i]] = i
//                 substring += sArray[i]
//                 i++
//             } else if (i > substringEnd) {
//                 if (substring.length > longest) {
//                     longest = substring.length
//                 }
//                 substringEnd++
//                 i = substringStart
//             }
//         }
//     }
// }

var lengthOfLongestSubstring = function(s) {
    let sArray = s.split("")
    let substringStart = 0
    let substringEnd = 1
    let length = s.length
    let stringCharMap = {}
    let i = substringStart
    let longest = 0
    let substring = ""
    if (!s[0]) {
        return ""
    }
    if (!s[1]) {
        return s
    }
    while (substringEnd < s.length) {
        if (stringCharMap[sArray[i]] && substringStart <= stringCharMap[sArray[i]]) {
            if (substring.length > longest) {
                longest = substring.length
            }
            substringStart = substringEnd - 1
            substring = ""
            i = substringStart
        } else {
            // A repeat character is not found because either it's a new character or substringStart > stringCharMap[sArray[i]]
            if (!stringCharMap[sArray[i]] || substringStart > stringCharMap[sArray[i]] ) {
                stringCharMap[sArray[i]] = i
                substring += sArray[i]
                i++
            } else if (i > substringEnd) {
                if (substring.length > longest) {
                    longest = substring.length
                }
                substringEnd++
                substring = ""
                i = substringStart
            }
        }
    }
    return longest
}