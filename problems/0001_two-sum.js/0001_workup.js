var twoSum = function(nums, target) {
    let sumMap = {}
    for (let i = 0;i < nums.length; i++) {
        if (nums[i] === target) {
            return [i]
        }
        let diff = target - nums[i]
        if (sumMap[diff] !== undefined) {
            return [i, sumMap[diff]]
        } else {
            sumMap[nums[i]] = i
        }
    }
    return null
  }
// Failed on [0,4,3,0]. The answer apparently must be involve two numbers. It cannot just be a one number solution.

var twoSum = function(nums, target) {
    let sumMap = {}
    for (let i = 0;i < nums.length; i++) {
        let diff = target - nums[i]
        if (sumMap[diff] !== undefined) {
            return [i, sumMap[diff]]
        } else {
            sumMap[nums[i]] = i
        }
    }
    return null
  }
// Passed. Faster than 33.27% of submissions. Less memory usage than 49.64% of submissions