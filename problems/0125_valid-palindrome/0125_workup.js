// Initial solution
var isPalindrome = function(s) {
    let length = s.length
    for (let i=0; i < length/2; i++) {
        if (s.charAt(i) !== s.charAt(length-i-1)) {
            return false
        }
    }
    return true
}
// Failed on "A man, a plan, a canal: Panama"
// Didn't realize the instructions asked us to remove all non-alphanumeric characters


var isPalindrome = function(s) {
    let lower = s.toLowerCase()
    let strArr = lower.match(/[\w]/g)
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
// Failed on "ab_a"
// "/\w/" actually includes the "_" character but we don't want to include the underscore

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