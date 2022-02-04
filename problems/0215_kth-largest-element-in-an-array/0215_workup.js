// Initialize quick select of array using index of kth largest element as the index of interest
var findKthLargest = function(nums, k) {
  const indexToFind = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

// Set up quick select algorithm
const quickSelect = function(nums, left, right, indexToFind) {
  const pivot = generatePivot(nums, left, right);
  if (pivot === indexToFind) {
    return nums[pivot];
  } else if (indexToFind < pivot) {
    return quickSelect(nums, left, pivot - 1, indexToFind);
  } else {
    return quickSelect(nums, pivot + 1, right, indexToFind);
  }
};

// Set up function to generate comparisons to find elements in sub-array that need swapping.
const generatePivot = function(nums, left, right) {
  let i = left
  for (let j = left; j <= right; j++) {
    if (nums[j] <= nums[right]) {
      swapElement(nums, i, j);
      i++;
    }
  }
  return i - 1;
};

// Set up function to swap elements in sub-arrays
const swapElement = function(inputArr, i, j) {
  const temp = inputArr[i];
  inputArr[i] = inputArr[j];
  inputArr[j] = temp;
};
// Passed. Faster than 11.71% of submissions. Less memory usage than 84.99% of submissions.