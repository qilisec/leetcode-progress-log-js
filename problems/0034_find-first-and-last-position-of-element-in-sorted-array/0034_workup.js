// Set up function to find indices of the first and last instances of a target value
var searchRange = function (nums, target) {
  // Optimize by creating conditional for the special case of special case the array being empty.
  if (nums.length === 0) {
    return [-1, -1]
  };
  // Create variable to find first instance of target element
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);
  if (firstPos === -1) {
    return [-1, -1]
  };
  // Set up while-loop to find the last instance of target element
  let startPos = firstPos
  let temp1 = null
  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;
  let endPos = firstPos
  let temp2 = null;
  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;
  return [startPos, endPos];
};

// Set up binary search algorithm
const binarySearch = (nums, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
// Passed. Faster than 36.16% of solutions. Less memory usage than 86.70% of submissions.