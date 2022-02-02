var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
  };
  
var validSubPalindrome = function(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
// Passed. Faster than 10.07% of submissions. Less memory usage than 86.12% of submissions


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