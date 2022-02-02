/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 10**4
0 <= height[i] <= 10**5
*/

var trap = function(height) {
    let totalWater = 0
    let n = height.length
    let leftPoint= 0
    let rightPoint = n-1
    let leftWall = 0
    let rightWall = 0
    while (leftPoint < rightPoint) {
        if (height[leftPoint] <= height[rightPoint]) {
            if (height[leftPoint] >= leftWall) {
                leftWall = height[leftPoint]
            } else {
                totalWater += leftWall - height[leftPoint]
            }
            leftPoint++
        } else {
            if (height[rightPoint] >= rightWall) {
                rightWall = height[rightPoint]
            } else {
                totalWater += rightWall - height[rightPoint]
            }
            rightPoint--
        }
    }
    return totalWater
}
// Passed; Faster than 19.35% of submissions; Less memory usage than 71.85% of submissions.