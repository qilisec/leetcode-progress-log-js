/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 10**5
s consists only of printable ASCII characters.
*/

var isPalindrome = function(s) {
    let lower = s.toLowerCase()
    let strArr = lower.match(/[A-Za-z0-9]/g)
    console.log(strArr)
    if (strArr) {
        str = strArr.toString()
    } else {
        str = ""
    }
    let length = str.length
    for (let i=0; i < length/2; i++) {
        if (str.charAt(i) !== str.charAt(length-i-1)) {
            return false
        }
    }
    return true
}
// Accepted. Faster than >97.29% of all solutions; <23.16% had more memory usage