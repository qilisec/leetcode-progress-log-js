/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 
Constraints:

1 <= k <= nums.length <= 10**4
-104 <= nums[i] <= 10*4
*/

var findKthLargest = function(nums, k) {
  const indexToFind = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

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

const swapElement = function(inputArr, i, j) {
  const temp = inputArr[i];
  inputArr[i] = inputArr[j];
  inputArr[j] = temp;
};
// Passed. Faster than 11.71% of submissions. Less memory usage than 84.99% of submissions.