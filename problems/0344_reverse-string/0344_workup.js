/*
function reverseString(inputString) {
    let arrayProduct = [];
    let reverseString = ""
    for (let i=0; i < inputString.length; i++) {
        arrayProduct.push(inputString.charAt(i));
    };
    console.log(arrayProduct);
    for (let j=inputString.length - 1 ; j >= 0; j--) {
        reverseString += arrayProduct[j]
    }
    console.log(reverseString)
}

reverseString(testString)
*/

var reverseString = function(s) {
    let inputString = s.join("")
    let arrayProduct = [];
    for (let i = inputString.length ; i >= 0; i--) {
        arrayProduct.push(inputString.charAt(i));
    };
    return arrayProduct
};
// Failed. Didn't realize that the question asked for a solution that mutated the input

var reverseString = function(s) {
    let inputStr = s.join("")
    for (let i = 0; i < inputStr.length; i++) {
        s[i] = inputStr.charAt(inputStr.length -1 - i)
    }
};
// Passed. Faster than 6.57% of submissions. Less memory usage than 16.97% of submissions.