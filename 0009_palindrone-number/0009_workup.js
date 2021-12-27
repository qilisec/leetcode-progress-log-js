// First attempt
var isPalindrome = function(x) {
    let length = x.length
    for (let i=0; i < length/2; i++) {
        if (x.charAt(i) !== x.charAt(length-i-1)) {
            return false
        }
    }
    return true
}
// Failed on "-121"

var isPalindrome = function(x) {
    let length = x.length
    console.log(length)
    if (x < 0) {
        return false
    }
    for (let i=0; i < length/2; i++) {
        if (x.charAt(i) !== x.charAt(length-i-1)) {
            return false
        }
    }
    return true
}
// Failed on "10"
// Realized ".length" is not an applicable method here.

var isPalindrome = function(x) {
    let str = x.toString()
    let length = str.length
    if (x < 0) {
        return false
    }
    for (let i=0; i < length/2; i++) {
        if (str.charAt(i) !== str.charAt(length-i-1)) {
            return false
        }
    }
    return true
}
// Succeeded. >58.75% faster runtime; <77.75% memory usage. 