var trap = function(height) {
  let trapped = 0
  let n = height.length
  let valleys = []
  for (let i = 0; i < n; i++) {
    // if (height[i-i] < height[i] && height[i+1] < height[i]) {
    if (valleys.length % 2 === 0 && height[i+1] < height[i]) {
        valleys.push(height[i])
    }
    if (valleys.length % 2 === 1 && height[i-1] < height[i]) {
        valleys.push(height[i])
    }
  }
  return measureWater(valleys) 
};
var measureWater = function(heights) {

}
// Gave up on this approach. I wanted to create an array that mapped out the "valley walls" that would allow for water to collect. Then I wanted to pass that array into a separate function that would use recursion to pull out 2-element arrays and decrement each element by 1 while increasing "water collected" by 1. This recursion would continue until one element of the 2-element array became 0 at which point, the recursion would end and the total "water collected" would be returned. Multiple 2-element arrays would be obtained from the initial "valley walls" array passed into the function. Once all of the 2-element arrays were parsed, the total "water collected" would be summed and returned to produce the answer. I noticed that the "water collected" might not increase just by 1 for each decrement on the 2-element array. Rather, it would depend on the difference between the indices associated with those "valley walls".  This information would also have to be stored and passed into the second function which is what caused me to abandon this method.


var trap = function(height) {
    let totalWater = 0
    let n = height.length
    for (let i = 0; i < n; i++) {
        let leftWall = 0
        let rightWall = 0
        for (let j = 0; j < i; j++) {
            if (height[j] > leftWall) {
                leftWall = height[j]
            }
        }
        for (let k = i+1; k < n; k++) {
            if (height[k] > rightWall) {
                rightWall = height[k]
            }
        }
        let potentialWater = Math.min(leftWall, rightWall) - height[i]
        if (potentialWater > 0) {
            totalWater += potentialWater
        }
    }
    return totalWater
}
// Passed but time limit exceeded. The key factor is to recognize the process by which we can calculate the amount of water any given index can possibly "hold". For this process, the first step is to identify the heights of the left and right "walls" that serve to hold the water. The next step is to identify which of the two walls is "shorter" as that is what ultimately serves as the cap for the maximum amount of water that can be trapped. The last step is to subtract the height associated with the given index itself since it is the relative relationship between the height associated with the given index and the walls that sandwich it that determines whether water can actually be trapped there. For example, if the height of a given index is greater than that of its left and right "walls", then it's obvious that this point wouldn't trap any water.

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
// Passed; Faster than 19.35% of submissions; Less memory usage than 71.85% of submissions. The key to increasing the speed of my code was to use two pointers as with the solution to the "0011_container-with-most-water" problem.