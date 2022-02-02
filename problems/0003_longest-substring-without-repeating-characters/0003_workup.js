var lengthOfLongestSubstring = function(s) {
  let strArr = s.split("")
  let longest = 0
  for (let i = 0; i < strArr.length; i++) {
      let charMap = {}
      let potential = ""
      if (charMap[strArr[i]] !== undefined) {
        if (potential.length > longest) {
            longest = potential.length
            potential = ""
        }
      } else if (charMap[strArr[i]] === 1) {
              charMap[strArr[i]] += 1
          } else {
              charMap[strArr[i]] = 1
          }
    }  
};

var lengthOfLongestSubstring = function(s) {
    let strArr = s.split("")
    let currentLongest = 0
    let potential = ""
    let charMap = {}
    for (let i = 0; i < strArr.length; i++) {
        for (let j = i; j < strArr.length; j++) {
            if (charMap[strArr[j]]) {
                if (potential.length > currentLongest) {
                    currentLongest = potential.length
                    charMap = {}
                    potential = ""
                }
            } else {
                charMap[strArr[j]] = 1
                potential += strArr[j]
            }
        }
    }
      return currentLongest  
  };
  // Failed on " "

var lengthOfLongestSubstring = function(s) {
    let strArr = s.split("")
    let currentLongest = 0
    let potential = ""
    let charMap = {}
    if (!s.length) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    for (let i = 0; i < strArr.length; i++) {
        for (let j = i; j < strArr.length; j++) {
            if (charMap[strArr[j]]) {
                if (potential.length > currentLongest) {
                    currentLongest = potential.length
                    charMap = {}
                    potential = ""
                }
            } else {
                charMap[strArr[j]] = 1
                potential += strArr[j]
            }
        }
    }
      return currentLongest  
};
// Failed on "jbpnbwwd". The correct output was 4 (jpbn) but my code produced "5". This is because it retained the last "wd" as the value of "potential" when strArr.length was reached and the cycle went from i = 0 to i = 1.

var lengthOfLongestSubstring = function(s) {
    let strArr = s.split("")
    let currentLongest = 0
    let potential = ""
    let charMap = {}
    if (!s.length) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    for (let i = 0; i < strArr.length; i++) {
        potential = ""
        for (let j = i; j < strArr.length; j++) {
            if (charMap[strArr[j]]) {
                if (potential.length > currentLongest) {
                    currentLongest = potential.length
                    charMap = {}
                    potential = ""
                }
            } else {
                charMap[strArr[j]] = 1
                potential += strArr[j]
            }
        }
    }
      return currentLongest  
};
// Failed on "pwwkew". The correct output was "3" (kew/wke) but my code returned "2". This is because #1: The correct output was obtained on the last element of the string, thus causing the cycle to progress to the next cycle (i.e. i = 0 to i = 1) but the length of potential was not counted at that point. Also #2 is that I did not reset the charMap between cycles.

var lengthOfLongestSubstring = function(s) {
    let strArr = s.split("")
    let currentLongest = 0
    let potential = ""
    let charMap = {}
    if (!s.length) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    for (let i = 0; i < strArr.length; i++) {
        if (potential.length > currentLongest) {
            currentLongest = potential.length
        }
        charMap = {}
        potential = ""
        for (let j = i; j < strArr.length; j++) {
            if (charMap[strArr[j]]) {
                if (potential.length > currentLongest) {
                    currentLongest = potential.length
                    charMap = {}
                    potential = ""
                }
            } else {
                charMap[strArr[j]] = 1
                potential += strArr[j]
            }
        }
    }
      return currentLongest  
};
// Failed on "jbpnbwwd"

var lengthOfLongestSubstring = function(s) {
    let strArr = s.split("")
    let currentLongest = 0
    let potential = ""
    let charMap = {}
    if (!s.length) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    for (let i = 0; i < strArr.length; i++) {
        if (potential.length > currentLongest) {
            currentLongest = potential.length
        }
        charMap = {}
        potential = ""
        for (let j = i; j < strArr.length; j++) {
            if (charMap[strArr[j]]) {
                if (potential.length > currentLongest) {
                    currentLongest = potential.length
                }
                charMap = {}
                potential = ""
            } else {
                charMap[strArr[j]] = 1
                potential += strArr[j]
            }
        }
    }
      return currentLongest  
};
// Failed due to exceeding time limit. The test case was on an extremely long string

var lengthOfLongestSubstring = function(s) {
    let strArr = s.split("")
    let currentLongest = 0
    let potential = ""
    let charMap = {}
    let firstRepeat = ""
    if (!s.length) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    for (let i = 0; i < strArr.length; i++) {
        if (potential.length > currentLongest) {
            currentLongest = potential.length
        }
        charMap = {}
        potential = ""
        if (strArr[i-1] === firstRepeat || i === 0) {
            firstRepeat = ""
            for (let j = i; j < strArr.length; j++) {
                if (charMap[strArr[j]]) {
                    if (potential.length > currentLongest) {
                        currentLongest = potential.length
                    }
                    charMap = {}
                    potential = ""
                    firstRepeat = strArr[j]
                } else {
                    charMap[strArr[j]] = 1
                    potential += strArr[j]
                }
            }
        }
    }
      return currentLongest  
};
// Failed on "ohomm". Expected output was "3" but my code generated "2". The problem was that my "firstRepeat" variable updates "too frequently". I need to be able to tell if going from "i" to "i+1" will just reduce the length of the longest substring

var lengthOfLongestSubstring = function(s) {
    let strArr = s.split("")
    let currentLongest = 0
    let potential = ""
    let charMap = {}
    let firstRepeat = ""
    let flag = ""
    if (!s.length) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    for (let i = 0; i < strArr.length; i++) {
        if (potential.length > currentLongest) {
            currentLongest = potential.length
        }
        charMap = {}
        potential = ""
        if (strArr[i] === flag || flag === "") {
            flag = ""
            for (let j = i; j < strArr.length; j++) {
                if (charMap[strArr[j]]) {
                    if (potential.length > currentLongest) {
                        currentLongest = potential.length
                    }
                    if (j === i) {
                        flag = strArr[j]
                    }
                    charMap = {}
                    potential = ""
                    firstRepeat = strArr[j]
                } else {
                    charMap[strArr[j]] = 1
                    potential += strArr[j]
                }
            }
        }
    }
      return currentLongest  
};
// Failed due to exceeding time limit

var lengthOfLongestSubstring = function(s) {
    let strArr = s.split("")
    let currentLongest = 0
    let potential = ""
    let charMap = {}
    let firstRepeat = ""
    let flag = ""
    if (!s.length) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    for (let i = 0; i < strArr.length; i++) {
        if (potential.length > currentLongest) {
            currentLongest = potential.length
        }
        charMap = {}
        potential = ""
        if (strArr[i-1] === flag || flag === "" | i === 0) {
            flag = ""
            for (let j = i; j < strArr.length; j++) {
                if (charMap[strArr[j]]) {
                    if (potential.length > currentLongest) {
                        currentLongest = potential.length
                    }
                    if (j === i) {
                        flag = strArr[j]
                    }
                    charMap = {}
                    potential = ""
                    firstRepeat = strArr[j]
                } else {
                    charMap[strArr[j]] = 1
                    potential += strArr[j]
                }
            }
        }
    }
      return currentLongest
};
// Failed due to exceeding time limit


/*
Let x = the length of the longest substring thus far.
Let y = the length of the substring that starts with strArr[i]
Moving from cycle "i" to cycle "i+1", we should really only explore the case of j = i+1 if could potentially produce a substring longer than x.
The substring that starts with strArr[i+1] will be at least y - 1. However, we could just run into the case that the string is something like "strArr[i], strArr[i+1], ..., strArr[i], strArr[i+1"
In that case, starting from strArr[i+1] would also produce a substring with length of y. 
Therefore, before we even attempt to build a substring starting with [i+1], we should check the elements past strArr[i+y-1] (i.e. the repeat of the character strArr[i]). 
However, we shouldn't just check one element. This is because if we just the element after the repeat of strArr[i], then we only guarantee that the substring will have length that is not less than y. What we want though, is a substring with length greater and x.Therefore, we should check enough elements such that by checking those elements, we can at least guarantee that the substring started at strArr[i+1] will ultimately have length greater than x. 
Thus, we should check x - y + 1 elements. For example, if the current longest substring has length 4 and our substring starting at strArr[i] had length 2, then we should check "4 - 2 + 1" = "3" elements, starting from strArr[i+y]
That being said, it seems that we could apply this to every "j", not just "j = i+1"
Also, how much time does this really save?
*/

var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length
    }
    let stringArray = s.split("")
    let start = 0
    let end = 1
    let seenChars = {}
    let longest = 0
    let substring = ""
    let i = start
    if (s.length <= 1) {
        return s
    }
    while (end !== s.length) {
        if ((end - start) <= longest) {
            end++
        } else {
            let char = seenChars[stringArray[i]]
            if (char && char >= start) {
                start = i + 1
                substring = ""
                i = start
                char = i
                end++
            } else {
                let char = seenChars[stringArray[i]]
                longest++
                substring += stringArray[i]
                end++
                char = i
            }
        }
    }
    return substring
}

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

var lengthOfLongestSubstring = function(s) {
    // Set up simple return for when length = 0 or 1
    if (s.length <= 1) {
        return s.length
    }
    // Set up hash table, left boundary of window, and the value to be returned
    const charMap = {}
    let substringStartPos = 0
    let substringLength = 0
    // Set up "for-let" loop which will establish right boundary of window as well as mechanism for shifting the left/right boundaries, updating charMap, and evaluating the length of the substring. The loop is completed when the right boundary of the window reaches the end of the string, as there is no way to generate any lengths longer than what already exists.
    for (let substringEndPos = 0; substringEndPos < s.length; substringEndPos++) {
        // Look up the most recent character added to the substring
        const currentChar = s[substringEndPos]
        // Establish a reference to the value associated with that character within the hash table.
        const currentCharSeen = charMap[currentChar]
        // Cross-reference this character with the hash table to see if this character has already appeared within the substring defined by the left and right boundaries. If it has, then a repeat character has been found further attempts are halted by shifting the left boundary to the position immediately following that of the repeat character.
        if (currentCharSeen >= substringStartPos) {
            substringStartPos = currentCharSeen + 1
        }
        // Update the character's value within the hash table using the position of the right boundary of the window.
        charMap[currentChar] = substringEndPos
        // Evaluate whether the current substring being looked at has a greater length than that which is currently being stored.
        substringLength = Math.max(substringLength, substringEndPos - substringStartPos + 1)
    }
    // Return the final value of "substringLength", which will be the length of the longest substring that does not contain repeating characters.
    return substringLength
}