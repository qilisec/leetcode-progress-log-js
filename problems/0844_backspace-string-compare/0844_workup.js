var backspaceCompare = function(s, t) {
    let str1Arr = s.split("")
    let str2Arr = t.split("")
    for (i = 0; i < str1Arr.length; i++) {
        if (str1Arr[i] = "#") {
            str1Arr = str1Arr.splice(i-1, 1)
        }
    }
    for (j = 0; j < str2Arr.length; j++) {
        if (str2Arr[j] = "#") {
            str2Arr = str2Arr.splice(j-1, 1)
        }
    }
    let str1 = str1Arr.toString()
    let str2 = str2Arr.toString()
    if (str1 === str2) {
        return true
    } else {
        return false
    }
};
// Failed on s = "xywrrmp", t = "xywrrm#p"

var backspaceCompare = function(s, t) {
    let str1Arr = s.split("")
    let str2Arr = t.split("")

    for (i = 0; i < str1Arr.length; i++) {
        if (str1Arr[i] === "#") {
            str1Arr.splice(i-1, 1)
        }
    }
    for (j = 0; j < str2Arr.length; j++) {
        if (str2Arr[j] === "#") {
            str2Arr.splice(j-1, 1)
        }
    }
    let str1 = str1Arr.toString()
    let str2 = str2Arr.toString()
    if (str1 === str2) {
        return true
    } else {
        return false
    }
};
// Doesn't work because the splicing doesn't remove the "#" characters which means that there's still a difference between string pairs such as "a#a#" and "". Also, I noticed that I used str1Arr = str1Arr.splice(i-1,1) which was incorrect.

var backspaceCompare = function(s, t) {
    let str1Arr = s.split("")
    let str2Arr = t.split("")

    for (i = 0; i < str1Arr.length; i++) {
        if (str1Arr[i] === "#") {
            str1Arr.splice(i-1, 1)
        }
    }
    for (j = 0; j < str2Arr.length; j++) {
        if (str2Arr[j] === "#") {
            str2Arr.splice(j-1, 1)
        }
    }
    let str1 = str1Arr.toString()
    let str2 = str2Arr.toString()
    if (str1 === str2) {
        return true
    } else {
        return false
    }
};
// Doesn't work because the splicing affects the length of the array which means that there could be unintentional halts in the loop. For example "a" and "a#a#a#a" returns false when it should return true because the loop for "a#a#a#a" aborts too early.

var backspaceCompare = function(s, t) {
    let str1Arr = s.split("")
    let str2Arr = t.split("")
    let newArr1 = []
    let newArr2 = []
    for (i = 0; i < str1Arr.length; i++) {
        if (str1Arr[i] === "#") {
            newArr1 = newArr1.pop()
        } else {
            newArr1 = newArr1.push(str1Arr[i])
        }
    }
    for (j = 0; j < str2Arr.length; j++) {
        if (str2Arr[j] === "#") {
            newArr2 = newArr2.pop()
        } else {
            newArr2 = newArr2.push(str2Arr[j])
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
// Failed. The issue is "newArr1 = newArr1.pop()" and other similar lines. It should just be "newArr1.pop()"

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