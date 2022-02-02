var minRemoveToMakeValid = function(s) {
    const stringArray = s.split("");
    const unpaired = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === "(") {
            unpaired.push(i);
        } else if (stringArray[i] === ")" && unpaired.length) {
            unpaired.pop();
        } else {
            stringArray[i] = ""
        }
    }
    while (unpaired.length) {
        const extraParens = unpaired.pop();
        stringArray[extraParens] = "";
    }
    return stringArray.join("");
};
// Failed on "lee(t(c)o)de)" as expected output was "lee(t(c)o)de" but instead produced "(())". I forgot to consider that stringArray contained more than just parentheses symbols so my "else conditional" on line 9 was too "broadly applied".

var minRemoveToMakeValid = function(s) {
    const stringArray = s.split("");
    const unpaired = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === "(") {
            unpaired.push(i);
        } else if (stringArray[i] === ")" && unpaired.length) {
            unpaired.pop();
        } else if (stringArray[i] === ")") {
            stringArray[i] = ""
        }
    }
    while (unpaired.length) {
        const extraParens = unpaired.pop();
        stringArray[extraParens] = "";
    }
    return stringArray.join("");
};
// Passed. Faster than 74.55% of submissions. Less memory usage than 86.02% of submissions.