/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 10**5
0 <= height[i] <= 10**4
*/

var maxArea = function(height) {
    let maxArea = 0
    let p1 = 0
    let p2 = height.length - 1
    while (p1 < p2) {
        const localHeight = Math.min(height[p1], height[p2])
        const localWidth = p2 - p1
        const area = localHeight * localWidth
        maxArea = Math.max(maxArea, area)
        if (height[p1] <= height[p2]) {
            p1++
        } else {
            p2--
        }
    }
    return maxArea
}
// Passed. Faster than 14.77% of submissions. Less memory usage than 48.23% of submissions.