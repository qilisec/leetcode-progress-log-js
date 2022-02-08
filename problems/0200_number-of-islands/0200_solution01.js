/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 
Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

// BFS
var numIslands = function(grid) {
    let countIslands = 0
    
    // this nested for loop would iterate throguh the entire grid to find anymore islands
    for (let i=0; i<grid.length; i++ ){
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] == "1") {
                countIslands++
                
                // bfs would spread to find more pieces of its current island, then make them all '0' so finding other islands would be easier
                bfs(grid, i, j)
            }
        }
    }
    return countIslands
};


function bfs(grid, r, c) {
    let totalRows = grid.length
    let totalCols = grid[0].length
    // use the positions as queues since that is where the bfs would spread
    let queue = [[r,c]]
    while (queue.length > 0) {
        let curr = queue.shift()
        let currRow = curr[0]
        let currCol = curr[1]
        // if its less than 0, its out of bounds, if its equal to to the total, then it is also out of bounds since arrays start at 0, while lengths starts at 1 if an element exists inside
        if (currRow < 0 || currRow == totalRows || currCol < 0 || currCol == totalCols) {
            continue
        }
        // if equal to 0 then continue since 0 is not apart of the islands
        if (grid[currRow][currCol] == '0') {
            continue
        }
        // if found an island/parts of an island, convert it to 0
        if (grid[currRow][currCol] == '1') {
            grid[currRow][currCol] = '0'
        }
        // looks in all directions if found an island/parts of an island
        queue.push([currRow+1, currCol])
        queue.push([currRow-1, currCol])
        queue.push([currRow, currCol+1])
        queue.push([currRow, currCol-1])
    }
}
// Passed. Faster than 26.16% of submissions. Less memory than 26.38% of submissions.