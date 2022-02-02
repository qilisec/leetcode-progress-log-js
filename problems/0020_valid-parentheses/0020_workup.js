var isValid = function(s) {
  // Set up stack to "hold" prospective unpaired parentheses as well as a "hash table" to establish the association of the parentheses symbols.
  const unpaired = [];
  const parensPairs = {
      "(": ")",
      "{": "}",
      "[": "]"
  }
  // Optimize for case when s is ""
  if (s.length === 0) {
      return true;
  }
  // Create for-let loop to traverse through string and find "parens open" characters using our constructed hash table.
  for (let i = 0; i < s.length; i++) {
    // Set up conditional for target case: An "open parentheses" character is found
    if (parensPairs[s[i]]) {
      unpaired.push(s[i]);
    } else {
      // Set up conditional for alternate case: An open parenthesis" character is not found. If this character is not the correct "close parentheses" character that was most recently added to the stack, then return false.
      const nextNeedToPair = unpaired.pop();
      const pairSuccess = parensPairs[nextNeedToPair];
      if (s[i] !== pairSuccess) {
          return false
      }
    }
  }
  // Return true if no "false" have been returned and if the stack is fully empty. 
  return unpaired.length === 0;
}
// Passed; Faster than 32.91% of submissions. Less memory usage than 78.67% of submissions.